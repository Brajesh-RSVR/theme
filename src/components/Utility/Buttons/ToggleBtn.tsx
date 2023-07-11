import React, { useState } from 'react';

interface ToggleButtonProps {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  toggleWidth?: 1 | 2 | 3 | 5 | number;
  themeColor?: string;
  labelSpacing?: 1 | 2 | 3 | 5 | number;
  isLabel?: Boolean;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  defaultChecked = false,
  onChange,
  toggleWidth = 5,
  themeColor,
  labelSpacing = 1,
  isLabel = false,
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  const mainToggleWidth = () => {
    return toggleWidth * 16;
  };

  const labelGap = () => {
    return labelSpacing * 16;
  };

  const mainToggleHeight = mainToggleWidth() / 2;
  const circleToggle = mainToggleWidth() / 2;

  const circleColor = () => {
    if (themeColor === themeColor) {
      return console.log(themeColor);
    } else if (themeColor) {
      return console.log('no color');
    }
  };

  console.log(circleColor());
  console.log(checked);

  return (
    <div className="relative flex items-center" style={{ columnGap: labelGap() }}>
      <label className="absolute z-50 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleToggle}
          style={{
            width: mainToggleWidth(),
            height: mainToggleHeight,
          }}
          className="invisible"
        />
      </label>
      <div
        className={`cursor-pointer ${themeColor}`}
        style={{
          width: mainToggleWidth(),
          height: mainToggleHeight,
          background: themeColor,
          borderRadius: 25,
          backgroundColor: `${!checked ? '#d9d9d9' : ''}`,
        }}
      >
        <div
          className={`${themeColor}-accent transition ease-in-out delay-150 duration-300`}
          style={{
            height: circleToggle,
            width: circleToggle,
            borderRadius: 50,
            transform: `translateX(${checked ? '40px' : '0'})`,
            backgroundColor: `${!checked ? '#a9a9a9' : ''}`,
          }}
        />
      </div>
      {isLabel && <span style={{cursor: "pointer"}} onClick={handleToggle}>{checked ? 'ON' : 'OFF'}</span>}
    </div>
  );
};
