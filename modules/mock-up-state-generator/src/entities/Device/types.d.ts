export interface WatchSettings {
  isBW?: boolean;
  isStrap?: boolean;
}

export interface PhoneSettings {
  isBW?: boolean;
  isSystemBar?: boolean;
  theme?: "dark" | "light";
}

export interface TabletSettings {
  isBW?: boolean;
  isSystemBar?: boolean;
  theme?: "dark" | "light";
}

export interface SettingListItem {
  key: string;
  type: "switch" | "variants";
  variants?: string[];
  label: string;
}
