import React from 'react';
import { Application, Container, Texture, Sprite } from 'pixi.js';
require('../styles/sheb.css');

export default class SuperHotEggBros extends React.PureComponent<{}, {}> {
  app?: Application;
  gameCanvas?: HTMLDivElement;

  constructor(props: any) {
    super(props);
  }

  componentDidMount = () => {
    this.app = new Application({ resizeTo: window, autoStart: false });
    this.gameCanvas?.appendChild(this.app.view);
    this.app.start();
    const container = new Container();
    this.app.stage.addChild(container);
    const texture = Texture.from('https://i.redd.it/xb9g0sqlcpq41.png');
    const sprite = new Sprite(texture);
    sprite.anchor.set(0.5);
    sprite.x = 0;
    sprite.y = 0;
    container.addChild(sprite);
    container.x = this.app.view.width / 2;
    container.y = this.app.view.height / 2;

    this.app.ticker.add((delta) => {
      container.rotation += 0.01 * delta;
    });
  }

  componentWillUnmount = () => {
    this.app?.stop();
    this.app?.destroy();
  }

  render = () => {
    return (
      <div ref={(div: HTMLDivElement) => this.gameCanvas = div} />
    );
  }
}
