
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewsSection from './components/NewsSection';
import AboutSection from './components/AboutSection';
import FoundersSection from './components/FoundersSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BirthdayBanner from './components/BirthdayBanner';
import MembersPage from './components/MembersPage';
import CharityEventPage from './components/CharityEventPage';
import BoardElectionPage from './components/BoardElectionPage';
import JofcAwardPage from './components/JofcAwardPage';
import PresidentReferentPage from './components/PresidentReferentPage';
import BoardMembersPage from './components/BoardMembersPage';
import WorkInProgressPage from './components/WorkInProgressPage';

export type ViewState = 'home' | 'members' | 'charity' | 'work-in-progress' | 'founders' | 'board-election' | 'jofc-award' | 'president-referent' | 'board-members';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'members':
        return <MembersPage />;
      case 'charity':
        return <CharityEventPage onBack={() => handleNavigate('home')} />;
      case 'founders':
        return <FoundersSection onBack={() => handleNavigate('home')} />;
      case 'board-election':
        return <BoardElectionPage onBack={() => handleNavigate('home')} />;
      case 'jofc-award':
        return <JofcAwardPage onBack={() => handleNavigate('home')} />;
      case 'president-referent':
        return <PresidentReferentPage onBack={() => handleNavigate('home')} />;
      case 'board-members':
        return <BoardMembersPage onBack={() => handleNavigate('home')} />;
      case 'work-in-progress':
        return <WorkInProgressPage onBack={() => handleNavigate('home')} />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <BirthdayBanner />
            <NewsSection onNavigate={handleNavigate} />
            <AboutSection />
            <GallerySection />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-juve-gold selection:text-black">
      <Navbar onNavigate={handleNavigate} />
      
      <main>
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
}

export default App;
