import React from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import AboutSection from './components/AboutSection';
import CardList from './components/CardList';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { articles } from './data/articles';
import { tutorials } from './data/tutorials';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div>
        <Navbar />
        <HeroBanner />
        <AboutSection />
        <CardList
          id="articles"
          title="Featured Articles"
          items={articles}
          buttonText="See all articles"
        />
        <CardList
          id="tutorials"
          title="Featured Tutorials"
          items={tutorials}
          buttonText="See all tutorials"
        />
      </div>
      <div>
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}

export default App;