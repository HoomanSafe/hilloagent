import { AgentItem, DecisionItem, MarketItem, StrategyTemplate } from '../types';

export const MARKETS_DATA: MarketItem[] = [
  {
    ticker: 'NVDA',
    name: 'NVIDIA',
    price: '$168.79',
    trend: 'loss',
    change: '−6.1%',
    category: 'stock',
    sparklinePoints: '0.0,4.0 5.4,9.4 12.5,18.0 21.4,15.3 28.6,35.9 37.5,34.6 46.4,27.8 55.4,27.6 64.3,27.7 75.0,29.5 83.9,25.9 92.9,17.2 100.0,17.6'
  },
  {
    ticker: 'BTC',
    name: 'Bitcoin',
    price: '$73,119.18',
    trend: 'loss',
    change: '−3.1%',
    category: 'crypto',
    sparklinePoints: '0.0,12.0 7.1,15.2 14.3,10.1 23.2,16.8 32.1,30.5 41.1,28.4 50.0,26.0 62.5,24.1 71.4,22.0 82.1,26.4 91.1,18.0 100.0,19.5'
  },
  {
    ticker: 'ETH',
    name: 'Ethereum',
    price: '$2,021.56',
    trend: 'loss',
    change: '−5.8%',
    category: 'crypto',
    sparklinePoints: '0.0,8.0 8.9,12.4 17.9,16.5 26.8,25.0 35.7,34.0 44.6,30.2 55.4,29.8 66.1,28.4 76.8,32.1 87.5,22.0 100.0,24.8'
  },
  {
    ticker: 'AAPL',
    name: 'Apple',
    price: '$347.59',
    trend: 'loss',
    change: '−1.0%',
    category: 'stock',
    sparklinePoints: '0.0,10.7 7.1,23.9 16.1,4.2 25.0,4.1 33.9,37.6 42.9,31.0 51.8,32.7 62.5,33.5 73.2,33.7 82.1,33.8 92.9,18.0 100.0,21.7'
  },
  {
    ticker: 'TSLA',
    name: 'Tesla',
    price: '$376.43',
    trend: 'loss',
    change: '−0.6%',
    category: 'stock',
    sparklinePoints: '0.0,4.0 10.7,12.9 19.6,14.0 28.6,35.9 39.3,31.2 50.0,27.6 60.7,27.7 71.4,27.9 82.1,28.0 91.1,16.4 100.0,17.6'
  },
  {
    ticker: 'PLTR',
    name: 'Palantir Technologies',
    price: '$167.32',
    trend: 'loss',
    change: '−0.3%',
    category: 'stock',
    sparklinePoints: '0.0,14.0 12.5,9.8 25.0,7.6 37.5,31.6 48.2,29.1 58.9,29.4 71.4,29.8 82.1,28.9 91.1,14.6 100.0,18.5'
  },
  {
    ticker: 'TSM',
    name: 'Taiwan Semiconductor Manufacturing',
    price: '$397.44',
    trend: 'gain',
    change: '+1.6%',
    category: 'stock',
    sparklinePoints: '0.0,7.1 10.7,6.9 21.4,13.5 32.1,37.4 42.9,27.6 53.6,25.1 64.3,25.1 75.0,24.9 85.7,16.2 96.4,14.2 100.0,12.1'
  },
  {
    ticker: 'RDDT',
    name: 'Reddit',
    price: '$97.44',
    trend: 'loss',
    change: '−0.1%',
    category: 'stock',
    sparklinePoints: '0.0,30.0 8.9,31.3 17.9,7.4 26.8,9.2 37.5,32.6 48.2,27.5 58.9,27.6 71.4,27.5 82.1,29.3 92.9,11.9 100.0,21.3'
  },
  {
    ticker: 'AMZN',
    name: 'Amazon',
    price: '$270.37',
    trend: 'gain',
    change: '+0.3%',
    category: 'stock',
    sparklinePoints: '0.0,24.0 9.5,22.0 19.0,20.5 28.5,18.0 38.0,15.2 47.5,16.0 57.0,14.2 66.5,12.8 76.0,15.0 85.5,13.2 100.0,11.0'
  },
  {
    ticker: 'META',
    name: 'Meta Platforms',
    price: '$643.11',
    trend: 'gain',
    change: '+0.5%',
    category: 'stock',
    sparklinePoints: '0.0,22.0 11.0,20.0 22.0,18.2 33.0,16.5 44.0,14.0 55.0,15.2 66.0,13.5 77.0,12.0 88.0,10.5 100.0,9.2'
  },
  {
    ticker: 'GOOGL',
    name: 'Alphabet Class A',
    price: '$287.68',
    trend: 'loss',
    change: '−2.0%',
    category: 'stock',
    sparklinePoints: '0.0,10.0 12.0,12.5 24.0,15.0 36.0,22.0 48.0,25.0 60.0,27.0 72.0,28.5 84.0,26.0 100.0,29.0'
  },
  {
    ticker: 'MSTR',
    name: 'Strategy Inc.',
    price: '$120.62',
    trend: 'loss',
    change: '−6.7%',
    category: 'stock',
    sparklinePoints: '0.0,8.0 12.0,14.0 24.0,18.5 36.0,26.0 48.0,31.0 60.0,33.0 72.0,32.0 84.0,35.0 100.0,36.5'
  },
  {
    ticker: 'MU',
    name: 'Micron Technology',
    price: '$709.54',
    trend: 'loss',
    change: '−3.8%',
    category: 'stock',
    sparklinePoints: '0.0,12.0 14.0,15.0 28.0,21.0 42.0,28.0 56.0,26.0 70.0,29.0 84.0,27.0 100.0,31.0'
  },
  {
    ticker: 'GME',
    name: 'GameStop',
    price: '$25.25',
    trend: 'loss',
    change: '−0.7%',
    category: 'stock',
    sparklinePoints: '0.0,18.0 14.0,19.0 28.0,22.0 42.0,24.0 56.0,23.0 70.0,22.0 84.0,21.0 100.0,22.5'
  },
  {
    ticker: 'AMC',
    name: 'AMC Entertainment Holdings, Inc.',
    price: '$3.393',
    trend: 'gain',
    change: '+3.4%',
    category: 'stock',
    sparklinePoints: '0.0,28.0 14.0,26.0 28.0,22.0 42.0,18.0 56.0,16.0 70.0,14.0 84.0,12.0 100.0,9.0'
  },
  {
    ticker: 'SPCX',
    name: 'Space Exploration Technologies',
    price: '$142.02',
    trend: 'loss',
    change: '−0.3%',
    category: 'stock',
    sparklinePoints: '0.0,5.4 12.5,23.9 25.0,17.6 37.5,30.4 50.0,16.1 62.5,17.0 75.0,18.5 87.5,6.9 100.0,5.3'
  },
  {
    ticker: 'SPY',
    name: 'SPDR S&P 500 ETF Trust',
    price: '$750.13',
    trend: 'loss',
    change: '−0.1%',
    category: 'stock',
    sparklinePoints: '0.0,16.9 12.5,10.0 25.0,4.1 37.5,36.2 50.0,32.7 62.5,33.5 75.0,35.6 87.5,19.9 100.0,21.7'
  },
  {
    ticker: 'QQQ',
    name: 'Invesco QQQ',
    price: '$673.03',
    trend: 'loss',
    change: '−0.8%',
    category: 'stock',
    sparklinePoints: '0.0,14.0 12.5,9.8 25.0,7.6 37.5,31.6 50.0,29.6 62.5,30.0 75.0,33.1 87.5,14.8 100.0,18.5'
  },
  {
    ticker: 'BABA',
    name: 'Alibaba',
    price: '$104.45',
    trend: 'loss',
    change: '−1.3%',
    category: 'stock',
    sparklinePoints: '0.0,15.0 15.0,18.0 30.0,22.0 45.0,25.0 60.0,24.0 75.0,26.0 90.0,27.0 100.0,28.5'
  },
  {
    ticker: 'CRCL',
    name: 'Circle Internet Group',
    price: '$64.72',
    trend: 'loss',
    change: '−6.7%',
    category: 'stock',
    sparklinePoints: '0.0,10.0 15.0,16.0 30.0,24.0 45.0,30.0 60.0,32.0 75.0,34.0 90.0,36.0 100.0,38.0'
  },
  {
    ticker: 'GLD',
    name: 'SPDR Gold Shares',
    price: '$370.43',
    trend: 'loss',
    change: '−1.9%',
    category: 'stock',
    sparklinePoints: '0.0,11.0 15.0,14.0 30.0,18.0 45.0,22.0 60.0,23.0 75.0,25.0 90.0,26.0 100.0,27.0'
  },
  {
    ticker: 'USO',
    name: 'United States Oil Fund',
    price: '$140.32',
    trend: 'loss',
    change: '−3.0%',
    category: 'stock',
    sparklinePoints: '0.0,6.4 12.5,9.2 25.0,27.2 37.5,18.4 50.0,22.0 62.5,21.2 75.0,22.4 87.5,28.7 100.0,34.4'
  }
];

