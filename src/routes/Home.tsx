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
  </>);
}

export default Home;
