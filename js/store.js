import {
  INITIAL_BALANCE,
  INITIAL_TRANSACTIONS,
  TRANSACTION_TYPES,
} from "./data.js";

const state = {
  balance: INITIAL_BALANCE,
  transactions: [...INITIAL_TRANSACTIONS].reverse(), // newest first
  usedCoupons: new Set(),
};

export const getBalance = () => state.balance;
export const getTransactions = () => [...state.transactions];

/** Updates the balance and records the transaction in one step. */
export function applyTransaction(typeKey, amount, note = "") {
  const { direction } = TRANSACTION_TYPES[typeKey];
  state.balance += direction === "in" ? amount : -amount;
  state.transactions.unshift({ typeKey, amount, note, date: new Date() });
}

export const hasUsedCoupon = (code) => state.usedCoupons.has(code);
export const markCouponUsed = (code) => state.usedCoupons.add(code);
