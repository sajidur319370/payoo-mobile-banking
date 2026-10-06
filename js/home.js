import { logout, requireAuth } from "./auth.js";
import { createFormSection } from "./components.js";
import { SERVICES } from "./config.js";
import { renderMenu, showSection } from "./navigation.js";
import { renderAll } from "./render.js";
import { serviceHandlers } from "./services.js";
import { $, showToast } from "./utils.js";

requireAuth(); // logged-out users are sent back to the login page

const sections = $("#sections");

/** Reads a form into a plain object. Converts the amount to a number. */
function readFormValues(form) {
  const values = Object.fromEntries(new FormData(form));
  if ("amount" in values) values.amount = Number(values.amount);
  return values;
}

function handleSubmit(event) {
  const form = event.target.closest("form[data-service]");
  if (!form) return;
  event.preventDefault();

  try {
    const message = serviceHandlers[form.dataset.service](readFormValues(form));
    form.reset();
    renderAll();
    showToast(message);
  } catch (error) {
    showToast(error.message, "error");
  }
}

function init() {
  renderMenu(SERVICES);
  sections.insertAdjacentHTML(
    "beforeend",
    SERVICES.filter(({ form }) => form)
      .map(createFormSection)
      .join(""),
  );

  $("#menu").addEventListener("click", (event) => {
    const button = event.target.closest("[data-menu]");
    if (button) showSection(button.dataset.menu);
  });
  sections.addEventListener("submit", handleSubmit);
  $("#home_button").addEventListener("click", () => showSection("home"));
  $("#view_all").addEventListener("click", () => showSection("transactions"));
  $("#logout").addEventListener("click", logout);

  renderAll();
  showSection("home");
}

init();
