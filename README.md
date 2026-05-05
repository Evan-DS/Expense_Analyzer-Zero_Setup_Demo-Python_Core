# Expense Analyzer

## Live Demo

https://evan-ds.github.io/expense-analyzer/

---

## What This Project Does

This project takes a small set of static transaction data and:

* Assigns each transaction to a category (e.g. Food, Transport, Shopping)
* Calculates total spending per category
* Computes overall balance
* Displays the results in a simple dashboard (browser) and CLI (Python)

The goal is not complexity, it’s clarity and github pages testing.

---

## Why It Exists

Most git projects require setup or are difficult to evaluate quickly.

This project is designed so that:

* Anyone can open the demo instantly (no install)
* The logic is easy to follow
* The structure reflects how a small real-world tool would be organized

---

## How It Works

* Transactions are loaded from a static dataset
* Categories are assigned using simple keyword rules
  *(e.g. “Uber” → Transport, “Starbucks” → Food)*
* Data is aggregated to produce totals and summaries
* Results are displayed:

  * In the browser (primary demo)
  * In Python (for code clarity)

---

## Project Structure

```text
/docs       Frontend demo (GitHub Pages)
/src        Python logic
/data       Sample transactions
main.py     CLI entry point
```

---

## Running Locally (Optional)

```bash
python main.py
```

---

## Notes

* No database or setup required
* Uses fixed sample data for consistency and ease of use
* This project does not prompt the user for any form of input
* Focus is on structure and functionality, not complex logic
  
---

## Possible Extensions

* Upload custom transaction files
* More advanced categorization logic
* Filtering by date or category
* Persistent storage
