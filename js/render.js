import { createEmptyState, createTransactionItem } from "./components.js";
import { getBalance, getTransactions } from "./store.js";
import { $, formatAmount } from "./utils.js";

const LATEST_COUNT = 3;

function renderList(selector, transactions, emptyText) {
  $(selector).innerHTML = transactions.length
    ? transactions.map(createTransactionItem).join("")
    : createEmptyState(emptyText);
}

export function renderBalance() {
  $("#balance").textContent = formatAmount(getBalance());
}

export function renderTransactions() {
  const all = getTransactions();
  renderList("#payment_list", all.slice(0, LATEST_COUNT), "No payments yet.");
  renderList("#transaction_list", all, "No transactions yet.");
}

/** Redraws everything that depends on store data. */
export function renderAll() {
  renderBalance();
  renderTransactions();
}
