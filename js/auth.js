import { SESSION_KEY, USER } from "./data.js";

/** True when the current tab has a valid session. */
export const isLoggedIn = () => sessionStorage.getItem(SESSION_KEY) === "true";

/**
 * Checks the credentials and starts a session when they match.
 * @returns {boolean} whether the login succeeded
 */
export function login(phone, pin) {
  const isValid = phone === USER.phone && pin === USER.pin;
  if (isValid) sessionStorage.setItem(SESSION_KEY, "true");
  return isValid;
}

/** Ends the session and returns to the login page. */
export function logout() {
  sessionStorage.removeItem(SESSION_KEY);
  window.location.replace("index.html");
}

/** Call at the top of every protected page. */
export function requireAuth() {
  if (!isLoggedIn()) window.location.replace("index.html");
}
