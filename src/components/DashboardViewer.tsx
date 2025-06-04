
import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useDashboardResponsive } from '../hooks/useDashboardResponsive';

interface DashboardViewerProps {
  embedUrl: string;
  isMobile?: boolean;
}

const DashboardViewer: React.FC<DashboardViewerProps> = ({ embedUrl, isMobile = false }) => {
  const [isLoading, setIsLoading] = useState(true);
  const responsiveConfig = useDashboardResponsive(isMobile);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Adiciona parâmetros do Looker Studio para ocultar header/footer programaticamente
  const optimizedUrl = `${embedUrl}&chrome=false&embed=true&header=false&footer=false`;

  const containerStyle = "w-full h-screen bg-white relative overflow-hidden";

  const iframeStyle = {
    width: responsiveConfig.width,
    height: responsiveConfig.height,
    border: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    transform: `scale(${responsiveConfig.scale}) translateY(${responsiveConfig.translateY}px)`,
    transformOrigin: 'top left',
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
        src={optimizedUrl}
        style={iframeStyle}
        onLoad={handleIframeLoad}
        allowFullScreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        title="Dashboard Looker Studio"
        scrolling="no"
      />
      
      <style>{`
        iframe {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        iframe::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default DashboardViewer;
