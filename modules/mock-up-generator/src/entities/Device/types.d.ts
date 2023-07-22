export interface WatchSettings {
  isStrap?: boolean;
}

export interface PhoneSettings {
  isSystemBar?: boolean;
  theme?: "dark" | "light";
}

export interface SettingListItem {
  key: string;
  type: "switch" | "variants";
  variants?: string[];
  label: string;
}
