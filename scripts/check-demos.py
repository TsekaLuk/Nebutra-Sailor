import re
import os

directories = ["apps/design-docs/content/docs/en", "apps/design-docs/content/docs/zh"]
pattern = re.compile(r'<ComponentPreview[^>]*>(.*?)(<[A-Z][a-zA-Z0-9]*Demo.*?>).*?</ComponentPreview>', re.DOTALL)

for d in directories:
    for root, _, files in os.walk(d):
        for file in files:
            if not file.endswith(".mdx"): continue
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            for m in pattern.finditer(content):
                print(f"Matched component usage in {filepath}: {m.group(2)[:100]}")
