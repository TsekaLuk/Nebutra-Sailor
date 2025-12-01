<div align="right">
  <a href="README.md">English</a> | <a href="README.zh-CN.md">简体中文</a> | <strong>日本語</strong>
</div>

<div align="center">
  <a href="https://nebutra.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="packages/brand/assets/logo/logo-inverse.svg" />
      <source media="(prefers-color-scheme: light)" srcset="packages/brand/assets/logo/logo-horizontal-en.svg" />
      <img alt="Nebutra" src="packages/brand/assets/logo/logo-horizontal-en.svg" width="320" />
    </picture>
  </a>
  <br />
  <br />
  <h3>オープンソース エンタープライズ SaaS プラットフォーム</h3>
  <br />
  <p>
    <a href="https://nebutra.com"><strong>公式サイト</strong></a> · 
    <a href="#概要"><strong>概要</strong></a> · 
    <a href="#技術スタック"><strong>技術スタック</strong></a> · 
    <a href="#クイックスタート"><strong>クイックスタート</strong></a> · 
    <a href="#コントリビュート"><strong>貢献</strong></a>
  </p>
  <p>
    <a href="https://github.com/TsekaLuk/Nebutra-Sailor/stargazers">
      <img src="https://img.shields.io/github/stars/TsekaLuk/Nebutra-Sailor?style=for-the-badge&logo=github&color=6366f1&logoColor=fff" alt="GitHub Stars" />
    </a>
    <a href="https://github.com/TsekaLuk/Nebutra-Sailor/network/members">
      <img src="https://img.shields.io/github/forks/TsekaLuk/Nebutra-Sailor?style=for-the-badge&logo=github&color=14b8a6&logoColor=fff" alt="GitHub Forks" />
    </a>
    <a href="https://github.com/TsekaLuk/Nebutra-Sailor/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/ライセンス-MIT%20%2B%20Commons%20Clause-6366f1?style=for-the-badge" alt="License" />
    </a>
  </p>
</div>

<br />
<br />

## 概要

Nebutra Sailor は、モダンなマルチテナントプラットフォームを構築するための、エンタープライズグレードの AI ネイティブ SaaS モノレポアーキテクチャです。コンテンツコミュニティ、レコメンドシステム、EC 連携、Web3 アプリケーションのための、実戦で検証された基盤を提供します。

Next.js 17、React 19、Prisma 7 など最新技術で構築され、LLM、ベクトル検索、インテリジェントワークフローをネイティブサポートする「AI ファースト」の思想を体現しています。

### なぜ Sailor を選ぶのか？

- **🚀 本番環境対応** — 実際のエンタープライズ導入で実証されたアーキテクチャパターン
- **🤖 AI ネイティブ** — LLM、Embeddings、RAG、AI エージェント（MCP）の組み込みサポート
- **🏢 マルチテナント** — 行レベルセキュリティ、テナント分離、テナント別カスタマイズを標準装備
- **⚡ モダンスタック** — Next.js 17、React 19、TypeScript 5.6+、TailwindCSS 4.0
- **💳 課金機能内蔵** — データベース駆動のプラン設定、Stripe 連携、使用量計測、機能権限管理
- **📋 法務・コンプライアンス** — Cookie 同意、プライバシー制御、GDPR/CCPA 対応基盤
- **🔌 拡張性** — モジュラーマイクロサービスアーキテクチャ、イベント駆動通信
- **🌍 グローバル対応** — i18n、CDN、エッジキャッシュ、マルチリージョンデプロイ
- **📊 実績** — 導入プロジェクトでレポート作成時間 70%以上削減、インサイト提供 4 倍速
- **🦄 ユニコーン志向** — PoC から本番までの速度と信頼性を両立するパターン

## ハイライト

