import os
import re
from pathlib import Path

docs_dir = Path("apps/design-docs/content/docs")

# Regex to find all ComponentPreview opening tags
tag_pattern = re.compile(r'<ComponentPreview([^>]*?)>')
# Regex to find ``` inside ComponentPreview
inline_code_pattern = re.compile(r'<ComponentPreview[^>]*>.*?```.*?<\/ComponentPreview>', re.DOTALL)

anomalies = []

for root, _, files in os.walk(docs_dir):
    for file in files:
        if file.endswith(".mdx"):
            filepath = Path(root) / file
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
                
                # Check 1: Missing name attribute
                for match in tag_pattern.finditer(content):
                    attrs = match.group(1)
                    if 'name=' not in attrs:
                        anomalies.append(f"Missing name in {filepath}: {match.group(0)}")
                
                # Check 2: Inline code blocks
                if inline_code_pattern.search(content):
                    anomalies.append(f"Inline code block found inside ComponentPreview in {filepath}")

if anomalies:
    print("Found issues:")
    for a in anomalies:
        print(a)
else:
    print("All clear! No syntax anomalies found.")
