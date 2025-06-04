
import React from 'react';
import DashboardViewer from '../components/DashboardViewer';

const DashboardDesktop = () => {
  // URL do embed do Looker Studio - substitua pela sua URL real
  const embedUrl = "https://lookerstudio.google.com/embed/reporting/bce551df-cd0c-4e5b-a67a-c9c82675377d/page/p_xmxd0c3usd";
  
  return (
    <div className="w-screen h-screen bg-white overflow-hidden">
      <DashboardViewer embedUrl={embedUrl} isMobile={false} />
      
      <style>{`
        body {
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
        
        @media screen and (min-width: 1024px) {
          .dashboard-container {
            zoom: 1;
          }
        }
        
        @media screen and (min-width: 1440px) {
          .dashboard-container {
            zoom: 1.1;
          }
        }
        
        @media screen and (min-width: 1920px) {
          .dashboard-container {
            zoom: 1.2;
          }
        }
        
        @supports (-webkit-appearance: none) {
          iframe {
            -webkit-transform: translateZ(0);
            -webkit-backface-visibility: hidden;
          }
        }
        
        @supports (display: -ms-grid) {
          iframe {
            -ms-transform: translateZ(0);
          }
        }
        
        iframe {
          pointer-events: auto;
          touch-action: manipulation;
        }
      `}</style>
    </div>
  );
};

export default DashboardDesktop;
