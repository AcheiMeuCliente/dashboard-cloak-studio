
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
    ? "w-full h-screen bg-white"
    : "w-full h-screen bg-white";

  const iframeStyle = isMobile
    ? {
        width: '100%',
        height: '100vh',
        border: 'none',
        margin: 0,
        padding: 0,
        overflow: 'hidden'
      }
    : {
        width: '100%',
        height: '100vh',
        border: 'none',
        margin: 0,
        padding: 0,
        overflow: 'hidden'
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
        className="absolute inset-0"
        title="Dashboard Looker Studio"
      />
      
      {/* CSS personalizado para ocultar header e footer do Looker Studio */}
      <style jsx>{`
        iframe {
          /* Remove scrollbars */
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        iframe::-webkit-scrollbar {
          display: none;
        }
        
        /* Oculta elementos do Looker Studio via CSS injection */
        iframe::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: white;
          z-index: 1000;
        }
      `}</style>
    </div>
  );
};

export default DashboardViewer;