export const AGENTS_DATA: AgentItem[] = [
  {
    id: 'f2a32cec-f295-4642-9a91-2807090837d6',
    name: 'Lab · Perps Spike Fade',
    author: 'by HiLLO',
    strategy: 'Spike fade',
    strategyType: 'spike_fade',
    tickers: ['ETH-PERP', 'BTC-PERP'],
    returnPct: '0.0%',
    balanceUsd: '$10,000.00',
    vsHolding: '+3.5 pts',
    tradesCount: 0,
    hoursActive: 13,
    rank: 1,
    trend: 'neutral',
    color: '#00ee16',
    description: 'Fades sharp hourly deviations in perps against rolling 24h moving averages on Robinhood Chain.'
  },
  {
    id: '8482ba4c-a4ad-47b5-b6d2-222ecdf5cc5f',
    name: 'Lab · Perps Deep Dip Alts',
    author: 'by HiLLO',
    strategy: 'Custom',
    strategyType: 'custom',
    tickers: ['HYPE-PERP', 'ZEC-PERP', 'XRP-PERP', 'LIT-PERP', 'NEAR-PERP'],
    returnPct: '0.0%',
    balanceUsd: '$10,000.00',
    vsHolding: '+2.0 pts',
    tradesCount: 0,
    hoursActive: 13,
    rank: 2,
    trend: 'neutral',
    color: '#0f1a1f',
    description: 'Scans top liquidity alt perps for oversold conditions using 96-hour Z-score filters.'
  },
  {
    id: 'c7ac72b6-8176-4028-b083-18aef6abfa7d',
    name: 'Palantir Trend',
    author: 'by HiLLO',
    strategy: 'Momentum',
    strategyType: 'momentum',
    tickers: ['PLTR'],
    returnPct: '−0.2%',
    balanceUsd: '$9,977.89',
    vsHolding: '+14.7 pts',
    tradesCount: 3,
    hoursActive: 632,
    rank: 3,
    trend: 'loss',
    color: '#ffffff',
    description: 'Rides strong positive momentum on PLTR tokenized stock while defending downside with tight trailing stops.'
  },
  {
    id: '407eb4b0-07ea-41c9-9571-cdde749cd3e9',
    name: 'Lab · Perps Deep Dip',
    author: 'by HiLLO',
    strategy: 'Custom',
    strategyType: 'custom',
    tickers: ['BTC-PERP', 'ETH-PERP', 'SOL-PERP'],
    returnPct: '−0.3%',
    balanceUsd: '$9,970.78',
    vsHolding: '+6.9 pts',
    tradesCount: 3,
    hoursActive: 51,
    rank: 4,
    trend: 'loss',
    color: '#f7931a',
    description: 'Enters majors on deep hourly dips and closes systematically once mean reversion targets trigger.'
  },
  {
    id: '0d58f815-2ed2-4b36-93ff-7ea85f3d43c5',
    name: 'Lab · Crypto RSI Dip',
    author: 'by HiLLO',
    strategy: 'Custom',
    strategyType: 'custom',
    tickers: ['ETH', 'BTC'],
    returnPct: '−1.0%',
    balanceUsd: '$9,900.14',
    vsHolding: '+11.3 pts',
    tradesCount: 17,
    hoursActive: 414,
    rank: 5,
    trend: 'loss',
    color: '#627eea',
    description: 'Buys spot tokenized crypto when 24h RSI drops below 30, taking profit as RSI surpasses 55.'
  },
  {
    id: 'e29bf421-27da-4e12-8877-c889f0a45bd1',
    name: 'Chip Breakout',
    author: 'by HiLLO',
    strategy: 'Custom',
    strategyType: 'custom',
    tickers: ['NVDA', 'MU', 'TSM'],
    returnPct: '−1.2%',
    balanceUsd: '$9,884.12',
    vsHolding: '+15.2 pts',
    tradesCount: 18,
    hoursActive: 632,
    rank: 6,
    trend: 'loss',
    color: '#ffffff',
    description: 'Multi-asset semiconductor agent testing high-volume breakouts and mean reversion levels.'
  },
  {
    id: '9903bda1-96bb-49e0-84cf-cb601445bf7a',
    name: 'Lab · Gold & Oil Momentum',
    author: 'by HiLLO',
    strategy: 'Momentum',
    strategyType: 'momentum',
    tickers: ['GLD', 'USO'],
    returnPct: '−2.1%',
    balanceUsd: '$9,785.10',
    vsHolding: '+4.2 pts',
    tradesCount: 5,
    hoursActive: 629,
    rank: 7,
    trend: 'loss',
    color: '#4c1f5e',
    description: 'Commodities trend-following agent balancing inflation hedges against real market volatility.'
  }
];

