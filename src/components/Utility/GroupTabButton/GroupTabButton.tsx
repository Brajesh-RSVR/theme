import React, { useState } from 'react';
import styled from 'styled-components';

interface GroupTabButtonProps {
  title?: string;
  tabRadius?: 1 | 2 | 3 | 4 | number;
}

export const GroupTabButton: React.FC<GroupTabButtonProps> = ({ title, tabRadius = 1 }) => {
  const newRadius = () => {
    return tabRadius * 16;
  };
  const types = ['tab 1', 'tab 2', 'tab 3', 'tab 4'];
  const [active, setActive] = useState(types[0]);
  const theme = {
    blue: {
      default: '#3f51b5',
      hover: '#283593',
    },
    pink: {
      default: '#e91e63',
      hover: '#ad1457',
    },
  };

  const Button = styled.button`
    background-color: ${props => theme[props.theme].default};
    color: white;
    padding: 5px 15px;
    outline: 0;
    text-transform: uppercase;
    cursor: pointer;
    transition: ease background-color 250ms;
    &:hover {
      background-color: ${props => theme[props.theme].hover};
    }
    &:disabled {
      cursor: default;
      opacity: 0.7;
    }
  `;

  Button.defaultProps = {
    theme: 'blue',
  };

  const ButtonToggle = styled(Button)`
    opacity: 0.7;
    ${({ active }) =>
      active &&
      `
          opacity: 1;
        `}
  `;

  return (
    <>
      <div className="flex overflow-hidden w-fit" style={{ borderRadius: newRadius() }}>
        {types.map(type => (
          <ButtonToggle active={active === type} onClick={() => setActive(type)}>
            {type}
          </ButtonToggle>
        ))}
      </div>
      <p> Your payment selection: {active} </p>
    </>
  );
};
