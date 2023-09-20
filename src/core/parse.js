export function parse(value = "") {
  if (value.startsWith("=")) {
    try {
      const result = eval(value.slice(1)) || value;
      return result;
    } catch (e) {
      return value;
    }
  }
  return value;
}
