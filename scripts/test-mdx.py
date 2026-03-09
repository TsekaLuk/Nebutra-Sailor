import re

with open("apps/design-docs/content/docs/en/components/choicebox.mdx", 'r') as f:
    text = f.read()

# Debug the match for just Choicebox
pattern = re.compile(
    r'<ComponentPreview(.*?)>(.*?)```tsx\s*(.*?)\n(.*?)```(.*?</ComponentPreview>)',
    re.DOTALL
)
m = pattern.search(text)
if m:
    print("Match found!")
    print("Class attr:", repr(m.group(1)))
    print("JSX:", repr(m.group(2)[:50]))
    print("Title line:", repr(m.group(3)))
else:
    print("No match found.")