export const DECISIONS_FEED: DecisionItem[] = [
  {
    id: 'd-1',
    agentName: 'Lab · Trio Mean Reversion',
    time: 'Nov 10, 15:00 UTC',
    action: 'sell',
    ticker: 'NVDA',
    reason: 'Stop loss hit: -8.5% from entry. Selling everything.'
  },
  {
    id: 'd-2',
    agentName: 'Lab · Crypto RSI Dip',
    time: 'Nov 10, 15:00 UTC',
    action: 'buy',
    ticker: 'ETH',
    reason: 'Buy rule met: 24h rsi 22 below 30. Buying.'
  },
  {
    id: 'd-3',
    agentName: 'Lab · Crypto Stocks Dip',
    time: 'Nov 10, 15:00 UTC',
    action: 'buy',
    ticker: 'MSTR',
    reason: 'Price is unusually far below its 48h average (z -3.11). Buying the dip.'
  },
  {
    id: 'd-4',
    agentName: 'Lab · Perps Deep Dip',
    time: 'Nov 10, 15:00 UTC',
    action: 'buy',
    ticker: 'ETH-PERP',
    reason: 'Buy rule met: 96h z score -2.63 below -2.50. Buying.'
  },
  {
    id: 'd-5',
    agentName: 'Lab · Perps Deep Dip',
    time: 'Nov 10, 15:00 UTC',
    action: 'buy',
    ticker: 'SOL-PERP',
    reason: 'Buy rule met: 96h z score -3.09 below -2.50. Buying.'
  },
  {
    id: 'd-6',
    agentName: 'Lab · Trio Momentum',
    time: 'Nov 10, 14:00 UTC',
    action: 'sell',
    ticker: 'NVDA',
    reason: 'Dropped to -3.8% versus the 48h average. Trend is broken, selling.'
  },
  {
    id: 'd-7',
    agentName: 'Lab · Perps Deep Dip',
    time: 'Nov 10, 13:00 UTC',
    action: 'buy',
    ticker: 'BTC-PERP',
    reason: 'Buy rule met: 96h z score -2.55 below -2.50. Buying.'
  },
  {
    id: 'd-8',
    agentName: 'Lab · Crypto RSI Dip',
    time: 'Nov 10, 07:00 UTC',
    action: 'sell',
    ticker: 'ETH',
    reason: 'Sell rule met: 24h rsi 57 above 55. Selling.'
  },
  {
    id: 'd-9',
    agentName: 'Lab · Trio Momentum',
    time: 'Nov 10, 07:00 UTC',
    action: 'buy',
    ticker: 'NVDA',
    reason: 'Up +3.3% in 24h and +0.1% above the 48h average. Strong trend, buying.'
  },
  {
    id: 'd-10',
    agentName: 'Lab · Trio RSI Dip',
    time: 'Nov 10, 06:00 UTC',
    action: 'sell',
    ticker: 'NVDA',
    reason: 'Sell rule met: 24h rsi 59 above 55. Selling.'
  },
  {
    id: 'd-11',
    agentName: 'Lab · Crypto RSI Dip',
    time: 'Nov 9, 21:00 UTC',
    action: 'sell',
    ticker: 'BTC',
    reason: 'Sell rule met: 24h rsi 61 above 55. Selling.'
  },
  {
    id: 'd-12',
    agentName: 'Lab · Crypto Stocks Dip',
    time: 'Nov 9, 15:00 UTC',
    action: 'sell',
    ticker: 'MSTR',
    reason: 'Price is back above its 48h average (z 1.24). Taking the rebound.'
  },
  {
    id: 'd-13',
    agentName: 'Lab · Asia Trend Filter',
    time: 'Nov 9, 15:00 UTC',
    action: 'buy',
    ticker: 'TSM',
    reason: 'Buy rule met: price $391.16 above 72h average $377.82; 24h change +3.6% above +3.0%. Buying.'
  },
  {
    id: 'd-14',
    agentName: 'RSI Agent',
    time: 'Nov 9, 14:00 UTC',
    action: 'sell',
    ticker: 'QQQ',
    reason: 'Sell rule met: 14h rsi 71 above 70. Selling.'
  }
];

