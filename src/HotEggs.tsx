import React, { useLayoutEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';
import { useColorScheme } from './hooks';

require('./theme.css');

import Vibing from './components/Vibing';
import Sam from './components/Sam';
import Doom from './routes/Doom';

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

  const onHover = () => {
    const audio = document.getElementById("audio") as HTMLAudioElement | null;
    if(audio) {
      audio.pause();
      audio.load();
      audio.play();
    }
  }

  const HENLO = "henlo twss :^)";

  return (<Router>
    <Switch>
      <Route path="/doom">
        <Doom />
      </Route>
      <Route path="/">
        <div style={{ padding: 30 }}>
          <span>{HENLO}</span>
        </div>
        <div style={{ margin: 30 }}>
          <Link to="doom">PLAY DOOM</Link>
        </div>
      </Route>
    </Switch>
    <Sam />
    <Vibing style={{ position: 'absolute', bottom: 10, right: 10, borderRadius: 10 }} imgStyle={{ height: 70, width: 70, borderRadius: 10 }} onHover={onHover} />
  </Router>);
}

export default HotEggs;
