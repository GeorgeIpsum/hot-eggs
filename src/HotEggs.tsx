import React, { useLayoutEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { useColorScheme } from './hooks';

require('./theme.css');

import Vibing from './components/Vibing';
import Sam from './components/Sam';
import Doom from './routes/Doom';
import Home from './routes/Home';
import SuperHotEggBros from './routes/SuperHotEggBros';

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

  return (<Router>
    <Switch>
      <Route path="/doom">
        <Doom />
      </Route>
      <Route path="/super-hot-egg-bros">
        <SuperHotEggBros />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    <Sam text='error. where is my carbonara. where is it. I want it back. Please give my carbonara back. Please. I am reporting for mod abuse' audioId="audio" />
    <Vibing style={{ position: 'absolute', bottom: 10, right: 10, borderRadius: 10 }} imgStyle={{ height: 70, width: 70, borderRadius: 10 }} onHover={onHover} />
  </Router>);
}

export default HotEggs;
