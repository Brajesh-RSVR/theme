import React, { useState } from 'react';
import styled from 'styled-components';

interface GroupTabButtonProps {
  title?: string;
}

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
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${props => theme[props.theme].default};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
    theme: "blue"
  };


const ButtonToggle = styled(Button)`
  opacity: 0.7;
  ${({ active }) =>
    active &&
    `opacity: 1;`}
`;

const Tab = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

const types = ['Cash', 'Credit Card', 'Bitcoin'];

function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <div>
        {types.map(type => (
          <Tab key={type} active={active === type} onClick={() => setActive(type)}>
            {type}
          </Tab>
        ))}
      </div>
      <p />
      <p> Your payment selection: {active} </p>
    </>
  );
}

const tabTypes = ['Cash', 'Credit Card', 'Bitcoin'];


function ToggleGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <div>
      {tabTypes.map(tab => (
        <ButtonToggle active={active === tab} onClick={() => setActive(tab)}>
          {tab}
        </ButtonToggle>
      ))}
    </div>
  );
}

export const GroupTabButton: React.FC<GroupTabButtonProps> = ({ title }) => {
  return (
    <>
      <TabGroup />
      <ToggleGroup />
    </>
  );
};
