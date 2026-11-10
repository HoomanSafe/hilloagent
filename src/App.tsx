import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBand } from './components/StatsBand';
import { ShowcaseDesk } from './components/ShowcaseDesk';
import { StrategiesSection } from './components/StrategiesSection';
import { MarketsSection } from './components/MarketsSection';
import { HowItWorks } from './components/HowItWorks';
import { DecisionLogSection } from './components/DecisionLogSection';
import { TaglineSection } from './components/TaglineSection';
import { TrackRecordSection } from './components/TrackRecordSection';
import { LeaderboardSection } from './components/LeaderboardSection';
import { RoadmapSection } from './components/RoadmapSection';
import { FaqSection } from './components/FaqSection';
import { ClosingSection } from './components/ClosingSection';
import { Footer } from './components/Footer';
import { StudioModal } from './components/StudioModal';
import { LoginModal } from './components/LoginModal';
import { SwapModal } from './components/SwapModal';
import { DocsModal } from './components/DocsModal';
import { StatsModal } from './components/StatsModal';
import { FullLeaderboardModal } from './components/FullLeaderboardModal';
import { AgentDetailModal } from './components/AgentDetailModal';
import { AgentItem, MarketItem, StrategyTemplate } from './types';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('hillo_theme') as 'dark' | 'light') || 'dark';
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedAgent, setSelectedAgent] = useState<AgentItem | null>(null);
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSwapOpen, setIsSwapOpen] = useState(false);
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isFullLeaderboardOpen, setIsFullLeaderboardOpen] = useState(false);
  
  const [studioStrategy, setStudioStrategy] = useState<StrategyTemplate | null>(null);
  const [studioStock, setStudioStock] = useState<string | null>(null);

  // Sync theme attribute on <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('hillo_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleOpenStudio = (strategy?: StrategyTemplate, stock?: string) => {
    setStudioStrategy(strategy || null);
    setStudioStock(stock || null);
    setIsStudioOpen(true);
  };

  const handleSelectMarket = (market: MarketItem) => {
    handleOpenStudio(undefined, market.ticker);
  };

  const handleSelectStrategy = (strat: StrategyTemplate) => {
    handleOpenStudio(strat);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root min-h-screen">
      {/* Navigation Header */}
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenStudio={() => handleOpenStudio()}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenSwap={() => setIsSwapOpen(true)}
        onOpenDocs={() => setIsDocsOpen(true)}
        onOpenStats={() => setIsStatsOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content */}
      <main id="main">
        {/* Hero Section */}
        <Hero
          onOpenStudio={() => handleOpenStudio()}
          onScrollToLeaderboard={() => handleNavigateSection('leaderboard')}
          onCopyNotice={showToast}
        />

        {/* Stats Band */}
        <StatsBand />

        {/* Showcase Trading Desk */}
        <ShowcaseDesk
          onOpenStudio={() => handleOpenStudio()}
          onSelectAgent={(agent) => setSelectedAgent(agent)}
          onNavigateSection={handleNavigateSection}
        />

        {/* Strategies Section */}
        <StrategiesSection onSelectStrategy={handleSelectStrategy} />

        {/* Markets Section */}
        <MarketsSection onSelectMarket={handleSelectMarket} />

        {/* How It Works */}
        <HowItWorks />

        {/* Decision Log Section */}
        <DecisionLogSection />

        {/* Tagline Section */}
        <TaglineSection />

        {/* Track Record Section */}
        <TrackRecordSection />

        {/* Leaderboard Section */}
        <LeaderboardSection
          onSelectAgent={(agent) => setSelectedAgent(agent)}
          onOpenFullLeaderboard={() => setIsFullLeaderboardOpen(true)}
        />

        {/* Roadmap / What's Next */}
        <RoadmapSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Closing Section */}
        <ClosingSection
          onOpenStudio={() => handleOpenStudio()}
          onOpenLogin={() => setIsLoginOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenStudio={() => handleOpenStudio()}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenSwap={() => setIsSwapOpen(true)}
        onOpenDocs={() => setIsDocsOpen(true)}
        onOpenStats={() => setIsStatsOpen(true)}
        onNavigateSection={handleNavigateSection}
        onCopyNotice={showToast}
      />

      {/* Toast Notice */}
      {toastMessage && (
        <div className="toast-notice" role="alert">
          <i className="ph-fill ph-check-circle" style={{ color: '#01d062', fontSize: '18px' }}></i>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Interactive Modals */}
      <StudioModal
        isOpen={isStudioOpen}
        onClose={() => setIsStudioOpen(false)}
        initialStrategy={studioStrategy}
        initialStock={studioStock}
        onAgentCreated={(newAgent) => {
          setSelectedAgent(newAgent);
        }}
        onCopyNotice={showToast}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSuccess={(identifier) => {
          showToast(`Logged in as ${identifier}`);
        }}
      />

      <SwapModal
        isOpen={isSwapOpen}
        onClose={() => setIsSwapOpen(false)}
        onNotice={showToast}
      />

      <DocsModal
        isOpen={isDocsOpen}
        onClose={() => setIsDocsOpen(false)}
      />

      <StatsModal
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
      />

      <FullLeaderboardModal
        isOpen={isFullLeaderboardOpen}
        onClose={() => setIsFullLeaderboardOpen(false)}
        onSelectAgent={(agent) => setSelectedAgent(agent)}
        onOpenStudio={() => handleOpenStudio()}
      />

      <AgentDetailModal
        agent={selectedAgent}
        onClose={() => setSelectedAgent(null)}
        onOpenStudioWithAgent={(agent) => {
          handleOpenStudio(undefined, agent.tickers[0]);
        }}
      />
    </div>
  );
}
