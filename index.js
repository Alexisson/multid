const ALPHABET_LITTLE = "abcdefghijklmnopqrstuvwxyz";
const ALPHABET_CAPITAL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";

export const multid = (
  len,
  settings = { little: true, capital: false, numbers: false }
) => {
  let id_order = "";
  let res = "";
  if (settings.little) id_order += ALPHABET_LITTLE;
  if (settings.capital) id_order += ALPHABET_CAPITAL;
  if (settings.numbers) id_order += NUMBERS;

  for (let i = 0; i < len; i++) {
    res += id_order[Math.floor(Math.random() * id_order.length)];
  }
  return res;
};
