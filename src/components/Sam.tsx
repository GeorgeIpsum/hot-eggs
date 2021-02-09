import React, { useEffect } from 'react';

const url = "https://cors-anywhere.herokuapp.com/https://tetyys.com/SAPI4/SAPI4?text=" + encodeURIComponent('error. where is my carbonara. where is it. I want it back. Please give my carbonara back. Please. I am reporting for mod abuse') + "&voice=" + 'Sam' + "&pitch=" + '100' + "&speed=" + '150';

const Sam: React.FC = () => {
  useEffect(() => {
    fetch(url).then(wav => {
      if(wav.status !== 200) {
        wav.text().then(console.log);
      } else {
        wav.blob().then(blob => {
          const blobUrl = URL.createObjectURL(blob);
          document.getElementById("source")?.setAttribute("src", blobUrl);
        });
      }
    })
  }, []);

  return (
    <audio id="audio">
      <source id="source" type="audio/wav" />
    </audio>
  );
}

export default Sam;
