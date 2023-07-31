export function shouldResize(event) {
  return event.target.dataset.resize;
}

export function isCell(event) {
  return event.target.dataset.type === "cell";
}

export function selectNext(key, { col, row }) {
  const MIN_VALUE = 0;
  switch (key) {
    case "ArrowLeft":
      col = col > MIN_VALUE ? col - 1 : MIN_VALUE;
      break;
    case "ArrowUp":
      row = row > MIN_VALUE ? row - 1 : MIN_VALUE;
      break;
    case "ArrowRight":
    case "Tab":
      col++;
      break;
    case "ArrowDown":
    case "Enter":
      row++;
      break;
  }
  return `[data-id="${row}:${col}"]`;
}
