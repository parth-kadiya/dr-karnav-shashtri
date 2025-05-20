import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Karnavbhai from './components/Karnavbhai';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import Journey from './components/Journey';
import Spiritual from './components/Spiritual';
import NewsImage from './components/NewsImage';
import OnlineKatha from './components/OnlineKatha';
import OnlineKathaTwo from './components/OnlineKathaTwo';
import OnlineKathaThree from './components/OnlineKathaThree';
import Contact from './components/Contact';
import Footer from './components/Footer';

// ← New: import Donate page
import Donate from './components/Donate';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          {/* Home page: your existing sections */}
          <Route path="/" element={
            <>
              <Karnavbhai />
              <AboutUs />
              <Features />
              <Journey />
              <Spiritual />
              <NewsImage />
              <OnlineKatha />
              <OnlineKathaTwo />
              <OnlineKathaThree />
              <Contact />
            </>
          }/>

          {/* Donate page */}
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
