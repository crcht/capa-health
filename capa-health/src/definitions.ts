// @ts-ignore
declare module "@capacitor/core" {
  interface PluginRegistry {
    CapaHealth: CapaHealthPlugin;
  }
}

export interface CapaHealthPlugin {
  /**
   * check if Face ID or Touch ID is available
   * @returns  {Promise}
   * @resolve any
   * @rejects PluginResultError
   */
  getDistance(): Promise<any>;
  /**
   * Displays the authentication screen
   * @returns  {Promise}
   * @resolve any
   * @rejects PluginResultError
   */
  authorize(): Promise<any>;
}
