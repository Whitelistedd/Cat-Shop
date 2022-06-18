import React, { useState } from 'react';
import styled from 'styled-components';

import { allProductImages, devices } from '../../data';
import { ProductContainerProps, ProductProps } from '../../types';
import { AboutProduct } from '../AboutProduct/AboutProduct';
import { ProductDescription } from '../ProductDescription/ProductDescription';

export const Product : React.FC<ProductProps> = ({handleFoodSelection,description,index,selectedFood,taste,list,weight,isInStock}) => {

    const [hoverStatus,setHoverStatus] = useState(false)

    return (
        <Container>
            <ProductContainer 
                onMouseEnter={() => setHoverStatus(true)}
                onMouseLeave={() => setHoverStatus(false)}
                onClick={isInStock ? () => handleFoodSelection(index) : () => ""} // если его нет в наличии, он не позволит ему выбрать
                selectedFood={selectedFood}
                isInStock={isInStock}
                allProductImages={allProductImages} 
            >
                <AboutProduct
                    taste={taste}
                    list={list}
                    selectedFood={selectedFood}
                    isInStock={isInStock}
                    hoverStatus={hoverStatus}
                />
                <Weight selectedFood={selectedFood} >
                    <WeightNumber>{weight}</WeightNumber>
                    <WeightName>кг</WeightName>
                </Weight>
            </ProductContainer>
            <ProductDescription 
                taste={taste} 
                selectedFood={selectedFood} 
                description={description} 
                isInStock={isInStock}
                index={index}
                handleFoodSelection={handleFoodSelection}
            />
        </Container>
    )
}

const WeightName = styled.p`
`

const WeightNumber = styled.p`
    font-size: 1.2em;
    font-weight: 800;
`

const Weight = styled.div<{selectedFood: boolean}>`
    width: 90px;
    height: 120px;
    margin: 1em;
    align-self: flex-end;
    border-radius: 50%;
    background: ${props => props.selectedFood ? "#D91667" : "#1698D9"};
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: white;
    font-size: 1.5em;
`

const ProductContainer = styled.div<ProductContainerProps>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${props => props.selectedFood ? `url(${allProductImages.selectedBackground})` : `url(${allProductImages.normalBackground})`}; /* изменить фон в зависимости от выбора */
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    transition: 200ms ease;
    &:hover {
        background: ${props => props.selectedFood ? `url(${allProductImages.selectedAndHoverBackground})` : `url(${allProductImages.hoverBackground})`}; /* изменить фон в зависимости от выбора */
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        cursor: pointer;
    }

    /* меняет фон и цвета в зависимости от того, есть ли он в наличии или нет */
    ${props =>
        props.isInStock ?
        ""
        : 
        `
        background: url(${allProductImages.disabledBackground});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        &:hover {
            background: url(${allProductImages.disabledBackground});
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
        }
        ${Weight} {
            background: #B3B3B3;
        }
        `
    }
`

const Container = styled.div`
    min-width: 400px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5em;
    font-family: "Trebuchet";
    font-size: 19px;
    transition: 200ms ease;
    * {
        transition: 200ms ease;
    }
    @media only screen and (max-width: ${devices.Desktop}) {
        min-width: 340px;
        min-height: 500px;
        ${Weight} {
            width: 90px;
            height: 125px;
        }
    }
    @media only screen and (max-width: ${devices.Laptop}) {
        min-width: 300px;
        min-height: 450px;
        ${Weight} {
            width: 80px;
            height: 110px;
            font-size: 1.3em;
        }
    }
`