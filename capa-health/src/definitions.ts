// @ts-ignore
declare module "@capacitor/core" {
  interface PluginRegistry {
    CapaHealth: CapaHealthPlugin;
  }
}

export interface CapaHealthPluginIsAvailableResult  {
  /** true if Face ID or Touch ID is available */
  value: boolean;
}

export interface CapaHealthPluginAuthOptions {
  /** String to display authentication reason */
  reason?: string;
}

export interface CapaHealthPlugin {
  /**
   * check if Face ID or Touch ID is available
   * @returns  {Promise}
   * @resolve {value: boolean}
   * @rejects PluginResultError
   */
  isAvailable(): Promise<CapaHealthPluginIsAvailableResult>;
  /**
   * Displays the authentication screen
   * @returns  {Promise}
   * @resolve void
   * @rejects PluginResultError
   */
  auth(options?: CapaHealthPluginAuthOptions): Promise<void>;
}
