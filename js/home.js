import { logout, requireAuth } from "./auth.js";
import { SERVICES } from "./config.js";
import { renderMenu, showSection } from "./navigation.js";
import { $ } from "./utils.js";

requireAuth(); // logged-out users are sent back to the login page

function init() {
  renderMenu(SERVICES);

  $("#menu").addEventListener("click", (event) => {
    const button = event.target.closest("[data-menu]");
    if (button) showSection(button.dataset.menu);
  });
  $("#home_button").addEventListener("click", () => showSection("home"));
  $("#view_all").addEventListener("click", () => showSection("transactions"));
  $("#logout").addEventListener("click", logout);

  showSection("home");
}

init();
