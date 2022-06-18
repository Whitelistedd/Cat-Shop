import React from 'react';
import styled from 'styled-components';

import { ListItemProps } from '../../types';

export const ListItem : React.FC<ListItemProps> = ({number,item}) => {
  return (
    <Item>{number > 0 && <Number>{number}</Number>}{item}</Item>
  )
}

const Number = styled.p`
    font-weight: 700;
`

const Item = styled.li`
    display: flex;
    gap: 5px;
`
