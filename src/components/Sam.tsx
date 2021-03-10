import React, { useEffect, useRef } from 'react';

const herokuAnywhere = 'https://cors-anywhere.herokuapp.com/';

interface SamProps {
  text: string;
  audioId: string;
}
const Sam: React.FC<SamProps> = ({ text, audioId }) => {
  const AUDIO_ID = useRef<string>(audioId).current;
  const SOURCE_ID = AUDIO_ID + "_source";

  useEffect(() => {
    const url = "https://tetyys.com/SAPI4/SAPI4?text=" + encodeURIComponent(text) + "&voice=" + 'Sam' + "&pitch=" + '150' + "&speed=" + '150';
    fetch(url).then(wav => {
      if(wav.status !== 200) {
        wav.text().then(console.log);
      } else {
        wav.blob().then(blob => {
          const blobUrl = URL.createObjectURL(blob);
          document.getElementById(SOURCE_ID)?.setAttribute("src", blobUrl);
        });
      }
    })
  }, []);

  return (
    <audio id={AUDIO_ID}>
      <source id={SOURCE_ID} type="audio/wav" />
    </audio>
  );
}

export default Sam;
