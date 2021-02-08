import React, { useLayoutEffect } from 'react';
import { useColorScheme } from './hooks';

require('./theme.css');

import Vibing from './components/Vibing';

const HotEggs: React.FC = () => {
  const colorScheme = useColorScheme();

  useLayoutEffect(() => {
    if (colorScheme === 'dark') {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }, [colorScheme]);

  const HENLO = "henlo twss :^)";

  return (<>
    <div style={{ padding: 30 }}>
      <span>{HENLO}</span>
    </div>
    <Vibing style={{ position: 'absolute', bottom: 10, right: 10, borderRadius: 10 }} imgStyle={{ height: 70, width: 70, borderRadius: 10 }} />
  </>);
}

export default HotEggs;
