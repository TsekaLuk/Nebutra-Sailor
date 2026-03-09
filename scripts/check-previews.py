import os
import re

directories = ["apps/design-docs/content/docs/en", "apps/design-docs/content/docs/zh"]
has_error = False

pattern = re.compile(r'<ComponentPreview[^>]*>(.*?)</ComponentPreview>', re.DOTALL)

for d in directories:
    for root, _, files in os.walk(d):
        for file in files:
            if not file.endswith(".mdx"): continue
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            
            for m in pattern.finditer(content):
                inner_content = m.group(1).strip()
                if inner_content: # Not self closing and not empty
                    print(f"File {filepath} has inline content in ComponentPreview: {inner_content[:50]}")
                    has_error = True

if not has_error:
    print("All ComponentPreviews are correctly formatted!")

