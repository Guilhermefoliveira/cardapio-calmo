import { useEffect } from 'react';

declare global {
  interface Window {
    VLibras: any;
  }
}

declare module 'react' {
  interface HTMLAttributes<T> {
    vw?: string;
    'vw-access-button'?: string;
    'vw-plugin-wrapper'?: string;
  }
}

export const VLibras = () => {
  useEffect(() => {
    const scriptId = 'vlibras-script';
    
    // Evita duplicidade do script
    if (document.getElementById(scriptId)) {
      if (window.VLibras) {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
      }
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.async = true;

    script.onload = () => {
      if (window.VLibras) {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
      }
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div className="vlibras-widget">
      <div vw="true" className="enabled">
        <div vw-access-button="true" className="active"></div>
        <div vw-plugin-wrapper="true">
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>
    </div>
  );
};
