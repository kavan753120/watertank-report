
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

document.getElementById("cleanCount").addEventListener("input", function () {
  const count = parseInt(this.value);
  const badges = [
    "小水滴", "水珠寶寶", "水花閃閃", "清涼小勇士",
    "洗淨小隊長", "超淨能量星", "清潔霸王龍", "閃亮水塔神",
    "洗塔傳說王", "終極水之守護者"
  ];
  const badgeHtml = badges.map((name, i) => {
    const active = i <= count - 1 ? "⭐" : "⚪";
    return `<div>${active} ${name}</div>`;
  }).join("");
  document.getElementById("badgeDisplay").innerHTML = badgeHtml;
});

// 取代為你自己取得的 Google Sheets CSV 連結
const sheetURL = 'https://docs.google.com/spreadsheets/d/e/xxxxxxx/pub?output=csv';

fetch(sheetURL)
  .then(response => response.text())
  .then(csv => {
    const rows = csv.trim().split('\n').map(r => r.split(','));
    const table = document.createElement('table');
    rows.forEach((row, i) => {
      const tr = document.createElement('tr');
      row.forEach(cell => {
        const el = i === 0 ? document.createElement('th') : document.createElement('td');
        el.textContent = cell;
        tr.appendChild(el);
      });
      table.appendChild(tr);
    });
    document.getElementById('sheet-data').appendChild(table);
  });
