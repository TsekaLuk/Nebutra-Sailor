# OpenStatus Integration

Uptime monitoring and status page for Nebutra Sailor.

## Quick Start

### 1. Create OpenStatus Account

1. 访问 [OpenStatus](https://www.openstatus.dev/) 注册账号
2. 创建 Workspace
3. 在 Dashboard 中创建 Status Page (例如: "Nebutra")

### 2. Install CLI

```bash
# macOS (推荐)
curl -sSL https://instl.sh/openstatushq/cli/macos | bash

# 或使用 Homebrew
brew install openstatusHQ/cli/openstatus --cask

# Windows
curl -sSL https://instl.sh/openstatushq/cli/windows | bash

# Linux
curl -sSL https://instl.sh/openstatushq/cli/linux | bash
```

### 3. Get API Token

1. 在 OpenStatus Dashboard 点击右上角头像 → **Settings**
2. 找到 **API Keys** 部分
3. 点击 **Create API Key**
4. 复制生成的 Token (格式: `os_xxxxxx`)

### 4. Configure Environment

```bash
# 设置环境变量 (临时)
export OPENSTATUS_API_TOKEN=os_your_token_here

# 或添加到 .env.local (持久化)
echo 'OPENSTATUS_API_TOKEN="os_your_token_here"' >> .env.local
```

### 5. Deploy Monitors

```bash
# 部署测试 monitor (验证配置)
openstatus monitors apply -c infra/openstatus/test-monitor.yaml -y

# 查看已创建的 monitors
openstatus monitors list

# 部署正式 monitors (服务部署后)
openstatus monitors apply -c infra/openstatus/monitors.yaml -y
```

### 6. (Optional) Configure Alerts

Add to `.env.local`:

```env
# Slack 告警 (可选)
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/xxx

# Discord 告警 (可选)
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/xxx
```

## Using Status Components

### In React/Next.js

```tsx
import { StatusBadge, StatusWidget } from "@nebutra/status";

// Footer badge
<StatusBadge pageSlug="nebutra" showLabel />

// Full widget
<StatusWidget pageSlug="nebutra" />

// Compact widget
<StatusWidget pageSlug="nebutra" compact />
```

### In Landing Page Footer

```tsx
// apps/landing-page/app/components/footer.tsx
import { StatusBadge } from "@nebutra/status";

export function Footer() {
  return (
    <footer>
      {/* ... other content ... */}
      <a href="https://nebutra.openstatus.dev" target="_blank">
        <StatusBadge pageSlug="nebutra" showLabel size="sm" />
      </a>
    </footer>
  );
}
```

## Monitors

| Monitor            | Endpoint       | Frequency | Regions |
| ------------------ | -------------- | --------- | ------- |
| Landing Page       | /              | 1m        | Global  |
| Web App            | /              | 1m        | Global  |
| API Gateway        | /misc/health   | 1m        | Global  |
| AI Service         | /health        | 5m        | US-East |
| Content Service    | /health        | 5m        | US-East |
| RecSys Service     | /health        | 5m        | US-East |
| E-commerce Service | /health        | 5m        | US-East |
| Web3 Service       | /health        | 5m        | US-East |
| Database           | /system/status | 1m        | US-East |
| Redis              | /system/status | 1m        | US-East |

## Status Page

Default URL: `https://nebutra.openstatus.dev`

To use custom domain (e.g., `status.nebutra.com`):

1. Add CNAME record: `status.nebutra.com` → `cname.openstatus.dev`
2. Uncomment `customDomain` in `openstatus.yaml`
3. Redeploy config

## Alert Channels

- **Slack**: `#ops-alerts` channel
- **Email**: ops@nebutra.com
- **PagerDuty**: (optional, uncomment in config)

## Internal Health Endpoint

The `/system/status` endpoint provides detailed status for OpenStatus assertions:

```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "checks": {
    "database": { "status": "pass", "latency_ms": 5 },
    "redis": { "status": "pass", "latency_ms": 2 }
  }
}
```

## CLI Commands Reference

```bash
# 查看帮助
openstatus --help
openstatus monitors --help

# 列出所有 monitors
openstatus monitors list

# 部署/更新 monitors
openstatus monitors apply -c <config-file> -y

# 获取单个 monitor 信息
openstatus monitors info <monitor-id>

# 手动触发 monitor
openstatus monitors trigger <monitor-id>

# 导入现有 monitors 到 YAML
openstatus monitors import
```

## Files

```
infra/openstatus/
├── README.md             # This documentation
├── config.ts             # TypeScript configuration (legacy)
├── monitors.yaml         # Production monitors config
├── test-monitor.yaml     # Test monitor for verification
└── openstatus.yaml       # Full config (alternative format)

packages/status/
├── src/
│   ├── index.ts
│   ├── types.ts          # TypeScript types
│   ├── api.ts            # OpenStatus API client
│   └── components/
│       ├── status-badge.tsx   # Compact badge component
│       └── status-widget.tsx  # Full widget component
└── package.json
```

## Troubleshooting

### CLI 安装失败

```bash
# 使用备用安装方式
brew tap openstatusHQ/cli
brew install openstatus
```

### Token 无效

1. 确认 Token 格式正确 (`os_` 开头)
2. 检查 Token 是否过期
3. 确认环境变量已设置: `echo $OPENSTATUS_API_TOKEN`

### Monitor 部署失败

1. 检查 YAML 格式是否正确
2. 确认 URL 可访问
3. 查看详细错误: `openstatus monitors apply -c <file> --debug`
