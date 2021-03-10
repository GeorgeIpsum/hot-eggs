import React, { useRef } from 'react';

const SmtPF: React.FC = () => {
  const img = useRef<number>(Math.ceil((33*Math.random()))).current;

  return (<img src={`https://smtpf.s3.amazonaws.com/smtpf/${img}.png`} />);
};

export default SmtPF;
