import { $, $$ } from "./utils.js";

const BUTTON_STYLE =
  "cursor-pointer border rounded-lg p-4 flex flex-col justify-center items-center gap-1 focus:outline-none transition-colors";
const ACTIVE_STYLE = ["border-blue-500", "bg-blue-50"];

/** Builds the menu buttons from the services config. */
export function renderMenu(services) {
  $("#menu").innerHTML = services
    .map(
      ({ key, label, icon }) => `
      <button type="button" data-menu="${key}" class="${BUTTON_STYLE}">
        <img src="./assets/${icon}" alt="" />
        <span class="text-sm">${label}</span>
      </button>`,
    )
    .join("");
}

/** Shows one section ("home" or a service key) and highlights its menu button. */
export function showSection(key) {
  $$("[data-section]").forEach((section) =>
    section.classList.toggle("hidden", section.dataset.section !== key),
  );

  $$("[data-menu]").forEach((button) =>
    ACTIVE_STYLE.forEach((cls) =>
      button.classList.toggle(cls, button.dataset.menu === key),
    ),
  );
}
