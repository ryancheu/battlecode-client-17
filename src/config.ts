/**
 * All of the top-level tunable options for the game client.
 */
export interface Config {
  /**
   * The version of the game we're simulating.
   */
  readonly gameVersion: string;

  /**
   * Whether to try to run the game in full-screen
   */
  readonly fullscreen: boolean;

  /**
   * Dimensions of the canvas
   */
  readonly width: number;
  readonly height: number;

  /**
   * Turns per second.
   * 
   * (DISTINCT from fps!)
   */
  readonly defaultTPS: number;

  /**
   * Whether or not to interpolate between frames.
   */
  readonly interpolate: boolean;

  /**
   * The url to listen for websocket data on, if any.
   */
  readonly websocketURL: string | null;

  /**
   * How often to poll the server via websocket, in ms.
   */
  readonly pollEvery: number;
}

/**
 * Handle setting up any values that the user doesn't set.
 */
export function defaults(supplied?: any): Config {
  supplied = supplied || {};
  return {
    gameVersion: supplied.gameVersion || "ANY",
    fullscreen: supplied.fullscreen || false,
    width: supplied.width || 600,
    height: supplied.height || 600,
    defaultTPS: supplied.defaultTPS || 20,
    interpolate: supplied.interpolate || true,
    websocketURL: supplied.websocketURL || null,
    pollEvery: supplied.pollEvery || 500
  };
}
