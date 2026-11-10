export interface MarketItem {
  ticker: string;
  name: string;
  price: string;
  trend: 'gain' | 'loss';
  change: string;
  category: 'stock' | 'crypto' | 'perp';
  sparklinePoints: string;
}

export interface AgentItem {
  id: string;
  name: string;
  author: string;
  strategy: string;
  strategyType: 'momentum' | 'mean_reversion' | 'custom' | 'spike_fade' | 'trend_filter';
  tickers: string[];
  returnPct: string;
  balanceUsd: string;
  vsHolding: string;
  tradesCount: number;
  hoursActive: number;
  rank: number;
  trend: 'gain' | 'loss' | 'neutral';
  color?: string;
  description?: string;
}

export interface DecisionItem {
  id: string;
  agentName: string;
  time: string;
  action: 'buy' | 'sell' | 'hold';
  ticker: string;
  reason: string;
}

export interface StrategyTemplate {
  id: string;
  name: string;
  badge: string;
  description: string;
  icon: string;
  recommendedTokens: string[];
  backtestName: string;
  backtestVsHolding: string;
}
