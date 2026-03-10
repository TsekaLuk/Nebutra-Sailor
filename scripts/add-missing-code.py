import os
import re

directories = ["apps/design-docs/content/docs/en", "apps/design-docs/content/docs/zh"]

# Matches <ComponentPreview ...>...</ComponentPreview>
pattern = re.compile(r'<ComponentPreview([^>]*)>(.*?)</ComponentPreview>', re.DOTALL)

for d in directories:
    for root, _, files in os.walk(d):
        for file in files:
            if not file.endswith(".mdx"): continue
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            def repl(m):
                attrs = m.group(1)
                inner = m.group(2)
                
                # If there's already a code block, skip
                if "```tsx" in inner or "```jsx" in inner:
                    return m.group(0)
                
                # If it's effectively empty (or just whitespace), skip
                if not inner.strip():
                    return m.group(0)
                
                # Otherwise, append the code block
                # Remove leading/trailing newlines from inner to clean it up
                inner_clean = inner.strip()
                new_inner = f'\n  {inner_clean}\n\n  ```tsx\n{inner_clean}\n  ```\n'
                
                return f'<ComponentPreview{attrs}>{new_inner}</ComponentPreview>'
                
            new_content = pattern.sub(repl, content)
            if new_content != original_content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Added missing preview-code to {filepath}")

print("Done appending preview-code blocks.")
