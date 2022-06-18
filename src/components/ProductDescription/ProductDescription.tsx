import React from 'react';
import styled from 'styled-components';

import { devices } from '../../data';
import { ProductDescriptionProps } from '../../types';

export const ProductDescription : React.FC<ProductDescriptionProps> = ({handleFoodSelection,index,selectedFood,isInStock,description,taste}) => {
  return (
    selectedFood && isInStock 
    ? <Description>{description}</Description> 
    
    : !isInStock 
        ? <Description>Печалька, {taste} закончился.</Description> 
        
        : <Description>Чего сидишь? Порадуй котэ, <Purchase onClick={() => handleFoodSelection(index)} >купи</Purchase>.</Description>
    
  )
}

const Purchase = styled.a`
    color: #22A7E9;
    font-weight: 600;
    text-decoration: underline dashed;
    &:hover {
        cursor: pointer;
    }
`

const Description = styled.p`
    font-size: 0.75em;
    letter-spacing: 1px;
    @media only screen and (max-width: ${devices.Desktop}) {
        font-size:  0.5em;
    }
    @media only screen and (max-width: ${devices.Laptop}) {
        font-size:  0.5em;
    }
`