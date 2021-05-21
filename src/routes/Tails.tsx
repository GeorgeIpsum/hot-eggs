import React, { useRef } from 'react';

const Tails: React.FC = () => {
  const img = useRef<number>(Math.ceil((33*Math.random()))).current;

  return (<img src={`https://smtpf.s3.amazonaws.com/tails/${img}.png`} />);
};

export default Tails;
