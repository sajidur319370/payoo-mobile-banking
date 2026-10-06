import { BONUS_COUPONS, USER } from "./data.js";
import {
  applyTransaction,
  getBalance,
  hasUsedCoupon,
  markCouponUsed,
} from "./store.js";
import { formatMoney } from "./utils.js";

/** Throws an Error with a readable message when the request is invalid. */
function validateRequest({ amount, pin }, { spending = false } = {}) {
  if (!Number.isFinite(amount) || amount <= 0)
    throw new Error("Enter a valid amount.");
  if (pin !== USER.pin) throw new Error("Incorrect PIN.");
  if (spending && amount > getBalance())
    throw new Error("Insufficient balance.");
}

/** Each handler returns a success message, or throws an Error. */
export const serviceHandlers = {
  "add-money"(values) {
    validateRequest(values);
    applyTransaction("ADD_MONEY", values.amount, values.bank);
    return `${formatMoney(values.amount)} added from ${values.bank}.`;
  },

  "cash-out"(values) {
    validateRequest(values, { spending: true });
    applyTransaction("CASH_OUT", values.amount, `Agent ${values.account}`);
    return `${formatMoney(values.amount)} cashed out.`;
  },

  transfer(values) {
    validateRequest(values, { spending: true });
    applyTransaction("TRANSFER", values.amount, `To ${values.account}`);
    return `${formatMoney(values.amount)} sent to ${values.account}.`;
  },

  bonus({ coupon }) {
    const code = coupon.trim().toUpperCase();
    const bonus = BONUS_COUPONS[code];
    if (!bonus) throw new Error("Invalid coupon code.");
    if (hasUsedCoupon(code)) throw new Error("This coupon was already used.");

    markCouponUsed(code);
    applyTransaction("BONUS", bonus, code);
    return `Bonus of ${formatMoney(bonus)} added.`;
  },

  "pay-bill"(values) {
    validateRequest(values, { spending: true });
    applyTransaction("PAY_BILL", values.amount, values.biller);
    return `${formatMoney(values.amount)} paid for ${values.biller}.`;
  },
};
