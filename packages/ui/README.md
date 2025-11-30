# @nebutra/ui

Unified UI package built on [Lobe UI](https://github.com/lobehub/lobe-ui) + [Lobe Icons](https://github.com/lobehub/lobe-icons) + Lucide Icons.

## Installation

```bash
pnpm add @nebutra/ui
```

## Usage

### Theme Provider

Wrap your app with `NebutraThemeProvider` to apply Nebutra design tokens:

```tsx
import { NebutraThemeProvider } from "@nebutra/ui";

function App() {
  return (
    <NebutraThemeProvider appearance="auto">
      <YourApp />
    </NebutraThemeProvider>
  );
}
```

### Components

```tsx
import { Button, ChatList, ActionIcon } from "@nebutra/ui/components";

<Button type="primary">Submit</Button>
<ActionIcon icon={<Settings />} />
```

### AI Provider Icons

```tsx
import { OpenAI, Anthropic, Google, Claude, Gemini } from "@nebutra/ui/icons";

// In a model selector
<OpenAI size={24} />
<Anthropic size={24} />
<Google size={24} />
```

### All Lobe Icons

```tsx
import { HuggingFace, Mistral, DeepSeek, Qwen } from "@nebutra/ui/icons";
```

### General UI Icons (Lucide)

```tsx
import { Settings, Search, Menu, Plus, Check } from "@nebutra/ui/icons";

<Settings size={20} />
```

### Design Tokens

```tsx
import { tokens, colors } from "@nebutra/ui/theme";

// Use in styled-components, CSS-in-JS, etc.
const primaryColor = colors.primary[600]; // #2563EB
```

## Exports

| Path | Description |
|------|-------------|
| `@nebutra/ui` | Main exports (theme + common components/icons) |
| `@nebutra/ui/components` | All Lobe UI components |
| `@nebutra/ui/icons` | All icons (Lobe + Lucide) |
| `@nebutra/ui/theme` | Design tokens and theme provider |

## Available AI Icons

- **OpenAI**: `OpenAI`, `ChatGPT`, `Gpt`
- **Anthropic**: `Anthropic`, `Claude`
- **Google**: `Google`, `Gemini`, `GoogleColor`
- **Meta**: `Meta`, `Llama`
- **Mistral**: `Mistral`
- **Cohere**: `Cohere`
- **Hugging Face**: `HuggingFace`
- **Perplexity**: `Perplexity`
- **Groq**: `Groq`
- **DeepSeek**: `DeepSeek`
- **Qwen/Tongyi**: `Qwen`, `Tongyi`
- **Baidu/Wenxin**: `Baidu`, `Wenxin`
- **Zhipu**: `Zhipu`
- **Moonshot**: `Moonshot`
- **Yi**: `Yi`
- And many more from `@lobehub/icons`

## Design Tokens

```ts
colors: {
  primary: { 50-950 },    // Blue
  secondary: { 50-950 },  // Purple
  neutral: { 50-950 },    // Slate
  success, warning, error, info
}

spacing: { xs, sm, md, lg, xl, 2xl, 3xl }
borderRadius: { none, sm, md, lg, xl, 2xl, full }
shadows: { sm, md, lg, xl }
typography: { fontFamily, fontSize }
```

## License

MIT (inherits from Lobe UI)

> ⚠️ AI provider icons may be subject to their respective trademark guidelines.
