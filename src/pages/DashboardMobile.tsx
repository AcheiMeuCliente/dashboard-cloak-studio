
import React from 'react';
import DashboardViewer from '../components/DashboardViewer';

const DashboardMobile = () => {
  // URL do embed do Looker Studio - substitua pela sua URL real
  const embedUrl = "https://lookerstudio.google.com/embed/reporting/bce551df-cd0c-4e5b-a67a-c9c82675377d/page/p_xmxd0c3usd";
  
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Meta tags para otimização mobile */}
      <div className="sr-only">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </div>
      
      <DashboardViewer embedUrl={embedUrl} isMobile={true} />
      
      <style>{`
        body {
          margin: 0;
          padding: 0;
          overflow: hidden;
          -webkit-overflow-scrolling: touch;
          -webkit-user-select: none;
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: transparent;
        }
        
        html, body {
          height: 100%;
          width: 100%;
          position: fixed;
        }
        
        /* iPhone 14 Pro (430x932) */
        @media screen and (max-width: 430px) and (max-height: 932px) {
          .dashboard-container iframe {
            transform: scale(0.85) translateY(-80px);
            transform-origin: top left;
            width: 117.6%;
            height: 130%;
          }
        }
        
        /* iPhone 14 (390x844) */
        @media screen and (max-width: 390px) and (max-height: 844px) {
          .dashboard-container iframe {
            transform: scale(0.82) translateY(-70px);
            transform-origin: top left;
            width: 122%;
            height: 125%;
          }
        }
        
        /* iPhone SE (375x667) */
        @media screen and (max-width: 375px) and (max-height: 667px) {
          .dashboard-container iframe {
            transform: scale(0.75) translateY(-60px);
            transform-origin: top left;
            width: 133.3%;
            height: 140%;
          }
        }
        
        /* Samsung Galaxy (360x640) e similares */
        @media screen and (max-width: 360px) {
          .dashboard-container iframe {
            transform: scale(0.7) translateY(-50px);
            transform-origin: top left;
            width: 142.8%;
            height: 150%;
          }
        }
        
        /* Paisagem mobile */
        @media screen and (max-height: 500px) and (orientation: landscape) {
          .dashboard-container iframe {
            transform: scale(0.6) translateY(-40px);
            transform-origin: top left;
            width: 166.6%;
            height: 180%;
          }
        }
        
        /* Otimizações para iOS */
        @supports (-webkit-touch-callout: none) {
          .dashboard-container {
            -webkit-overflow-scrolling: touch;
            -webkit-transform: translate3d(0, 0, 0);
          }
        }
        
        /* Otimizações para Android */
        @media screen and (-webkit-min-device-pixel-ratio: 0) {
          .dashboard-container {
            transform: translateZ(0);
          }
        }
      `}</style>
    </div>
  );
};

export default DashboardMobile;
