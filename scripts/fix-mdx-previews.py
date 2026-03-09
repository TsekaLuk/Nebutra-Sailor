import os
import re
import urllib.parse
from pathlib import Path

EN_DOCS_DIR = "apps/design-docs/content/docs/en"
ZH_DOCS_DIR = "apps/design-docs/content/docs/zh"
DEMOS_DIR = "apps/design-docs/src/components/previews"

# Pattern matches:
# <ComponentPreview [optional class name]>\n
#   (any valid jsx here... can be multiple lines)
#   ```tsx [optional title="..."]\n(code)\n```\n
# </ComponentPreview>
pattern = re.compile(
    r'<ComponentPreview(.*?)>\s*(.+?)\s*```tsx(?:.*?title="([^"]+)")?\n(.*?)```\s*</ComponentPreview>',
    re.DOTALL
)

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    extracted = []
    
    file_basename = os.path.basename(filepath).replace('.mdx', '')
    counter = 1

    def repl(m):
        nonlocal counter
        class_attr = m.group(1).rstrip()
        actual_jsx = m.group(2)
        title = m.group(3)
        code = m.group(4)
        
        # Determine filename
        if title:
            filename = title
        else:
            # Generate a name based on the documentation file
            suffix = f"-{counter}" if counter > 1 else ""
            filename = f"{file_basename}{suffix}-demo.tsx"
            counter += 1
            
        demo_name = filename.replace('.tsx', '')
        extracted.append((filename, code.strip(), actual_jsx.strip()))
        
        if class_attr:
            return f'<ComponentPreview name="{demo_name}"{class_attr} />'
        return f'<ComponentPreview name="{demo_name}" />'

    content = pattern.sub(repl, content)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return extracted
    return []

dynamic_demos_path = "apps/design-docs/src/components/previews/dynamic-demos.tsx"
with open(dynamic_demos_path, 'r', encoding='utf-8') as f:
    dynamic_demos_content = f.read()

new_components = []

for root_dir in [EN_DOCS_DIR, ZH_DOCS_DIR]:
    for dirpath, _, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.endswith('.mdx'):
                filepath = os.path.join(dirpath, filename)
                res = fix_file(filepath)
                if res:
                    for filename, code, jsx in res:
                        target_path = os.path.join(DEMOS_DIR, filename)
                        demo_name = filename.replace('.tsx', '')
                        
                        # Convert kebab-case to PascalCase for the React component name
                        component_name = "".join(x.capitalize() for x in demo_name.split('-'))
                        
                        if not os.path.exists(target_path):
                            print(f"Creating demo {filename}...")
                            
                            # Determine if code has imports, otherwise wrap the jsx
                            demo_code = code
                            if "import" not in code and "export" not in code:
                                demo_code = f'"use client";\n\nimport * as React from "react";\nimport {{ {component_name.replace("Demo", "")} }} from "@nebutra/ui/primitives";\n\nexport function {component_name}() {{\n  return (\n    {jsx}\n  );\n}}'
                            elif "export function" not in code and "export default" not in code:
                                # Sometimes it has imports but no export
                                demo_code = f'"use client";\n\n{code}\n\nexport function {component_name}() {{\n  return (\n    {jsx}\n  );\n}}'

                            with open(target_path, 'w', encoding='utf-8') as f:
                                f.write(demo_code + "\n")
                                
                            new_components.append((component_name, demo_name))
                            
                        print(f"Fixed {filepath} -> extracted {filename}")

if new_components:
    # unique them
    unique_comps = list(set(new_components))
    exports = []
    for comp_name, file_name in unique_comps:
        if comp_name not in dynamic_demos_content:
            exports.append(f"""export const {comp_name} = dynamic(
  () => import("./{file_name}").then((m) => ({{ default: m.{comp_name} }})),
  {{ ssr: false }},
);""")
    
    if exports:
        with open(dynamic_demos_path, 'a', encoding='utf-8') as f:
            f.write("\n\n" + "\n\n".join(exports) + "\n")
        print("Updated dynamic-demos.tsx")

