import { PropsWithChildren } from 'react';

export interface CardContainerProps {
  paddingY?: number;
  paddingX?: number;
  shadowY?: number;
  shadowX?: number;
  shadowBlur?: number;
  shadowColor?: string;
  shadowColorVal?: number;
  cardRadius?: number;
  backgroundImageURI?: string;
  color?: string;
  alphaValue?: number;
}

export const CardContainer = ({
  paddingY = 2,
  paddingX = 2,
  children,
  shadowY = 5,
  shadowX = 5,
  shadowBlur = 5,
  shadowColor = '000000',
  shadowColorVal = 0.4,
  cardRadius = 2,
  backgroundImageURI,
  color,
  alphaValue,
}: PropsWithChildren<CardContainerProps>) => {
  function hexToRgb(hex: string): string | null {
    // Remove the '#' symbol if present
    hex = hex.replace('#', '');

    // Check if the hex value is valid
    const validHexRegex = /^[0-9A-Fa-f]{6}$/g;
    if (!validHexRegex.test(hex)) {
      return null;
    }

    // Parse the hex values for red, green, and blue
    const red = parseInt(hex.substring(0, 2), 16);
    const green = parseInt(hex.substring(2, 4), 16);
    const blue = parseInt(hex.substring(4, 6), 16);

    // Return the RGB format
    return `${red}, ${green}, ${blue}`;
  }

  // Example usage
  let setColor = '#' + color;
  const rgbColor = hexToRgb(setColor);
  // console.log(setColor);

  let setShadowColor = '#' + shadowColor;
  const rgbShadowColor = hexToRgb(setShadowColor);

  const padY = () => {
    return paddingY * 16;
  };

  const padX = () => {
    return paddingX * 16;
  };

  const cardBoraderRadius = () => {
    return cardRadius * 16;
  };

  return (
    <div
      className={`w-full`}
      style={{
        paddingTop: `${padY()}px`,
        paddingBottom: `${padY()}px`,
        paddingLeft: `${padX()}px`,
        paddingRight: `${padX()}px`,
        boxShadow: `${shadowY}px ${shadowX}px ${shadowBlur}px rgba(${rgbShadowColor},${shadowColorVal}) `,
        borderRadius: cardBoraderRadius(),
        backgroundRepeat: 'no-repeat',
        background: `url(${backgroundImageURI})`,
        backgroundSize: 'cover',
        backgroundColor: `rgba(${rgbColor},${alphaValue} )`,
      }}
    >
      {children}
    </div>
  );
};