<table>
  <tr>
    <td width="33%" valign="top">
      <img src="packages/brand/assets/icons/ai.svg" width="28" alt="AI" /><br />
      <strong>AI ネイティブ</strong>
      <br />LLM、ベクトル検索、MCP エージェント。モダン AI アプリのファーストクラスパターン。
    </td>
    <td width="33%" valign="top">
      <img src="packages/brand/assets/icons/tenants.svg" width="28" alt="Tenants" /><br />
      <strong>マルチテナント標準</strong>
      <br />テナントコンテキスト、RLS、スコープ付きキャッシュ・レート制限を標準搭載。
    </td>
    <td width="33%" valign="top">
      <img src="packages/brand/assets/icons/enterprise.svg" width="28" alt="Enterprise" /><br />
      <strong>エンタープライズ対応</strong>
      <br />Cloudflare WAF/R2、Inngest ワークフロー、Sentry/Otel、Vercel デプロイ。
    </td>
  </tr>
  <tr>
    <td width="33%" valign="top">
      <img src="packages/brand/assets/icons/workflows.svg" width="28" alt="Workflows" /><br />
      <strong>課金・収益化</strong>
      <br />DB 駆動プラン、Stripe 課金、使用量計測、機能ゲート。
    </td>
    <td width="33%" valign="top">
      <img src="packages/brand/assets/icons/security.svg" width="28" alt="Security" /><br />
      <strong>セキュリティ・コンプライアンス</strong>
      <br />RLS、WAF、Turnstile、GDPR/CCPA、Cookie 同意。
    </td>
    <td width="33%" valign="top">
      <img src="packages/brand/assets/icons/toolkit.svg" width="28" alt="Toolkit" /><br />
      <strong>マーケティング UI キット</strong>
      <br />Hero、Features、Pricing、Testimonials — コンバージョン最適化コンポーネント。
    </td>
  </tr>
</table>

## 技術スタック

<table>
<tr>
<td><strong>フロントエンド</strong></td>
<td>
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js_17-black?style=flat-square&logo=next.js" alt="Next.js" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind" /></a>
</td>
</tr>
<tr>
<td><strong>UI / デザイン</strong></td>
<td>
  <a href="https://primer.style/react"><img src="https://img.shields.io/badge/Primer-24292F?style=flat-square&logo=github&logoColor=white" alt="Primer" /></a>
  <a href="https://primer.style/octicons"><img src="https://img.shields.io/badge/Octicons-24292F?style=flat-square&logo=github&logoColor=white" alt="Octicons" /></a>
  <img src="https://img.shields.io/badge/Inter-000?style=flat-square" alt="Inter" />
  <img src="https://img.shields.io/badge/JetBrains_Mono-000?style=flat-square" alt="JetBrains Mono" />
  <img src="https://img.shields.io/badge/デザイントークン-gray?style=flat-square" alt="Design Tokens" />
</td>
</tr>
<tr>
<td><strong>認証</strong></td>
<td>
  <a href="https://clerk.com/"><img src="https://img.shields.io/badge/Clerk-6C47FF?style=flat-square&logo=clerk&logoColor=white" alt="Clerk" /></a>
  <img src="https://img.shields.io/badge/マルチテナント組織-gray?style=flat-square" alt="Multi-tenant" />
</td>
</tr>
<tr>
<td><strong>BFF</strong></td>
<td>
  <a href="https://hono.dev/"><img src="https://img.shields.io/badge/Hono-E36002?style=flat-square&logo=hono&logoColor=white" alt="Hono" /></a>
  <a href="https://www.prisma.io/"><img src="https://img.shields.io/badge/Prisma_7-2D3748?style=flat-square&logo=prisma&logoColor=white" alt="Prisma" /></a>
  <a href="https://zod.dev/"><img src="https://img.shields.io/badge/Zod-3E67B1?style=flat-square&logo=zod&logoColor=white" alt="Zod" /></a>
</td>
</tr>
<tr>
<td><strong>データベース</strong></td>
<td>
  <a href="https://supabase.com/"><img src="https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white" alt="Supabase" /></a>
  <img src="https://img.shields.io/badge/pgvector-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="pgvector" />
  <img src="https://img.shields.io/badge/リアルタイム-gray?style=flat-square" alt="Realtime" />
  <img src="https://img.shields.io/badge/RLS-gray?style=flat-square" alt="RLS" />
