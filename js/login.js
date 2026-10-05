import { isLoggedIn, login } from "./auth.js";
import { $, showToast } from "./utils.js";

const HOME_PAGE = "home.html";

// Already logged in? Skip the login page.
if (isLoggedIn()) window.location.replace(HOME_PAGE);

function handleLogin(event) {
  event.preventDefault(); // stop the browser from reloading the page

  const formData = new FormData(event.currentTarget);
  const phone = formData.get("mobile_number").trim();
  const pin = formData.get("login_pin").trim();

  if (login(phone, pin)) {
    window.location.replace(HOME_PAGE);
  } else {
    showToast("Invalid mobile number or PIN.", "error");
  }
}

$("#login_form").addEventListener("submit", handleLogin);
