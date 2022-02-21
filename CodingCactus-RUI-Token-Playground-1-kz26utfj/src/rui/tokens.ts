import { css } from '@emotion/react';
import { ROOT_THEME_CLASS } from './themes';

export const baseTokens = {
  borderRadius1: ['--border-radius-1', '1px'],
  borderRadius2: ['--border-radius-2', '2px'],
  borderRadius4: ['--border-radius-4', '4px'],
  borderRadius8: ['--border-radius-8', '8px'],
  borderRadius16: ['--border-radius-16', '16px'],

  /* aliases */
  borderRadiusDefault: ['--border-radius-default', 'var(--border-radius-8)'],
  borderRadiusRound: ['--border-radius-round', '1028px'],

  /* SPACING */
  space2: ['--space-2', '2px'],
  space4: ['--space-4', '4px'],
  space8: ['--space-8', '8px'],
  space12: ['--space-12', '12px'],
  space16: ['--space-16', '16px'],
  space24: ['--space-24', '24px'],
  space32: ['--space-32', '32px'],
  space48: ['--space-48', '48px'],
  space64: ['--space-64', '64px'],
  space128: ['--space-128', '128px'],
  space256: ['--space-256', '256px'],

  /* aliases */
  spaceDefault: ['--space-default', 'var(--space-8)'],

  /* SHADOW */
  shadow1: ['--shadow-1', '0px 4px 8px 0px rgba(2, 2, 3, 0.16)'],
  shadow2: ['--shadow-2', '0px 8px 16px 0px rgba(2, 2, 3, 0.32)'],
  shadow3: ['--shadow-3', '0px 16px 32px 0px rgba(2, 2, 3, 0.48)'],

  /* aliases */
  shadowDefault: ['--shadow-default', 'var(--shadow-1)'],

  /* FONT FAMILIES */
  fontFamilyDefault: ['--font-family-default', "'IBM Plex Sans', sans-serif"],
  fontFamilyCode: ['--font-family-code', "'IBM Plex Mono', monospace"],

  /* FONT SIZE + LINE HEIGHT */
  fontSizeSmall: ['--font-size-small', '12px'],
  lineHeightSmall: ['--line-height-small', '1.5'],

  fontSizeDefault: ['--font-size-default', '14px'],
  lineHeightDefault: ['--line-height-default', '1.6'],

  fontSizeSubheadDefault: ['--font-size-subhead-default', '16px'],
  lineHeightSubheadDefault: ['--line-height-subhead-default', '1.375'],

  fontSizeSubheadBig: ['--font-size-subhead-big', '20px'],
  lineHeightSubheadBig: ['--line-height-subhead-big', '1.2'],

  fontSizeHeaderDefault: ['--font-size-header-default', '24px'],
  lineHeightHeaderDefault: ['--line-height-header-default', '1'],

  fontSizeHeaderBig: ['--font-size-header-big', '32px'],
  lineHeightHeaderBig: ['--line-height-header-big', '1'],

  /* FONT WEIGHT */
  fontWeightRegular: ['--font-weight-regular', '400'],
  fontWeightMedium: ['--font-weight-medium', '500'],
  fontWeightBold: ['--font-weight-bold', '600'],

  /* EXTRAS */
  borderWidthDefault: ['--border-width-default', '1px'],
  singleLine: ['--single-line', '1'],

  black: ['--black', '#0E1525'],
  white: ['--white', '#FCFCFC'],
} as const;