</td>
</tr>
<tr>
<td><strong>キャッシュ</strong></td>
<td>
  <a href="https://upstash.com/"><img src="https://img.shields.io/badge/Upstash_Redis-00E9A3?style=flat-square&logo=redis&logoColor=white" alt="Upstash" /></a>
  <img src="https://img.shields.io/badge/レート制限-gray?style=flat-square" alt="Rate Limiting" />
</td>
</tr>
<tr>
<td><strong>AI</strong></td>
<td>
  <a href="https://sdk.vercel.ai/"><img src="https://img.shields.io/badge/Vercel_AI_SDK-black?style=flat-square&logo=vercel" alt="Vercel AI" /></a>
  <a href="https://openrouter.ai/"><img src="https://img.shields.io/badge/OpenRouter-6366F1?style=flat-square" alt="OpenRouter" /></a>
  <img src="https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white" alt="OpenAI" />
  <img src="https://img.shields.io/badge/Anthropic-191919?style=flat-square" alt="Anthropic" />
  <img src="https://img.shields.io/badge/Google_AI-4285F4?style=flat-square&logo=google&logoColor=white" alt="Google AI" />
  <img src="https://img.shields.io/badge/SiliconFlow-6366F1?style=flat-square" alt="SiliconFlow" />
</td>
</tr>
<tr>
<td><strong>決済</strong></td>
<td>
  <a href="https://stripe.com/"><img src="https://img.shields.io/badge/Stripe-008CDD?style=flat-square&logo=stripe&logoColor=white" alt="Stripe" /></a>
</td>
</tr>
<tr>
<td><strong>メール</strong></td>
<td>
  <a href="https://resend.com/"><img src="https://img.shields.io/badge/Resend-black?style=flat-square" alt="Resend" /></a>
</td>
</tr>
<tr>
<td><strong>CMS</strong></td>
<td>
  <a href="https://sanity.io/"><img src="https://img.shields.io/badge/Sanity-F03E2F?style=flat-square" alt="Sanity" /></a>
</td>
</tr>
<tr>
<td><strong>CDN / セキュリティ</strong></td>
<td>
  <a href="https://cloudflare.com/"><img src="https://img.shields.io/badge/Cloudflare-F38020?style=flat-square&logo=cloudflare&logoColor=white" alt="Cloudflare" /></a>
  <img src="https://img.shields.io/badge/WAF-gray?style=flat-square" alt="WAF" />
  <img src="https://img.shields.io/badge/R2_Storage-gray?style=flat-square" alt="R2" />
  <img src="https://img.shields.io/badge/Turnstile-gray?style=flat-square" alt="Turnstile" />
</td>
</tr>
<tr>
<td><strong>ワークフロー</strong></td>
<td>
  <a href="https://inngest.com/"><img src="https://img.shields.io/badge/Inngest-6366F1?style=flat-square" alt="Inngest" /></a>
  <a href="https://n8n.io/"><img src="https://img.shields.io/badge/n8n-EA4B71?style=flat-square&logo=n8n&logoColor=white" alt="n8n" /></a>
</td>
</tr>
<tr>
<td><strong>アナリティクス</strong></td>
<td>
  <a href="https://dub.co/"><img src="https://img.shields.io/badge/Dub-000000?style=flat-square" alt="Dub" /></a>
  <img src="https://img.shields.io/badge/リンク帰属-gray?style=flat-square" alt="Link Attribution" />
  <img src="https://img.shields.io/badge/コンバージョン-gray?style=flat-square" alt="Conversions" />
</td>
</tr>
<tr>
<td><strong>オブザーバビリティ</strong></td>
<td>
  <a href="https://sentry.io/"><img src="https://img.shields.io/badge/Sentry-362D59?style=flat-square&logo=sentry&logoColor=white" alt="Sentry" /></a>
  <a href="https://opentelemetry.io/"><img src="https://img.shields.io/badge/OpenTelemetry-425CC7?style=flat-square&logo=opentelemetry&logoColor=white" alt="OpenTelemetry" /></a>
