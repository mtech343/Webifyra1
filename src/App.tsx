import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AmazonServicesPage } from './pages/services/AmazonServicesPage';
import { ShopifyServicesPage } from './pages/services/ShopifyServicesPage';
import { MetaAdsPage } from './pages/services/MetaAdsPage';
import { SocialMediaPage } from './pages/services/SocialMediaPage';
import { WebDevelopmentPage } from './pages/services/WebDevelopmentPage';
import { UGCContentPage } from './pages/services/UGCContentPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/amazon" element={<AmazonServicesPage />} />
            <Route path="/services/shopify" element={<ShopifyServicesPage />} />
            <Route path="/services/meta-ads" element={<MetaAdsPage />} />
            <Route path="/services/social-media" element={<SocialMediaPage />} />
            <Route path="/services/web-development" element={<WebDevelopmentPage />} />
            <Route path="/services/ugc-content" element={<UGCContentPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;