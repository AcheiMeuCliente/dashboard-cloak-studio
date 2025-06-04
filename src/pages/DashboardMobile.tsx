
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
      
      {/* CSS adicional para dispositivos móveis */}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          overflow: hidden;
          -webkit-overflow-scrolling: touch;
          -webkit-user-select: none;
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: transparent;
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
        
        /* Responsividade para diferentes tamanhos de tela mobile */
        @media screen and (max-width: 480px) {
          iframe {
            transform: scale(0.9);
            transform-origin: top left;
            width: 111.11%;
            height: 111.11%;
          }
        }
        
        @media screen and (max-width: 360px) {
          iframe {
            transform: scale(0.8);
            transform-origin: top left;
            width: 125%;
            height: 125%;
          }
        }
      `}</style>
    </div>
  );
};

export default DashboardMobile;
