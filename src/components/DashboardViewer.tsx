
import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

interface DashboardViewerProps {
  embedUrl: string;
  isMobile?: boolean;
}

const DashboardViewer: React.FC<DashboardViewerProps> = ({ embedUrl, isMobile = false }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const containerStyle = isMobile 
    ? "w-full h-screen bg-white relative overflow-hidden"
    : "w-full h-screen bg-white relative overflow-hidden";

  const iframeStyle = isMobile
    ? {
        width: '100%',
        height: '120%',
        border: 'none',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        transform: 'translateY(-60px)',
        position: 'absolute' as const,
        top: 0,
        left: 0
      }
    : {
        width: '100%',
        height: '110%',
        border: 'none',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        transform: 'translateY(-40px)',
        position: 'absolute' as const,
        top: 0,
        left: 0
      };

  return (
    <div className={containerStyle}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          <div className="flex flex-col items-center space-y-4">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <p className="text-gray-600 text-sm">Carregando painel...</p>
          </div>
        </div>
      )}
      
      <iframe
        src={embedUrl}
        style={iframeStyle}
        onLoad={handleIframeLoad}
        allowFullScreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        title="Dashboard Looker Studio"
      />
      
      <style>{`
        iframe {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        iframe::-webkit-scrollbar {
          display: none;
        }
        
        /* Máscara para ocultar footer */
        .dashboard-mask::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: white;
          z-index: 5;
          pointer-events: none;
        }
      `}</style>
      
      {/* Máscara para ocultar o footer */}
      <div className="dashboard-mask absolute inset-0 pointer-events-none"></div>
    </div>
  );
};

export default DashboardViewer;
