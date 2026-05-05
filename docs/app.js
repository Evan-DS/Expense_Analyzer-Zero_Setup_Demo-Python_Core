const data = [
  { date: "2026-01-01", description: "Starbucks", amount: -5.75 },
  { date: "2026-01-02", description: "Amazon", amount: -45.20 },
  { date: "2026-01-03", description: "Salary", amount: 1500 },
  { date: "2026-01-04", description: "Uber", amount: -18.90 },
  { date: "2026-01-05", description: "McDonalds", amount: -12.50 }
];

function categorize(desc) {
  desc = desc.toLowerCase();
  if (desc.includes("starbucks") || desc.includes("mcdonalds")) return "Food";
  if (desc.includes("uber")) return "Transport";
  if (desc.includes("amazon")) return "Shopping";
  if (desc.includes("salary")) return "Income";
  return "Other";
}

const tableBody = document.querySelector("#table tbody");
const summaryEl = document.getElementById("summary");

let summary = {};

data.forEach(tx => {
  const category = categorize(tx.description);
  summary[category] = (summary[category] || 0) + tx.amount;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${tx.date}</td>
    <td>${tx.description}</td>
    <td>${tx.amount}</td>
    <td>${category}</td>
  `;
  tableBody.appendChild(row);
});

for (const [cat, amt] of Object.entries(summary)) {
  const li = document.createElement("li");
  li.textContent = `${cat}: $${amt.toFixed(2)}`;
  summaryEl.appendChild(li);
}
