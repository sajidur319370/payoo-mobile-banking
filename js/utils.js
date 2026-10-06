/** Short wrapper for document.querySelector. */
export const $ = (selector, scope = document) => scope.querySelector(selector);
export const $$ = (selector, scope = document) => [
  ...scope.querySelectorAll(selector),
];
/** 4500 -> "4,500.00" */
export const formatAmount = (value) =>
  value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

/** 4500 -> "$ 4,500.00" */
export const formatMoney = (value) => `$ ${formatAmount(value)}`;

/** Date -> "5 Oct 2026, 08:15 pm" */
export const formatDate = (date) =>
  new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
/**
 * Shows a temporary DaisyUI alert at the top of the screen.
 * @param {string} message
 * @param {"success" | "error"} type
 */
export function showToast(message, type = "success") {
  const container = $("#toast_container");
  if (!container) return;

  const alert = document.createElement("div");
  alert.className = `alert alert-${type} text-white`;
  alert.setAttribute("role", "status");
  alert.textContent = message;

  container.append(alert);
  setTimeout(() => alert.remove(), 2500);
}
