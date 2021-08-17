import { Event } from "./events";
import { State } from "./state";
import { WORLD_WIDTH } from "./world";

export function getEvents(state: State): Event[] {
  const slope = state.ball.vy / state.ball.vx;

  const y = state.ball.y - slope * (state.ball.x - WORLD_WIDTH);

  const currentY = state.players[1].y;
  const distance = y - currentY;

  if (state.ball.vx < 0) {
    return [];
  }

  return [{ type: "mousemove", x: 0, y: currentY + distance / 20 }];
}