const ALPHABET_LOWER = "abcdefghijklmnopqrstuvwxyz";
const ALPHABET_UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "1234567890";

module.exports = function multid(
  len = 16,
  settings = { lower: true, upper: true, numbers: true }
) {
  let id_order = "";
  let res = "";
  if (settings.lower) id_order += ALPHABET_LOWER;
  if (settings.upper) id_order += ALPHABET_UPPER;
  if (settings.numbers) id_order += NUMBERS;

  for (let i = 0; i < len; i++) {
    res += id_order[Math.floor(Math.random() * id_order.length)];
  }
  return res;
};
