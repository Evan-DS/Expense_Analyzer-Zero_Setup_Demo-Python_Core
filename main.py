from src.analyzer import load_data, summarize

data = load_data("data/sample_transactions.json")
summary = summarize(data)

print("Summary:")
for k, v in summary.items():
    print(k, v)
