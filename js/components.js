import { TRANSACTION_TYPES } from "./data.js";
import { formatDate, formatMoney } from "./utils.js";

const FIELD_STYLE =
  "placeholder-black/50 border-none bg-[#F4F5F7] p-4 rounded-full w-full text-sm focus:outline-none";

/** { min: 1, step: "any" } -> 'min="1" step="any"' */
const attrsToString = (attrs) =>
  Object.entries(attrs)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");

function createField(field, formKey) {
  const id = `${formKey}-${field.name}`; // unique per form, e.g. "add-money-pin"
  const label = `<label class="font-bold text-base" for="${id}">${field.label}</label>`;

  const control =
    field.kind === "select"
      ? `<select id="${id}" name="${field.name}" required class="select ${FIELD_STYLE}">
           <option value="" disabled selected>${field.placeholder}</option>
           ${field.options.map((option) => `<option value="${option}">${option}</option>`).join("")}
         </select>`
      : `<input id="${id}" name="${field.name}" type="${field.type}" required
           placeholder="${field.placeholder}" ${attrsToString(field.attrs)}
           class="input ${FIELD_STYLE}" />`;

  return `<fieldset class="flex flex-col gap-2 border-none p-0 m-0">${label}${control}</fieldset>`;
}

/** Builds one hidden section containing a service form. */
export function createFormSection({ key, form }) {
  return `
    <section data-section="${key}" class="hidden">
      <h2 class="text-2xl font-bold my-10">${form.title}</h2>
      <form data-service="${key}" class="bg-white p-6 rounded-3xl shadow-md w-full flex flex-col gap-4">
        ${form.fields.map((field) => createField(field, key)).join("")}
        <button
          type="submit"
          class="btn mt-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 border-none rounded-full w-full"
        >
          ${form.submit}
        </button>
      </form>
    </section>`;
}

/** One row in the Latest Payment / Transaction History lists. */
export function createTransactionItem({ typeKey, amount, note, date }) {
  const { label, direction, icon } = TRANSACTION_TYPES[typeKey];
  const isIncome = direction === "in";

  return `
    <article class="flex items-center justify-between bg-white p-4 rounded-2xl">
      <div class="flex items-center gap-3">
        <span class="w-10 h-10 grid place-items-center rounded-full bg-[#F4F5F7]">
          <i class="fa-solid ${icon}" aria-hidden="true"></i>
        </span>
        <div>
          <h3 class="font-semibold text-sm">${label}</h3>
          <p class="text-xs text-black/50">${note ? `${note} · ` : ""}${formatDate(date)}</p>
        </div>
      </div>
      <p class="font-semibold ${isIncome ? "text-green-600" : "text-red-500"}">
        ${isIncome ? "+" : "-"}${formatMoney(amount)}
      </p>
    </article>`;
}

export const createEmptyState = (text) =>
  `<p class="text-center text-black/50 py-10">${text}</p>`;
