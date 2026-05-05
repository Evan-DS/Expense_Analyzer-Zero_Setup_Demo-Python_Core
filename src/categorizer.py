def categorize(description: str) -> str:
    desc = description.lower()
    if "starbucks" in desc or "mcdonalds" in desc:
        return "Food"
    if "uber" in desc:
        return "Transport"
    if "amazon" in desc:
        return "Shopping"
    if "salary" in desc:
        return "Income"
    return "Other"