// prettier-ignore
export const themeTokens = {
  /* BACKGROUND */
  backgroundRoot: ['--background-root', '#000', '#EBECED'],
  backgroundDefault: ['--background-default', '#111', '#FCFCFC'],
  backgroundHigher: ['--background-higher', '#222', '#F0F1F2'],
  backgroundHighest: ['--background-highest', '#333', '#E4E5E6'],

  backgroundOverlay: ['--background-overlay', '#222A0', '#F0F1F2A0'],

  /* FOREGROUND */
  foregroundDefault: ['--foreground-default', '#F5F9FC', '#07580A'],
  foregroundDimmer: ['--foreground-dimmer', '#C2C8CC', '#3D8047'],
  foregroundDimmest: ['--foreground-dimmest', '#9DA2A6', '#5CAF66'],

  /* OUTLINE */
  outlineDefault: ['--outline-default', '#60686C', '#A0C8AC'],
  outlineDefault25: ['--outline-default-25', '#60686C40', '#A0C8AC40'],
  outlineDimmer: ['--outline-dimmer', '#5F575A', '#B8C2BA'],
  outlineDimmest: ['--outline-dimmest', '#464549', '#DEE5D9'],

  /* ACCENTS */

  /* primary */
  accentPrimaryStrongest: ['--accent-primary-strongest', '#989898', '#006D30'],
  accentPrimaryStronger: ['--accent-primary-stronger', '#898989', '#008D40'],
  accentPrimaryDefault: ['--accent-primary-default', '#ABABAB', '#00cc77'],
  accentPrimaryDimmer: ['--accent-primary-dimmer', '#454545', '#85FE8F'],
  accentPrimaryDimmest: ['--accent-primary-dimmest', '#343434', '#B7FABF'],

  /* positive */
  accentPositiveStrongest: [ '--accent-positive-strongest', '#9FDF6A', '#0C4516' ],
  accentPositiveStronger: ['--accent-positive-stronger', '#86CF58', '#0F7A21'],
  accentPositiveDefault: ['--accent-positive-default', '#7FB448', '#2FC448'],
  accentPositiveDimmer: ['--accent-positive-dimmer', '#66AF38', '#76DB87'],
  accentPositiveDimmest: ['--accent-positive-dimmest', '#4F9F2A', '#A8F0B4'],

  /* negative */
  accentNegativeStrongest: [ '--accent-negative-strongest', '#BF5F5F', '#520F0F' ],
  accentNegativeStronger: ['--accent-negative-stronger', '#AF4545', '#8A0A0A'],
  accentNegativeDefault: ['--accent-negative-default', '#923F3F', '#F23F3F'],
  accentNegativeDimmer: ['--accent-negative-dimmer', '#8F2828', '#FF8585'],
  accentNegativeDimmest: ['--accent-negative-dimmest', '#771A1A', '#FFC7C7'],
} as const;

