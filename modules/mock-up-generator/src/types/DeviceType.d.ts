export type DeviceType = "phone" | "watch" | "tablet";

export interface DeviceLibraryItem {
  name: string;
  width: number;
  height: number;
  type: DeviceType;
  frameImages: {
    default: string;
    withSystemBarLightTheme?: string;
    withSystemBarDarkTheme?: string;
    withStrap?: string;
  };
  screen: {
    width: number;
    height: number;
  };
  paddingsInPercents: {
    top: number;
    left: number;
    bottom: number;
    right: number;
  };
  borderRadius?: number;
}
