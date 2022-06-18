import React from 'react';
import styled from 'styled-components';

import { devices } from '../../data';
import { ListItem } from '../ListItem/ListItem';

interface Props {
    taste: string,
    list: Array<{title: string, number: number}>,
    selectedFood: boolean,
    isInStock: boolean,
    hoverStatus: boolean,
}

export const AboutProduct : React.FC<Props> = ({hoverStatus,selectedFood,isInStock,taste,list}) => {
  return (
    <About isInStock={isInStock} >
        {hoverStatus && selectedFood && isInStock ? 
        <HighlightedTitle>Котэ не одобряет?</HighlightedTitle> 
        : <Title>Сказочное заморское яство</Title>
        }
        <Name>Нямушка</Name>
        <Taste>{taste}</Taste>
        <List>
            {list.map((item,index) => 
                <ListItem key={index} item={item.title} number={item.number} />
                )}
        </List>
    </About>
  )
}

const List = styled.ul`
    list-style: none;
    font-size: 1.05em;
    line-height: 16px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

const Taste = styled.h4`
    color: black;
    font-size: 1.5em;
`

const Name = styled.h3`
    font-size: 3.5em;
    color: black;
`

const Title = styled.h2`
    font-weight: 500;
    font-size: 1.2em;
`

const HighlightedTitle = styled.h2`
    font-weight: 500;
    font-size: 1.2em;
    color: #D91667;
`

const About = styled.div<{isInStock: boolean}>` 
    display: flex;
    gap: 1.7em;
    flex-direction: column;
    padding-top: 1.5em;
    line-height: 19px;
    color: grey;
    height: 100%;
    width: 300px;
    ${props =>
        props.isInStock ?
        ""
        : 
        `
        ${Title},${Name}, ${Taste},${List} { 
            color: #B3B3B3;
        }
        `
    }
    @media only screen and (max-width: ${devices.Desktop}) {
        gap: 1.5em;
        font-size: 16px;
        width: 250px;
    }
    @media only screen and (max-width: ${devices.Laptop}) {
        gap: 1.5em;
        font-size: 12.5px;
        width: 220px;
    }
`