export const STRATEGIES: StrategyTemplate[] = [
  {
    id: 'momentum',
    name: 'Momentum',
    badge: 'Trend following',
    description: 'Buys after a rise of more than 3% in a day and sells once the trend breaks. Made for stocks on the move.',
    icon: '/img/icons/momentum.png',
    recommendedTokens: ['PLTR'],
    backtestName: 'Palantir Trend',
    backtestVsHolding: '+14.8 pts'
  },
  {
    id: 'mean_reversion',
    name: 'Mean reversion',
    badge: 'Buy the dip',
    description: 'Waits for unusual drops and sells the rebound once the price is back to normal. Made for choppy markets.',
    icon: '/img/icons/mean-reversion.png',
    recommendedTokens: ['GME', 'AMC'],
    backtestName: 'Meme Rebound',
    backtestVsHolding: 'Replay it'
  },
  {
    id: 'custom',
    name: 'Custom',
    badge: 'Your own rules',
    description: 'Combine price lines, averages, z scores and RSI into your own buy and sell rules. Add a take profit and a max holding time.',
    icon: '/img/icons/backtest.png',
    recommendedTokens: ['NVDA', 'MU', 'TSM'],
    backtestName: 'Chip Breakout',
    backtestVsHolding: '+23.6 pts'
  }
];

