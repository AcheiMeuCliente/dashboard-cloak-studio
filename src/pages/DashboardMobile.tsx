
import React from 'react';
import DashboardViewer from '../components/DashboardViewer';

const DashboardMobile = () => {
  // URL base do embed do Looker Studio
  const embedUrl = "https://lookerstudio.google.com/embed/reporting/bce551df-cd0c-4e5b-a67a-c9c82675377d/page/p_xmxd0c3usd";
  
  return (
    <div className="min-h-screen bg-white overflow-hidden">
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
          height: 100vh;
          position: fixed;
          width: 100%;
        }
        
        html, body {
          height: 100vh;
          width: 100%;
          position: fixed;
          overflow: hidden;
        }
        
        /* Remove todas as barras de rolagem */
        * {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        *::-webkit-scrollbar {
          display: none;
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
