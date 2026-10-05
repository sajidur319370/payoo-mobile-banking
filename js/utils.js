/** Short wrapper for document.querySelector. */
export const $ = (selector, scope = document) => scope.querySelector(selector);

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
