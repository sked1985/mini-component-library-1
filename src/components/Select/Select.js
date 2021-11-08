import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value="15" onChange={onChange}>
        <PresentationBit>
          Hello World
        </PresentationBit>
      </NativeSelect>
    </Wrapper>
  );
};

const PresentationBit = styled.div`
  background-color: red;
  padding: 12px 16px;
`

const Wrapper = styled.div`
  position: relative;
`

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0';
`

export default Select;
