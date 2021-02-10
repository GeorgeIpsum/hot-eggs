import React, { useEffect, useRef } from 'react';

require('../styles/doom.css');

import { DosFactory } from "js-dos";
require("js-dos");
const Dos = (window as any).Dos as DosFactory;

//   <script type="text/javascript" src="https://js-dos.com/cdn/js-dos-api.js"></script>

const Doom: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (ref !== null) {
      const ciPromise = Dos(ref.current as HTMLCanvasElement, {
        wdosboxUrl: "https://js-dos.com/6.22/current/wdosbox.js",

      }).then((runtime) => {
        return runtime.fs.extract("https://vidferris.github.io/FaviconDoom/doom19shareware.zip").then(() => {
          return runtime.main(["DOOM.EXE"]);
        });
      });

      return () => {
        ciPromise.then(ci => ci.exit());
      };
    }
  }, [ref]);

  return (<canvas ref={ref} />);
}

export default Doom;
