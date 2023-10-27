/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';




const ProgressBar = ({ value, size }) => {
  return <OutterDiv size={size} >
    <InnerDiv value={value} />

  </OutterDiv>;
};

export default ProgressBar;


const OutterDiv = styled.div`
  
  height: ${p => p.size === 'large' ? '24px' : p.size === 'small' ? '8px' : '12px'};
  background: ${COLORS.transparentGray15};
  padding: ${p => p.size === 'large' ? '4px' : '0px'};
  border-radius: 8px;
`

const InnerDiv = styled.div`
  background-color: ${COLORS.primary};
  width: ${p => p.value + '%'};
  height: 100%;
  border-radius-top-left: 4px;
  
  border-radius: 4px ${p => p.value === 100 ? '4px 4px' : '0px 0px'};
`