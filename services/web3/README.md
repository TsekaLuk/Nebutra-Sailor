# Web3 Service

Python service for blockchain indexing and event listening.

## Features

- **Block Indexing** — Index blockchain data
- **Event Listeners** — Subscribe to smart contract events
- **NFT Metadata** — Fetch and cache NFT metadata
- **Wallet Tracking** — Track wallet balances and transactions

## Quick Start

```bash
cd services/web3

python -m venv .venv
source .venv/bin/activate

pip install -r requirements.txt

uvicorn app.main:app --reload --port 8005
```

## API Endpoints

| Method | Endpoint                         | Description         |
| ------ | -------------------------------- | ------------------- |
| `GET`  | `/health`                        | Health check        |
| `GET`  | `/api/v1/blocks/:number`         | Get block info      |
| `GET`  | `/api/v1/nft/:contract/:tokenId` | Get NFT metadata    |
| `GET`  | `/api/v1/wallet/:address`        | Get wallet info     |
| `POST` | `/api/v1/events/subscribe`       | Subscribe to events |

## Environment Variables

```bash
# RPC Endpoints
ETH_RPC_URL=https://mainnet.infura.io/v3/...
POLYGON_RPC_URL=https://polygon-rpc.com

# API Keys
ALCHEMY_API_KEY=...
INFURA_API_KEY=...

# Database
DATABASE_URL=postgresql://...

WEB3_SERVICE_PORT=8005
```

## Supported Chains

| Chain    | Status       |
| -------- | ------------ |
| Ethereum | ✅ Supported |
| Polygon  | ✅ Supported |
| Arbitrum | ✅ Supported |
| Base     | ✅ Supported |
| Solana   | 🚧 Planned   |

## Docker

```bash
docker build -t nebutra-web3 .
docker run -p 8005:8005 --env-file .env nebutra-web3
```

## Project Structure

```
services/web3/
├── app/
│   ├── main.py
│   └── api/v1/
├── indexers/          # Chain-specific indexers
├── listeners/         # Event listeners
├── services/
├── utils/
├── Dockerfile
└── requirements.txt
```
