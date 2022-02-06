export const widontString = (text: String) =>
  text.replace(/ ([^ ]+)$/, "\u00A0$1");
