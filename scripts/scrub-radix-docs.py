import os
from pathlib import Path

docs_dir = Path("apps/design-docs/content/docs")

replacements = {
    "Extends `@radix-ui/react-label` `Root` props.": "Native HTML `<label>` element with design tokens.",
    "Extends `@radix-ui/react-label` `Root` props (extends `React.LabelHTMLAttributes<HTMLLabelElement>`).": "Native HTML `<label>` element with design tokens.",
    "继承自 `@radix-ui/react-label` 的 `Root` 属性 (即继承自 `React.LabelHTMLAttributes<HTMLLabelElement>`)。": "基于原生 HTML `<label>` 元素配合设计系统 Tokens 构建。",
    "Extends `@radix-ui/react-select` `Root` props.": "Built on standard Select patterns.",
    "继承自 `@radix-ui/react-select` 的 `Root` 属性.": "基于标准的选择器模式构建。",
    "Extends `@radix-ui/react-separator` `Root` props.": "Native HTML `<hr>` separator.",
    "继承自 `@radix-ui/react-separator` 的 `Root` 属性。": "原生的 HTML `<hr>` 分隔符。",
    "Extends `@radix-ui/react-slider` `Root` props.": "Native HTML `<input type=\"range\">`.",
    "继承自 `@radix-ui/react-slider` 的 `Root` 属性。": "原生的 HTML `<input type=\"range\">` 滑块。",
    "Extends `@radix-ui/react-progress` `Root` props.": "Built on Base UI progress primitive.",
    "继承自 `@radix-ui/react-progress` 的 `Root` 属性。": "基于 Base UI 进度条组件构建。",
    "Extends `@radix-ui/react-tabs` `Root` props.": "Built on Base UI tabs primitive.",
    "继承自 `@radix-ui/react-tabs` 的 `Root` 属性。": "基于 Base UI 标签页组件构建。",
    "Extends `@radix-ui/react-accordion` `Root` props.": "Built on Base UI accordion primitive.",
    "扩展自 `@radix-ui/react-accordion` 中的 `Root` 组件属性。": "基于 Base UI 折叠面板组件构建。",
    "扩展自 `@radix-ui/react-dialog` 中的 `Root` 组件属性。": "基于 Base UI 对话框组件构建。"
}

count = 0
for root, _, files in os.walk(docs_dir):
    for file in files:
        if file.endswith(".mdx"):
            filepath = Path(root) / file
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            
            orig_content = content
            for old, new in replacements.items():
                content = content.replace(old, new)
            
            if content != orig_content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(content)
                count += 1
                print(f"Updated {filepath}")

print(f"Scrubbed {count} MDX files.")
