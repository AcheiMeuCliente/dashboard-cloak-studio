
import { useState, useEffect } from 'react';

interface ResponsiveConfig {
  scale: number;
  translateY: number;
  width: string;
  height: string;
}

export const useDashboardResponsive = (isMobile: boolean = false) => {
  const [config, setConfig] = useState<ResponsiveConfig>({
    scale: 1,
    translateY: 0,
    width: '100%',
    height: '100%'
  });

  useEffect(() => {
    const calculateResponsive = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      
      if (!isMobile) {
        // Desktop - mantém configuração simples
        setConfig({
          scale: 1,
          translateY: -60,
          width: '100%',
          height: '120%'
        });
        return;
      }

      // Mobile - cálculo baseado na proporção real do painel (800x9300)
      const panelOriginalWidth = 800;
      const panelOriginalHeight = 9300;
      const panelRatio = panelOriginalHeight / panelOriginalWidth; // ~11.625

      // Calcula a escala para fit na largura da tela
      const scaleToFitWidth = screenWidth / panelOriginalWidth;
      
      // Calcula altura necessária considerando a escala
      const scaledPanelHeight = panelOriginalHeight * scaleToFitWidth;
      
      // Ajusta a escala se necessário para caber na tela
      let finalScale = scaleToFitWidth;
      let iframeHeight = '100vh';
      
      // Para telas muito pequenas, reduz um pouco mais a escala
      if (screenWidth < 375) {
        finalScale = scaleToFitWidth * 0.95;
      }
      
      // Calcula altura do iframe para mostrar todo o conteúdo
      const iframeHeightPercent = Math.max(1200, (scaledPanelHeight / screenHeight) * 100);
      
      setConfig({
        scale: finalScale,
        translateY: -20,
        width: `${(1 / finalScale) * 100}%`,
        height: `${iframeHeightPercent}%`
      });
    };

    calculateResponsive();
    window.addEventListener('resize', calculateResponsive);
    window.addEventListener('orientationchange', calculateResponsive);

    return () => {
      window.removeEventListener('resize', calculateResponsive);
      window.removeEventListener('orientationchange', calculateResponsive);
    };
  }, [isMobile]);

  return config;
};
