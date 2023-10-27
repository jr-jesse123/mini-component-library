import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
    </SelectWrapper>
  );
};


const StyledSelect = styled.select`
  background-color: ${COLORS.transparentGray15};
  border: none;
  color: ${COLORS.gray700};
  padding: 12px 16px;
  padding-right: 32px;
  border-radius: 8px;
  appearance: none;
  &::focus {
    border: 2px solid ${COLORS.primary};
  }

  &:hover {
    color: black;
  }
  
`
const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:after {
    content: '<';
    color: black;
    position: absolute;
    top: 12px;
    right: 10px;
    transform: rotate(-90deg);
  }

`

export default Select;
