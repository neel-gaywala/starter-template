/* eslint-disable @typescript-eslint/no-explicit-any */
export type IconType =
  | "more"
  | "moreArrows"
  | "actionMenu"
  | "user"
  | "upload"
  | "menu"
  | "close"
  | "radioOff"
  | "radioOn"
  | "checkedOff"
  | "checkedOn"
  | "arrowRight"
  | "arrowLeft"
  | "arrowDown"
  | "arrowUp"
  | "left"
  | "right"
  | "info"
  | "infoOutline"
  | "exclamation"
  | "delete"
  | "drag"
  | "shield"
  | "details"
  | "assume"
  | "plus"
  | "outlinePlus"
  | "number"
  | "currency"
  | "percentage"
  | "image"
  | "save"
  | "warning"
  | "clock"
  | "pdf"
  | "lock"
  | "lockOpen"
  | "edit"
  | "calendar"
  | "eyeClose"
  | "eyeOpen"
  | "book"
  | "heart"
  | "star"
  | "check"
  | "done"
  | "share"
  | "remove"
  | "copy"
  | "confetti"
  | "attachment"
  | "family"
  | "openInNew"
  | "provider"
  | "hospital"
  | "otherProvider"
  | "pill"
  | "allergy"
  | "building"
  | "password"
  | "insurance"
  | "broker"
  | "bank"
  | "card"
  | "pinCode"
  | "rotateLeft"
  | "rotateRight"
  | "document"
  | "warningBold"
  | "cancel"
  | "search"
  | "plusCircle"
  | "refresh"
  | "checkCircle"
  | "fileCheck"
  | "handPoint"
  | "government"
  | "databaseDollar"
  | "fileShield"
  | "sackDollar"
  | "shieldCheck"
  | "accountManagement"
  | "route";

export type IconSize =
  | "xxs"
  | "mxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl"
  | "10xl"
  | "160px";

export type InputIcon = {
  show?: boolean;
  type?: IconType;
  className?: string;
  onClick?: () => void;
  size?: IconSize;
};

export interface SelectOptions {
  fontSize?: number;
  fontWeight?: string;
  color?: string;
}

export interface FilterOptions {
  label: string;
  value: any;
  data: any;
}
