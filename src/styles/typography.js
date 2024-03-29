import { Platform } from 'react-native';
import { scaleFont } from './mixins';

// FONT FAMILY
export const FONT_FAMILY_REGULAR = 'OpenSans-Regular';
export const FONT_FAMILY_BOLD = 'OpenSans-Bold';
export const ProximaNovaSemibold = (Platform.OS == 'android') ? "MarkSimonson-ProximaNovaSemibold-webfont" : 'ProximaNova-Semibold';
export const ProximaNovaFont = (Platform.OS == 'android') ? "ProximaNovaFont" : 'ProximaNova-Regular';
export const ProximaNovaFontbold = (Platform.OS == 'android') ? "ProximaNovaFontbold" : 'ProximaNova-Bold';


// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '700';

// FONT SIZE
export const FONT_SIZE_24 = scaleFont(24);
export const FONT_SIZE_22 = scaleFont(22);
export const FONT_SIZE_20 = scaleFont(20);
export const FONT_SIZE_18 = scaleFont(18);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);
export const FONT_SIZE_10 = scaleFont(10);
export const FONT_SIZE_8 = scaleFont(8);


// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT STYLE
export const FONT_REGULAR = {
    // fontFamily: FONT_FAMILY_REGULAR,
    fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD = {
    // fontFamily: FONT_FAMILY_BOLD,
    fontWeight: FONT_WEIGHT_BOLD,
};