export const secondaryTokens = {
  redDimmest: ['--accent-red-dimmest', '#6E0000', '#FFC7C7'],
  redDimmer: ['--accent-red-dimmer', '#A60000', '#FF8585'],
  redDefault: ['--accent-red-default', '#E50000', '#E50000'],
  redStronger: ['--accent-red-stronger', '#FF8585', '#A60000'],
  redStrongest: ['--accent-red-strongest', '#FFC7C7', '#6E0000'],

  orangeDimmest: ['--accent-orange-dimmest', '#753B00', '#FFD9B2'],
  orangeDimmer: ['--accent-orange-dimmer', '#9C4E00', '#FFC285'],
  orangeDefault: ['--accent-orange-default', '#D96D00', '#D96D00'],
  orangeStronger: ['--accent-orange-stronger', '#FFC285', '#9C4E00'],
  orangeStrongest: ['--accent-orange-strongest', '#FFD9B2', '#753B00'],

  yellowDimmest: ['--accent-yellow-dimmest', '#756200', '#FFF2B2'],
  yellowDimmer: ['--accent-yellow-dimmer', '#A68A00', '#FFEA7F'],
  yellowDefault: ['--accent-yellow-default', '#CCAD14', '#CCAD14'],
  yellowStronger: ['--accent-yellow-stronger', '#FFEA7F', '#A68A00'],
  yellowStrongest: ['--accent-yellow-strongest', '#FFF2B2', '#756200'],

  greenDimmest: ['--accent-green-dimmest', '#00540E', '#B2FFBF'],
  greenDimmer: ['--accent-green-dimmer', '#007814', '#66FF7F'],
  greenDefault: ['--accent-green-default', '#36B24A', '#36B24A'],
  greenStronger: ['--accent-green-stronger', '#66FF7F', '#007814'],
  greenStrongest: ['--accent-green-strongest', '#B2FFBF', '#00540E'],

  tealDimmest: ['--accent-teal-dimmest', '#005B6E', '#BFF4FF'],
  tealDimmer: ['--accent-teal-dimmer', '#007F99', '#7FEAFF'],
  tealDefault: ['--accent-teal-default', '#3DB4CC', '#3DB4CC'],
  tealStronger: ['--accent-teal-stronger', '#7FEAFF', '#007F99'],
  tealStrongest: ['--accent-teal-strongest', '#BFF4FF', '#005B6E'],

  blueDimmest: ['--accent-blue-dimmest', '#004D99', '#B2D9FF'],
  blueDimmer: ['--accent-blue-dimmer', '#005EBD', '#7FBFFF'],
  blueDefault: ['--accent-blue-default', '#2E8AE5', '#2E8AE5'],
  blueStronger: ['--accent-blue-stronger', '#7FBFFF', '#005EBD'],
  blueStrongest: ['--accent-blue-strongest', '#B2D9FF', '#004D99'],

  blurpleDimmest: ['--accent-blurple-dimmest', '#422F9E', '#CEC4FF'],
  blurpleDimmer: ['--accent-blurple-dimmer', '#563CD6', '#A18FFF'],
  blurpleDefault: ['--accent-blurple-default', '#7559FF', '#7559FF'],
  blurpleStronger: ['--accent-blurple-stronger', '#A18FFF', '#563CD6'],
  blurpleStrongest: ['--accent-blurple-strongest', '#CEC4FF', '#422F9E'],

  purpleDimmest: ['--accent-purple-dimmest', '#6C32A6', '#E2C4FF'],
  purpleDimmer: ['--accent-purple-dimmer', '#9140E3', '#C78FFF'],
  purpleDefault: ['--accent-purple-default', '#A64DFF', '#A64DFF'],
  purpleStronger: ['--accent-purple-stronger', '#C78FFF', '#9140E3'],
  purpleStrongest: ['--accent-purple-strongest', '#E2C4FF', '#6C32A6'],

  magentaDimmest: ['--accent-magenta-dimmest', '#802680', '#FFC2FF'],
  magentaDimmer: ['--accent-magenta-dimmer', '#B031B0', '#FF8AFF'],
  magentaDefault: ['--accent-magenta-default', '#E55AE5', '#E55AE5'],
  magentaStronger: ['--accent-magenta-stronger', '#FF8AFF', '#B0319B'],
  magentaStrongest: ['--accent-magenta-strongest', '#FFC2FF', '#802680'],

  pinkDimmest: ['--accent-pink-dimmest', '#802662', '#FFC2EB'],
  pinkDimmer: ['--accent-pink-dimmer', '#B03186', '#FF8AD8'],
  pinkDefault: ['--accent-pink-default', '#E545B0', '#E545B0'],
  pinkStronger: ['--accent-pink-stronger', '#FF8AD8', '#B03186'],
  pinkStrongest: ['--accent-pink-strongest', '#FFC2EB', '#802662'],

  greyDimmest: ['--accent-grey-dimmest', '#595959', '#BFBFBF'],
  greyDimmer: ['--accent-grey-dimmer', '#666666', '#999999'],
  greyDefault: ['--accent-grey-default', '#808080', '#808080'],
  greyStronger: ['--accent-grey-stronger', '#999999', '#666666'],
  greyStrongest: ['--accent-grey-strongest', '#BFBFBF', '#595959'],
};

const allTokens = {
  ...baseTokens,
  ...themeTokens,
  ...secondaryTokens,
} as const;

export const vars: {
  [K in keyof typeof allTokens]: any;
} = mapObject(allTokens, (key, [cssVar]) => [key, `var(${cssVar})`]);

export const globalStyles = {
  [`.${ROOT_THEME_CLASS}, :root`]: mapObject(
    baseTokens,
    (_key, [cssVar, value]) => [cssVar, value],
  ),

  // Theme tokens
  [`.${ROOT_THEME_CLASS}.dark`]: mapObject(
    { ...themeTokens, ...secondaryTokens },
    (_key, [cssVar, dark, _light]) => [cssVar, dark],
  ),
  [`.${ROOT_THEME_CLASS}.light`]: mapObject(
    { ...themeTokens, ...secondaryTokens },
    (_key, [cssVar, _dark, light]) => [cssVar, light],
  ),
} as const;

