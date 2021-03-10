import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const HENLO = "henlo twss :^)";

  return (<>
    <div style={{ padding: 30 }}>
      <span>{HENLO}</span>
    </div>
    <div style={{ margin: 30 }}>
      <Link to="doom">PLAY DOOM</Link>
    </div>
    <div style={{ margin: 30 }}>
      <Link to="super-hot-egg-bros">PLAY SHEB</Link>
    </div>
    <div style={{ margin: 30 }}>
      <Link to="smtpf">???</Link>
    </div>
    <div style={{ margin: 30 }}>
      <Link to="gallery">The Gallery</Link>
    </div>
    <div style={{ margin: 30 }}>
      <a href="https://en.wikipedia.org/wiki/QWERTY" target="_blank">If u r Error click on this link.</a>
    </div>
  </>);
}

export default Home;
