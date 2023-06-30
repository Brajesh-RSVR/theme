function stepToRem(step) {
  return `${step / 4}rem`;
}
function step(step) {
  return { [step]: stepToRem(step) };
}
const makeType = (name, small, large) => ({
  [`.type-${name}`]: { ...small, ...(large ? { '@screen lg': large } : {}) },
});
const makeTypeSet = (name, attributes) => {
  const set = {};
  attributes.forEach((attr, index) => Object.assign(set, makeType(`${name}-${index + 1}`, ...attr)));
  return set;
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  purge: false,
  darkMode: false,
  theme: {
    container: {
      padding: {
        DEFAULT: '1.5rem',
        md: '4.5rem', // >= 768px padding of 80px
        '2xl': '12.5rem', // >= 1440px padding of 200px
      },
    },
    colors: {
      white: {
        DEFAULT: '#FFFFFF',
        shade: 'rgba(255, 255, 255, 0.7)',
      },
      black: {
        DEFAULT: '#000',
        darkZeroPercent: 'rgba(0, 0, 0, 0.0)',
        darkFourPercent: 'rgba(0, 0, 0, 0.4)',
      },
      blue: {
        light: '#b3a8de',
        100: '#F4F5FE',
        200: '#D5CCFB',
        300: '#AC99F6',
        DEFAULT: '#2F00EA',
        500: '#2F00EA',
        600: '#AC99F6',
      },
      pink: {
        DEFAULT: '#FF264D',
      },
      gray: {
        mineshaft: '#2C2C2C',
        dark: '#C4C4C4',
        DEFAULT: '#EDEBEE',
        lightshade: '#FBFBFB',
        light: '#F4f4f4',
        100: '#FAFAFA',
        200: '#E7E7E7',
        400: '#565656',
        500: '#2C2C2C',
      },
      neutral: {
        100: '#F4F4F4',
        200: '#D5D5D5',
        400: '#565656',
      },
      red: {
        DEFAULT: '#FF264D',
        90: '#FFF5F7',
        light: '#FF868D',
        100: '#FFF4F6',
        500: '#99172E',
      },
      transparent: {
        DEFAULT: 'transparent',
      },
      green: {
        DEFAULT: '#489F76',
        saladLight: '#EDF5F1',
        salad: '#DAECE4',
        100: '#E8F5ED',
        500: '#489F76',
        darkGreen: '#17994B',
        shadeGreen: '#17994B',
      },
      success: {
        100: '#E8F5ED',
        200: '#D1EBDB',
        300: '#A2D6B7',
        400: '#45AD6F',
        500: '#17994B',
      },
      orange: {
        100: '#FFF6F2',
        400: '#FF9D74',
        500: '#FF8551',
        510: '#F17637',
        DEFAULT: '#FF8551',
        WARNING: '#FCF1E4',
      },
    },
    borderRadius: {
      none: '0',
      DEFAULT: '10px',
      sm: '0.40rem',
      md: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      '4xl': '2rem',
      full: '9999px',
    },
    fontFamily: {
      source: ['Source Sans Pro', 'sans-serif'],
      grotesk: ['HK Grotesk'],
    },
    extend: {
      height: {
        ...step(3.5),
        ...step(4.5),
        ...step(15),
        ...step(38),
        ...step(42),
        ...step(120),
        ...step(112),
        ...step(125),
        ...step(128),
        ...step(132),
        ...step(152),
        ...step(160),
        ...step(136),
        ...step(165),
        ...step(176),
        ...step(216),
        '8/5': `${(8 / 5) * 100}%`,
        banner: '449px',
        fit: 'fit-content',
      },
      width: {
        ...step(3.5),
        ...step(4.5),
        ...step(33),
        ...step(50),
        ...step(54),
        ...step(60),
        ...step(84),
        ...step(94),
        ...step(100),
        ...step(102),
        ...step(112),
        ...step(122),
        ...step(136),
        ...step(144),
        ...step(152),
        ...step(176),
        ...step(228),
        ...step(232),
        '1/8': `${(1 / 8) * 100}%`,
        '3/8': `${(3 / 8) * 100}%`,
        '5/8': `${(5 / 8) * 100}%`,
        '7/8': `${(7 / 8) * 100}%`,
        '29/100': `${(29 / 100) * 100}%`,
        '3/20': `${(3 / 20) * 100}%`,
        '7/10': `${(7 / 10) * 100}%`,
        '9/10': `${(9 / 10) * 100}%`,
        '9/20': `${(9 / 20) * 100}%`,
        standard: '92vw',
        fit: 'fit-content',
      },
      boxShadow: {
        harsh: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        greyLight: '0px 2px 4px rgba(81, 81, 81, 0.1), 0px 12px 32px rgba(44, 44, 44, 0.05)',
        blueMedium:
          '0px 12px 24px rgba(47, 30, 116, 0.05), 0px 24px 60px rgba(21, 0, 105, 0.05), 0px 2px 4px rgba(37, 0, 186, 0.1)',
        blueLight: '0px 0px 4px rgba(47, 0, 234, 0.1), 0px 12px 32px rgba(47, 0, 234, 0.05)',
        blueUltralight: '0px 2px 2px rgba(32, 0, 161, 0.05), 0px 12px 8px rgba(44, 44, 44, 0.02)',
      },
      padding: {
        ...step(152 / 2),
        ...step(15),
        ...step(18),
        ...step(112),
        ...step(120),
        ...step(128),
      },
      inset: {
        ...step(-(152 / 2)),
        ...step(44),
      },
      minHeight: {
        'screen-3': '300vh',
      },
      margin: {
        ...step(-18),
        ...step(152 / 2),
        ...step(15),
        ...step(18),
        18: '18px',
        200: '200px',
      },
      maxWidth: {
        ...step(52),
        ...step(75),
      },
      maxHeight: theme => ({
        ...theme('spacing'),
        70: '70vh',
      }),
      backgroundImage: theme => ({
        referral: "url('../pages/referral/assets/visual.png')",
      }),
      minWidth: {
        ...step(48),
        ...step(62),
        ...step(144),
      },
      fontSize: {
        none: '0px',
        '2xs': 10 / 16 + 'rem',
        '5xl': 40 / 16 + 'rem',
        22: ['22px', { lineHeight: '26px' }],
        26: ['26px', { lineHeight: '30px' }],
        32: ['32px', { lineHeight: '40px' }],
        40: ['40px', { lineHeight: '46px' }],
        48: ['48px', { lineHeight: '60px' }],
        64: ['64px', { lineHeight: '78px' }],
      },
      borderRadius: {
        xs: '0.25rem',
      },
      //my custom grid
      //@RSVR
      gridTemplateColumns: {
        13: 'repeat(auto-fit, minmax(14rem, 1fr))',
      },
    },

    screens: {
      xxs: '375px',
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1800px',
      '4xl': '2400px',
      'h-md': { raw: '(max-height: 828px)' },
      'h-sm': { raw: '(max-height: 640px)' },
      'wide-small': { raw: '(min-width: 1024px) and (max-height: 828px)' },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      opacity: ['group-hover', 'group-focus'],
      display: ['group-hover'],
      borderWidth: ['last'],
      borderStyle: ['hover'],
    },
  },
  extend: {
    transitionProperty: {
      border: 'border',
    },
  },
  // corePlugins: {
  //   container: false
  // },
  plugins: [
    function ({ addComponents, addUtilities }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          // '@screen sm': { //  (640px)
          // 	maxWidth: '640px',
          // },
          // '@screen md': { //  (768px)
          // 	maxWidth: '768px',
          // },
          '@screen lg': {
            // (1024px) + left and right padding of 80px
            maxWidth: 1024 + 80 * 2 + 'px',
          },
          '@screen xl': {
            // (1280px) + left and right padding of 80px
            maxWidth: 1280 + 80 * 2 + 'px',
          },
          '@screen 2xl': {
            // (1536px) + left and right padding of 200px
            maxWidth: 1536 + 200 * 2 + 'px',
          },
        },
        '.2xl:container': {
          maxWidth: '100%',
          '@screen 2xl': {
            //  (1536px)
            maxWidth: '1536px',
          },
        },
      });

      addUtilities({
        /* Types */

        /* Display type set (usage: .type-display-[1...4]) */
        ...makeTypeSet('display', [
          [
            { fontSize: '48px', lineHeight: '56px', fontWeight: 800 },
            { fontSize: '64px', lineHeight: '72px' },
          ],
          [
            { fontSize: '40px', lineHeight: '48px', fontWeight: 800 },
            { fontSize: '48px', lineHeight: '56px' },
          ],
          [
            { fontSize: '32px', lineHeight: '40px', fontWeight: 700 },
            { fontSize: '40px', lineHeight: '48px' },
          ],
          [
            { fontSize: '28px', lineHeight: '32px', fontWeight: 700 },
            { fontSize: '32px', lineHeight: '40px' },
          ],
        ]),

        /* Heading type set (usage: .type-heading-[1...3]) */
        ...makeTypeSet('heading', [
          [
            { fontSize: '24px', lineHeight: '32px', fontWeight: 700 },
            { fontSize: '26px', lineHeight: '30px' },
          ],
          [
            { fontSize: '20px', lineHeight: '28px', fontWeight: 700 },
            { fontSize: '22px', lineHeight: '26px' },
          ],
          [{ fontSize: '16px', lineHeight: '26px', fontWeight: 700 }, { lineHeight: '20px' }],
        ]),

        /* Body type set (usage: .type-body-[1...4]) */
        ...makeTypeSet('body', [
          [{ fontSize: '18px', lineHeight: '26px', fontWeight: 500 }],
          [{ fontSize: '16px', lineHeight: '24px', fontWeight: 500 }],
          [{ fontSize: '14px', lineHeight: '20px', fontWeight: 500 }, { lineHeight: '18px' }],
          [{ fontSize: '12px', lineHeight: '16px', fontWeight: 500 }],
        ]),

        /* Button type set (usage: .type-button-[1...3]) */
        ...makeTypeSet('button', [
          [{ fontSize: '16px', lineHeight: '20px', fontWeight: 700 }],
          [{ fontSize: '14px', lineHeight: '18px', fontWeight: 700 }],
          [{ fontSize: '14px', lineHeight: '16px', fontWeight: 700 }],
        ]),
      });
    },
  ],
};
