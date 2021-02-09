import React from 'react';

import vibing from '../assets/img/VIBING.gif';
require('./vibing.css');

interface VibingProps {
  style?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
  onHover?: () => void;
}

const Vibing: React.FC<VibingProps> = ({ style = {}, imgStyle = {}, onHover }) => {
  return (
    <a href="https://gamefaqs.gamespot.com/feedback?type=20" className="vibingParent" title="REPORT_ERROR.EXE" style={{...style}}>
      <img src={vibing} style={imgStyle} className="vibing" onMouseEnter={onHover} />
    </a>
  );
}

export default Vibing;
