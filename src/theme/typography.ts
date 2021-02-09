import { StyleProp, TextStyle } from "react-native";

export const FONT_12: StyleProp<TextStyle> = { fontSize: 12 };
export const FONT_14: StyleProp<TextStyle> = { fontSize: 14 };
export const FONT_16: StyleProp<TextStyle> = { fontSize: 16 };
export const FONT_18: StyleProp<TextStyle> = { fontSize: 18 };
export const FONT_24: StyleProp<TextStyle> = { fontSize: 24 };
export const FONT_28: StyleProp<TextStyle> = { fontSize: 28 };
export const FONT_32: StyleProp<TextStyle> = { fontSize: 32 };
export const FONT_36: StyleProp<TextStyle> = { fontSize: 36 };

export const FONT_WEIGHT_700: StyleProp<TextStyle> = { fontWeight: '700' };
export const FONT_WEIGHT_600: StyleProp<TextStyle> = { fontWeight: '600' };
export const FONT_WEIGHT_500: StyleProp<TextStyle> = { fontWeight: '500' };
export const FONT_WEIGHT_400: StyleProp<TextStyle> = { fontWeight: '400' };
export const FONT_WEIGHT_200: StyleProp<TextStyle> = { fontWeight: '200' };

export const ALIGN_CENTER: StyleProp<TextStyle> = { textAlign: 'center' };

export const HEADER: StyleProp<TextStyle> = { ...FONT_32, ...FONT_WEIGHT_700 };
export const SUB_HEADER: StyleProp<TextStyle> = { ...FONT_18, ...FONT_WEIGHT_600 };