function mapObject<
  K1 extends string | number,
  V1,
  K2 extends string | number,
  V2
>(
  obj: Record<K1, V1>,
  fn: (key: K1, value: V1) => [K2, V2] | Generator<[K2, V2], void, void>,
): Record<K2, V2> {
  const obj2: Partial<Record<K2, V2>> = {};
  for (const k1 in obj) {
    const result = fn(k1, obj[k1]);
    if (Array.isArray(result)) {
      obj2[result[0]] = result[1];
    } else {
      for (const [k2, v2] of result) {
        obj2[k2] = v2;
      }
    }
  }

  return obj2 as Record<K2, V2>;
}

export type Space = 0 | 2 | 4 | 8 | 12 | 16 | 24 | 32 | 48 | 64 | 128 | 256;
const toSpace = (space: Space) => `var(--space-${space})`;

type BorderRadius = 1 | 2 | 4 | 8 | 16 | 'full';
const toBorderRadius = (radius: BorderRadius) =>
  radius === 'full' ? '50%' : `var(--border-radius-${radius})`;

export type Shadow = 1 | 2 | 3;
const toShadow = (shadow: Shadow) => `var(--shadow-${shadow})`;

// prettier-ignore
export const rcss = {
  /** Padding (same value on all 4 sides) */
  p: (space: Space) => css({ padding: toSpace(space) }),
  /** Horizontal padding (x-axis: left and right) */
  px: (space: Space) => css({ paddingLeft: toSpace(space), paddingRight: toSpace(space) }),
  /** Vertical padding (y-axis: top and bottom) */
  py: (space: Space) => css({ paddingTop: toSpace(space), paddingBottom: toSpace(space) }),
  /** Padding top */
  pt: (space: Space) => css({ paddingTop: toSpace(space) }),
  /** Padding bottom */
  pb: (space: Space) => css({ paddingBottom: toSpace(space) }),
  /** Padding left */
  pl: (space: Space) => css({ paddingLeft: toSpace(space) }),
  /** Padding right */
  pr: (space: Space) => css({ paddingRight: toSpace(space) }),

  shadow: (shadow: Shadow) => css({ boxShadow: toShadow(shadow) }),

  /** Margin (same value on all 4 sides) */
  m: (space: Space) => css({ margin: toSpace(space) }),
  /** Horizontal margin (x-axis: left and right) */
  mx: (space: Space) => css({ marginLeft: toSpace(space), marginRight: toSpace(space) }),
  /** Vertical margin (y-axis: top and bottom) */
  my: (space: Space) => css({ marginTop: toSpace(space), marginBottom: toSpace(space) }),
  /** Margin top */
  mt: (space: Space) => css({ marginTop: toSpace(space) }),
  /** Margin bottom */
  mb: (space: Space) => css({ marginBottom: toSpace(space) }),
  /** Margin left */
  ml: (space: Space) => css({ marginLeft: toSpace(space) }),
  /** Margin right */
  mr: (space: Space) => css({ marginRight: toSpace(space) }),

  position: {
    static: () => css({ position: 'static' }),
    relative: () => css({ position: 'relative' }),
    absolute: () => css({ position: 'absolute' }),
    fixed: () => css({ position: 'fixed' }),
    sticky: () => css({ position: 'sticky' }),
  },

  flex: {
    row: css({ flexDirection: 'row' }),
    column: css({ flexDirection: 'column' }),
    rowReverse: css({ flexDirection: 'row-reverse' }),
    columnReverse: css({ flexDirection: 'column-reverse' }),
    /**
     * Makes the element grow (but not shrink) into the available free space of the parent.
     *
     * @param flex The free space will be divided proportionally between children
     * depending on the `flexGrow` value. If you don't know what to put here use 1.
     */
    grow: (flexGrow: number) => css({ flexGrow }),
    /**
     * Makes the element grow and shrink to fill the available free space of the parent
     *
     * @param flex The free space will be divided proportionally between children
     * depending on the `flex` value. If you don't know what to put here use 1.
     */
    growAndShrink: (flex: number) => css({ flexGrow: flex, flexShrink: flex }),

    /**
     * Makes the child elements wrap from top to bottom if they run out of room on the flex axis.
     */
    wrap: css({flexWrap: 'wrap'}),

    /**
     * Makes the child elements wrap from bottom to top if they run out of room on the flex axis.
     */
    wrapReverse: css({flexWrap: 'wrap-reverse'}),
  },

  /**
   * Center both axes in one command.
   */
  center: css({alignItems: 'center', justifyContent: 'center'}),
  /**
   * If flex-direction is column (default on `View`), this controls
   * alignment of all items on the horizontal x-axis. For rows, it controls
   * alignment on vertical y-axix.
   */
  align: {
    start: css({ alignItems: 'flex-start' }),
    center: css({ alignItems: 'center' }),
    stretch: css({ alignItems: 'stretch' }),
    baseline: css({ alignItems: 'baseline' }),
    end: css({ alignItems: 'flex-end' }),
  },
  /**
   * If flex-direction is column (default on `View`), this controls
   * alignment of all items on the vertical y-axis. For rows, it controls
   * alignment on horizontal x-axix.
   */
  justify: {
    start: css({ justifyContent: 'flex-start' }),
    center: css({ justifyContent: 'center' }),
    end: css({ justifyContent: 'flex-end' }),
    spaceBetween: css({ justifyContent: 'space-between' }),
    spaceAround: css({ justifyContent: 'space-around' }),
    spaceEvenly: css({ justifyContent: 'space-evenly' }),
  },

  // Safari does not implement gap for flexbox until Safari 14.1
  // and the potential polyfills add too much CSS complexity.
  // If you are reading this in 2022, please consider replacing
  // the nested selectors with `gap`.

  /**
   * Lays our children in a row with a gap between them by adding
   * margin to the child elements (so it works in Safari, but can
   * potentially break if the children define their own margin).
   */
  rowWithGap: (space: Space) => css({
    flexDirection: 'row',
    '& > *': { marginRight: toSpace(space), },
    '& > *:last-child': { marginRight: 0, },
  }),

  /**
   * Lays our children in a column with a gap between them by adding
   * margin to the child elements (so it works in Safari, but can
   * potentially break if the children define their own margin).
   */
  colWithGap: (space: Space) => css({
    flexDirection: 'column',
    '& > *': { marginBottom: toSpace(space), },
    '& > *:last-child': { marginBottom: 0, },
  }),

  borderRadius: (...radius: [BorderRadius] | [BorderRadius, BorderRadius, BorderRadius, BorderRadius]) => {
    return css({
      borderRadius: radius.map(toBorderRadius).join(' ')
    });
  },

  font: {
    code: css({ fontFamily: vars.fontFamilyCode }),
  },

  textAlign: {
    left: css({textAlign: 'left'}),
    center: css({textAlign: 'center'}),
    right: css({textAlign: 'right'}),
  },

  /**
   * Sets the foreground color.
   */
  color: {
  ...mapObject(themeTokens, (name, [token]) => [
    name,
    css({
      color: `var(${token})`,
    }),
  ]),
  ...mapObject(secondaryTokens, (name, [token]) => [
    name,
    css({
      color: `var(${token})`,
    }),
  ]),
},

  /**
   * Sets the background color.
   */
  backgroundColor: {
  ...mapObject(themeTokens, (name, [token]) => [
    name,
    css({
      backgroundColor: `var(${token})`,
    }),
  ]),
  ...mapObject(secondaryTokens, (name, [token]) => [
    name,
    css({
      backgroundColor: `var(${token})`,
    }),
  ]),
},

  width: (width: number | string) => css({ width }),
  height: (height: number | string) => css({ height }),
  maxWidth: (maxWidth: number | string) => css({ maxWidth }),
  maxHeight: (maxHeight: number | string ) => css({ maxHeight }),
  minWidth: (minWidth: number | string) => css({ minWidth }),
  minHeight: (minHeight: number | string ) => css({ minHeight }),
};