</td>
</tr>
<tr>
<td><strong>デプロイ</strong></td>
<td>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Vercel-black?style=flat-square&logo=vercel" alt="Vercel" /></a>
  <a href="https://turbo.build/"><img src="https://img.shields.io/badge/Turborepo-EF4444?style=flat-square&logo=turborepo&logoColor=white" alt="Turborepo" /></a>
</td>
</tr>
</table>

<br />

## クイックスタート

### 必要環境

| ツール | バージョン |
|--------|-----------|
| Node.js | `v20+` |
| pnpm | `v9+` |
| Python | `3.11+` <sub>（マイクロサービス用）</sub> |

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/TsekaLuk/Nebutra-Sailor.git
cd Nebutra-Sailor

# 依存関係をインストール
pnpm install

# 環境変数を設定
cp .env.example .env

# Prisma クライアント生成 & 開発サーバー起動
pnpm db:generate && pnpm dev
```

### コマンド一覧

| コマンド | 説明 |
|----------|------|
| `pnpm dev` | 全アプリを開発モードで起動 |
| `pnpm build` | 全パッケージをビルド |
| `pnpm lint` | リント実行 |
| `pnpm typecheck` | 型チェック |
| `pnpm db:studio` | Prisma Studio を開く |

<br />

## プロジェクト構成

```
Nebutra-Sailor/
├── apps/
│   ├── landing-page/      # マーケティングサイト
│   ├── web/               # メイン SaaS ダッシュボード
│   ├── studio/            # Sanity CMS
│   └── api-gateway/       # BFF レイヤー
├── packages/
│   ├── billing/           # Stripe 課金、プラン、使用量計測
│   ├── brand/             # ブランドアセット、ガイドライン
│   ├── custom-ui/         # マーケティング UI コンポーネント
│   ├── design-system/     # デザイントークン、テーマ
│   ├── legal/             # Cookie 同意、プライバシー、GDPR/CCPA
│   ├── db/                # Prisma 7 スキーマ & クライアント
│   ├── cache/             # Redis キャッシュ戦略
│   ├── rate-limit/        # マルチテナントレート制限
│   ├── mcp/               # AI エージェント用 Model Context Protocol
│   └── ...                # その他多数
├── services/
│   ├── ai/                # Python FastAPI - LLM、Embeddings
│   ├── content/           # Python FastAPI - 投稿、フィード
│   ├── recsys/            # Python - レコメンドエンジン
│   └── ...
└── infra/                 # インフラ設定
```

<br />

## コントリビュート

コントリビューションを歓迎します！

| | |
|---|---|
| **バグ報告** | [Issue を作成](https://github.com/TsekaLuk/Nebutra-Sailor/issues) |
| **機能リクエスト** | Issue で提案 |
| **プルリクエスト** | 機能追加やバグ修正の PR を送信 |

<br />

## ライセンス

**MIT ライセンス + Commons Clause**

| | |
|---|---|
| **無料利用** | 個人プロジェクト、学習、社内ツール |
| **変更可能** | 派生物の作成 |
| **配布可能** | 帰属表示付きで |
| **商用利用** | オープンソース化が必要 |
| **免除** | 無錫雲毓智能科技有限公司および関連会社 |

<br />

---

<br />

<div align="center">
  <a href="https://nebutra.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="packages/brand/assets/logo/logo-inverse.svg" width="100">
      <source media="(prefers-color-scheme: light)" srcset="packages/brand/assets/logo/logo-mono.svg" width="100">
      <img alt="Nebutra" src="packages/brand/assets/logo/logo-mono.svg" width="100">
    </picture>
  </a>
  <br />
  <br />
  <sub>
    <strong>一つ一つのコミットで、未来を創造する。</strong>
  </sub>
  <br />
  <br />
  <sub>© 2024-現在 <strong>無錫雲毓智能科技有限公司</strong></sub>
</div>
