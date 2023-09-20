import { storage } from "../core/utils";

function toHtml(data) {
  const date = new Date(data.date);
  const day = date.toLocaleDateString();
  const time = date.toLocaleTimeString();

  const id = data.id.split(":")[1];
  return `
    <li class="db__record">
      <a href="#excel/${id}">${data.title}</a>
      <strong>${day} ${time}</strong>
    </li>
  `;
}

// excel:123321
// excel:1232213
function getAllTables() {
  const tables = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key.includes("excel")) {
      continue;
    }
    tables.push({ ...storage(key), id: key });
  }
  tables.sort((a, b) => b.date - a.date);
  return tables;
}

export function createRecordsTable() {
  const tables = getAllTables();
  if (!tables.length) {
    return `
      <p>Вы пока не создали ни одной таблицы</p>
    `;
  }

  return `
    <div class="db__list-header">
      <span>Название таблицы</span>
      <span>Дата открытия</span>
    </div>

    <ul class="db__list">
      ${tables.map(toHtml).join("")}
    </ul>
  `;
}
