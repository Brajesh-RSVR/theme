import classNames from 'classnames';
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';

interface TabContainerProps {
  // title?: string;
  primaryColor?: string;
  secColor?: string;
  activeBar?: string;
  alphaValue?: number;
  paddingY?: number;
  paddingX?: number;
}

export const TabContainer: React.FC<TabContainerProps> = ({
  // title = newTitles(arr_name: string[]),
  primaryColor,
  secColor,
  activeBar,
  alphaValue = 1,
  paddingY = 1,
  paddingX = 2,
}) => {
  // const types = [title];
  const types = ['tab 1', 'tab 2', 'tab 3', 'tab 4'];
  const [active, setActive] = useState(types[0]);

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
  let setColor = '#' + primaryColor;
  const rgbColor = hexToRgb(setColor);
  let newSceColor = '#' + secColor;
  const secRgbColor = hexToRgb(newSceColor);
  let barColor = '#' + activeBar;
  const barActiveColor = hexToRgb(barColor);
  // console.log(rgbColor);

  const padY = () => {
    return paddingY * 16;
  };

  const padX = () => {
    return paddingX * 16;
  };

  console.log(padX());

  return (
    <div className="w-full bg-white-shade my-6 shadow-2xl">
      <div className="test">
        {types.map(type => (
          <button
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
            style={{
              background: `${type === active ? `rgba(${rgbColor}, ${alphaValue})` : `rgba(${secRgbColor}, ${alphaValue})` }`,
              cursor: 'pointer',
              padding: `${padY()}px ${padX()}px`,
              border: 0,
              outline: 0,
              borderBottom: `${type === active ? `2px solid rgb(${barActiveColor})` : '2px solid transparent'}`,
              transition: 'ease border-bottom 250ms',
            }}
          >
            {type}
          </button>
        ))}
      </div>
      <div className=''>
        <p> Your payment selection: {active} </p>
      </div>
    </div>
  );
};
