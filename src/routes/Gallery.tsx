import React from 'react';

const numbers = new Array(33).fill(0).map((v, i) => <img src={`https://smtpf.s3.amazonaws.com/smtpf/${i+1}.png`} />);

const Gallery: React.FC = () => {
  return <>{ numbers }</>;
};

export default Gallery;
