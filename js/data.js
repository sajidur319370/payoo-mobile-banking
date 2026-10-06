/** Key used to remember that the user is logged in (per browser tab). */
export const SESSION_KEY = "payoo_session";

/** Hardcoded demo account. This replaces a database. */
export const USER = Object.freeze({
  phone: "01521319370",
  pin: "1234",
});

export const INITIAL_BALANCE = 4500;

/** Coupon code -> bonus amount. Each coupon can be used once. */
export const BONUS_COUPONS = Object.freeze({ PAYOO100: 100, WELCOME50: 50 });

export const BANKS = [
  "AB bank",
  "Bank Asia",
  "Standard Chartered Bank",
  "Southeast Bank",
];

export const BILLERS = ["Electricity Bill", "Wifi Bill", "Gas Bill"];

/**
 * Every kind of transaction, defined once.
 * direction: "in" adds to the balance, "out" subtracts from it.
 */
export const TRANSACTION_TYPES = Object.freeze({
  ADD_MONEY: { label: "Add Money", direction: "in", icon: "fa-wallet" },
  CASH_OUT: {
    label: "Cash Out",
    direction: "out",
    icon: "fa-money-bill-transfer",
  },
  TRANSFER: {
    label: "Transfer Money",
    direction: "out",
    icon: "fa-paper-plane",
  },
  BONUS: { label: "Bonus", direction: "in", icon: "fa-gift" },
  PAY_BILL: { label: "Pay Bill", direction: "out", icon: "fa-file-invoice" },
});

/** Sample history, oldest first. */
export const INITIAL_TRANSACTIONS = [
  {
    typeKey: "ADD_MONEY",
    amount: 5000,
    note: "Bank Asia",
    date: new Date("2026-10-01T10:15:00"),
  },
  {
    typeKey: "CASH_OUT",
    amount: 500,
    note: "Agent 01712345678",
    date: new Date("2026-10-03T14:40:00"),
  },
];