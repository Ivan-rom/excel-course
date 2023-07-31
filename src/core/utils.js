export function capitalize(string) {
  if (typeof string !== "string") return;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function range(start, end) {
  if (start > end) {
    [start, end] = [end, start];
  }
  return new Array(end - start + 1).fill("").map((_, i) => start + i);
}

export function matrix($target, $current) {
  const target = $target.id(true);
  const current = $current.id(true);

  const cols = range(current.col, target.col);
  const rows = range(current.row, target.row);

  const ids = cols.reduce((acc, col) => {
    rows.forEach((row) => acc.push(`${row}:${col}`));
    return acc;
  }, []);

  return ids;
}
