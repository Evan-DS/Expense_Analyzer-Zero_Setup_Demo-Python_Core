fetch("../data/sample_transactions.json")
  .then(res => res.json())
  .then(data => init(data));

function categorize(desc) {
  desc = desc.toLowerCase();
  if (desc.includes("starbucks") || desc.includes("mcdonalds")) return "Food";
  if (desc.includes("uber")) return "Transport";
  if (desc.includes("amazon")) return "Shopping";
  if (desc.includes("salary")) return "Income";
  return "Other";
}

function init(data) {
  const summary = {};
  let balance = 0;

  const tbody = document.querySelector("#table tbody");

  data.forEach(tx => {
    const cat = categorize(tx.description);
    summary[cat] = (summary[cat] || 0) + tx.amount;
    balance += tx.amount;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${tx.date}</td>
      <td>${tx.description}</td>
      <td>${tx.amount.toFixed(2)}</td>
      <td>${cat}</td>
    `;
    tbody.appendChild(row);
  });

  document.getElementById("balance").textContent = `$${balance.toFixed(2)}`;

  const topCategory = Object.entries(summary)
    .sort((a, b) => b[1] - a[1])[0][0];

  document.getElementById("top-category").textContent = topCategory;

  new Chart(document.getElementById("chart"), {
    type: "bar",
    data: {
      labels: Object.keys(summary),
      datasets: [{
        label: "Spending",
        data: Object.values(summary)
      }]
    }
  });
}
