import { useState, useEffect } from 'react';

export const schemes: Record<string, string> = {
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)'
}

const useColorScheme = () => {
  const [scheme, setScheme] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') {
      return () => { };
    } else {
      const listener = (e: any) => {
        if (!e || !e.matches) {
          return;
        }
        const schemeNames = Object.keys(schemes);
        for (let i = 0; i < schemeNames.length; i++) {
          const schemeName = schemeNames[i]
          if (e.media === schemes[schemeName]) {
            setScheme(schemeName);
            break;
          }
        }
      }

      let activeMatches: any = []
      Object.values(schemes).forEach(scheme => {
        const mq = window.matchMedia(scheme);
        mq.addEventListener('change', listener);
        activeMatches.push(mq);
        listener(mq);
      });

      return () => {
        activeMatches.forEach((mq: any) => mq.removeListener(listener));
        activeMatches = [];
      };
    }
  }, []);

  return scheme;
}

export default useColorScheme;
