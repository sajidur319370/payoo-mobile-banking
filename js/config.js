import { BANKS, BILLERS } from "./data.js";

const PHONE_PATTERN = "01[3-9]\\d{8}";

/* Small factories that build form-field definitions. Each is defined once. */
const select = (name, label, placeholder, options) => ({
  kind: "select",
  name,
  label,
  placeholder,
  options,
});

const phone = (name, label, placeholder) => ({
  kind: "input",
  name,
  label,
  placeholder,
  type: "tel",
  attrs: {
    inputmode: "numeric",
    autocomplete: "tel",
    maxlength: 11,
    pattern: PHONE_PATTERN,
    title: "Enter an 11-digit mobile number",
  },
});

const amount = (placeholder) => ({
  kind: "input",
  name: "amount",
  label: "Amount",
  placeholder,
  type: "number",
  attrs: { min: 1, step: "any" },
});

const pin = () => ({
  kind: "input",
  name: "pin",
  label: "Pin Number",
  placeholder: "Enter 4 digit pin number",
  type: "password",
  attrs: {
    inputmode: "numeric",
    autocomplete: "current-password",
    maxlength: 4,
    pattern: "\\d{4}",
    title: "Enter a 4-digit PIN",
  },
});

/** form: null means the section already exists in home.html. */
export const SERVICES = [
  {
    key: "add-money",
    label: "Add money",
    icon: "wallet1.png",
    form: {
      title: "Add Money",
      submit: "Add Money",
      fields: [
        select("bank", "Select A Bank", "Select Bank", BANKS),
        phone(
          "account",
          "Bank Account Number",
          "Enter 11 digit account number",
        ),
        amount("Amount to add"),
        pin(),
      ],
    },
  },
  {
    key: "cash-out",
    label: "Cash Out",
    icon: "send1.png",
    form: {
      title: "Cash Out",
      submit: "Cash Out",
      fields: [
        phone("account", "Agent Number", "Enter 11 digit agent number"),
        amount("Enter amount to withdraw"),
        pin(),
      ],
    },
  },
  {
    key: "transfer",
    label: "Transfer Money",
    icon: "money1.png",
    form: {
      title: "Transfer Money",
      submit: "Send Now",
      fields: [
        phone(
          "account",
          "User Account Number",
          "Enter 11 digit account number",
        ),
        amount("Enter amount to transfer"),
        pin(),
      ],
    },
  },
  {
    key: "bonus",
    label: "Get Bonus",
    icon: "bonus1.png",
    form: {
      title: "Get Bonus",
      submit: "Get Bonus",
      fields: [
        {
          kind: "input",
          name: "coupon",
          label: "Enter Bonus Coupon",
          placeholder: "Enter your coupon",
          type: "text",
          attrs: {},
        },
      ],
    },
  },
  {
    key: "pay-bill",
    label: "Pay bill",
    icon: "purse1.png",
    form: {
      title: "Pay Bill",
      submit: "Pay Now",
      fields: [
        select("biller", "Select to Pay", "Select Option", BILLERS),
        phone(
          "account",
          "Biller Account Number",
          "Enter Biller account number",
        ),
        amount("Amount to pay"),
        pin(),
      ],
    },
  },
  {
    key: "transactions",
    label: "Transactions",
    icon: "transaction1.png",
    form: null,
  },
];
