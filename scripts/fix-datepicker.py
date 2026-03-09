with open("apps/design-docs/content/docs/en/components/date-picker.mdx", 'r') as f:
    text = f.read()

text = text.replace("```\n</ComponentPreview>tsx\n<ComponentPreview className=\"min-h-[250px] flex justify-center items-start pt-8\">\n", "")
text = text.replace("```\n</ComponentPreview>tsx\n<ComponentPreview className=\"min-h-[250px] flex flex-col items-center justify-start gap-4 pt-8 w-full max-w-sm mx-auto\">\n", "")
text = text.replace("```\n</ComponentPreview>tsx\n<ComponentPreview className=\"min-h-[350px] flex justify-center items-start pt-8\">\n", "")
text = text.replace("```tsx\n<ComponentPreview className=\"min-h-[250px] flex justify-center items-start pt-8\">\n", "")

with open("apps/design-docs/content/docs/en/components/date-picker.mdx", 'w') as f:
    f.write(text)
