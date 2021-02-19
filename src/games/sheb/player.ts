import { Texture, Sprite } from 'pixi.js';

// credits to https://github.com/ToadsworthLP/Tortellini for base physics values

interface Vector2D {
  x: number;
  y: number;
}

const WALK_ACCEL: number = 2;
const WALK_SPD: number = 7.4;
const RUN_ACCEL: number = 2;
const RUN_SPD: number = 12.8;
const LONG_RUN_ACCEL: number = 2;
const LONG_RUN_SPD: number = 18.2;
const LONG_RUN_TIME: number = 1;
const IDLE_JUMP_FORCE: number = 25;
const WALK_JUMP_FORCE: number = 27.6;
const LONG_RUN_JUMP_FORCE: number = 30;
const MAX_JUMP_SUSTAIN_TIME: number = 0.45;
const JUMP_SUSTAIN_GRAVITY_MULTIPLIER: number = 0.55;
const AIR_HORIZONTAL_ACCEL: number = 1.5;
const CROUCH_INPUT_THRESHOLD: number = -0.5;
const SLIDE_MIN_ANGLE: number = 5;
const SLIDE_ACCEL: number = 1.4;
const SLIDE_SPEED: number = 12.8;
const CROUCH_BOOST_FORCE: Vector2D = { x: 6, y: 6 };
const FLOOR_FRICTION: number = 1;
const AIR_FRICTION: number = 0.4;
const SLIDE_FRICTION: number = 0.4;

class Player {
  static get walkAcceleration(): number { return WALK_ACCEL; };
  static get walkSpeed(): number { return WALK_SPD; }
  static get runAcceleration(): number { return RUN_ACCEL; }
  static get runSpeed(): number { return RUN_SPD; }
  static get longRunAcceleration(): number { return LONG_RUN_ACCEL; }
  static get longRunSpeed(): number { return LONG_RUN_SPD; }
}

export default Player;
