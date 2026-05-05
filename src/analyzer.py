import json
from .categorizer import categorize

def load_data(filepath):
    with open(filepath) as f:
        data = json.load(f)

    for tx in data:
        tx["category"] = categorize(tx["description"])
    return data

def summarize(data):
    summary = {}
    for tx in data:
        cat = tx["category"]
        summary[cat] = summary.get(cat, 0) + tx["amount"]
    return summary
