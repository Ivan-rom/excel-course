export function parse(value = "") {
  debugger;
  if (value.startsWith("=")) {
    try {
      const result = eval(value.slice(1)) || value;
      console.log("try", result);
      return result;
    } catch (e) {
      console.log(e);
      return value;
    }
  }
  return value;
}
