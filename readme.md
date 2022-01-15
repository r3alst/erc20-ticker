# ERC20 Ticker

This repo includes docker compose configuration and erc20 image code. It can be used to set up ethereum token container for price feeds.

## Development

Install dependencies:
```
yarn install 
```

Setup Environment:

1. create a file in root named as `env`
2. add following variables according your setup
```
export FROM_TOKEN="0x0F5D2fB29fb7d3CFeE444a200298f468908cC942"
export FROM_TOKEN_DECIMALS="18"
export TO_TOKEN="0xdAC17F958D2ee523a2206206994597C13D831ec7"
export TO_TOKEN_DECIMALS="6"
export AMOUNT_IN="500"
export PAIR_NAME="MANAUSDT"
export TICKER_MANAGER="http://localhost:8000"
```
3. run `source ./env` to load environment variables.

**Hint:** `AMOUNT_IN` means how many units it will try to check rate, its required because pancake router increases/decrease rate according units you want to sell or buy.

## To use Docker build:

1. copy/rename `docker-compose.yml.example` as `docker-compose.yml`
2. change contract addresses according your tokens/pair and ticker manager url.
3. run ``docker-compose up -d``

**OPTIONAL:** Please support me by contributing to project or to following BSC/ERC/MATIC address.
`0x200753090BC55A39Ff790150143D28635f0E87bb`
