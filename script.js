
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
