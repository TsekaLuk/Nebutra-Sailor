import en from "../../messages/en.json";

type Messages = typeof en;

declare global {
  // Augments next-intl with our EN message shape for compile-time key validation.
  // TypeScript will error if you use a key that doesn't exist in en.json.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface IntlMessages extends Messages {}
}

export {};
