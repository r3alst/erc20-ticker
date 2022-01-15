const {ChainId, Token} = require("@uniswap/sdk");
const { WETH9 } = require('@uniswap/sdk-core');

// Source: https://github.com/Uniswap/sdk-core/blob/main/src/entities/weth9.ts
// Source: https://github.com/Uniswap/interface/blob/main/src/constants/tokens.ts
// Source: https://github.com/Uniswap/interface/blob/5d97cbf6ad149955557d29f8de3471cb89ed778c/src/constants/routing.ts Line no. 53

const WETH = WETH9[ChainId.MAINNET];

const DAI = new Token(
  ChainId.MAINNET,
  '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  18,
  'DAI',
  'Dai Stablecoin'
);

const USDC = new Token(
  ChainId.MAINNET,
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  6,
  'USDC',
  'USD//C'
);

const USDT = new Token(
  ChainId.MAINNET,
  '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  6,
  'USDT',
  'Tether USD'
);

const WBTC = new Token(
  ChainId.MAINNET,
  '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  8,
  'WBTC',
  'Wrapped BTC'
)

const baseCurrencies = [
  WETH,
  DAI,
  USDC,
  USDT,
  WBTC
];

module.exports = {
  WETH,
  DAI,
  USDC,
  USDT,
  WBTC,
  baseCurrencies
}