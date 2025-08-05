import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { HomePage } from './pages/HomePage';
import { AmazonServicesPage } from './pages/services/AmazonServicesPage';
import { ShopifyServicesPage } from './pages/services/ShopifyServicesPage';
import { MetaAdsPage } from './pages/services/MetaAdsPage';
import { SocialMediaPage } from './pages/services/SocialMediaPage';
import { WebDevelopmentPage } from './pages/services/WebDevelopmentPage';
import { UGCContentPage } from './pages/services/UGCContentPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show loading screen on initial load
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && showContent && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>
      
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Router>
            <div className="min-h-screen bg-white">
              <Header />
              <main className="pt-20">
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
          
          {/* Vapi Voice Assistant Widget */}
          <div dangerouslySetInnerHTML={{
            __html: `
              <vapi-widget
                public-key="20c12a99-d3b6-4ff0-afcc-b4f1de10ff65"
                assistant-id="f14580aa-0773-436a-a705-0d629cce0f04"
                mode="voice"
                theme="dark"
                base-bg-color="#000000"
                accent-color="#05ccc2"
                cta-button-color="#000000"
                cta-button-text-color="#ffffff"
                border-radius="large"
                size="compact"
                position="bottom-right"
                title="Get Call"
                start-button-text="Start"
                end-button-text="End Call"
                chat-first-message="Hey, How can I help you today?"
                chat-placeholder="Type your message..."
                voice-show-transcript="true"
                consent-required="false"
              ></vapi-widget>
            `
          }} />
        </motion.div>
      )}
    </>
  );
}

export default App;