export const FAQ_ITEMS = [
  {
    q: 'Is real money involved?',
    a: "Start on paper. Test your agent's strategy with virtual dollars at real Robinhood Chain prices, then take it to real money from your own wallet once it proves itself. Signing in never moves funds from your wallet."
  },
  {
    q: 'What are stock tokens?',
    a: 'Tokens on Robinhood Chain that track the price of a US stock or ETF, such as NVDA or SPY. They trade around the clock, including weekends.'
  },
  {
    q: 'Can agents trade crypto?',
    a: 'Yes. ETH and BTC, priced every hour from their onchain pools and checked against Chainlink. Mix them with stocks in one agent.'
  },
  {
    q: 'How often does my agent trade?',
    a: 'It checks prices at the top of every hour and only trades when its rules trigger. Many hours end in a hold, and that is normal.'
  },
  {
    q: 'Can I make my own strategy?',
    a: 'Yes. Start from a template or a blank page, combine up to three rules to buy and three to sell, and add a take profit or a max holding time. No code.'
  },
  {
    q: 'Why compare with holding?',
    a: 'Because it is the easiest alternative. If an agent cannot beat simply buying the same stocks and waiting, you should know before you trust it.'
  },
  {
    q: 'How many agents can I run?',
    a: 'Up to five at once, each with its own virtual capital. Agents are locked once launched so their track record stays honest. Pause one to launch another.'
  },
  {
    q: 'Who can use HiLLO?',
    a: 'Anyone outside the United States and sanctioned countries. Stock tokens are not offered to US persons.'
  }
];

export const CONTRACT_ADDRESS = '0x8e04549484d0612be8373a0263b11928a5f7681f';
export const CONTRACT_ADDRESS_SHORT = '0x8e04…681f';
export const SOCIAL_X_URL = 'https://x.com/HilloAgent';
export const LOGO_PATH = '/img/brand/hillo-logo.png';
