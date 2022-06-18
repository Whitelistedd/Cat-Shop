import ProductBackground from './assets/images/ProductBackground.svg';
import ProductDisabledBackground from './assets/images/ProductDisabled.svg';
import ProductHoverBackground from './assets/images/ProductHover.svg';
import ProductHoverSelected from './assets/images/ProductHoverSelected.svg';
import ProductSelectedBackground from './assets/images/ProductSelected.svg';
import { allProductImagesType } from './types';

export const allProductImages : allProductImagesType = {
    normalBackground: ProductBackground,
    hoverBackground: ProductHoverBackground,
    selectedBackground: ProductSelectedBackground,
    selectedAndHoverBackground: ProductHoverSelected,
    disabledBackground: ProductDisabledBackground,
}

export const CatFood = [
    {
        taste: "с фуа-гра",
        list: [
            {
                number: 100,
                title: "порций",
            },
            {
                number: 5,
                title: "мышей в подарок"
            },
            {
                number: 0,
                title: "заказчик доволен"
            }
        ],
        weight: "0.5",
        isInStock: true,
        description: "Печень утки разварная с артишоками."
    },
    {
        taste: "с рыбой",
        list: [
            {
                number: 40,
                title: "порций",
            },
            {
                number: 2,
                title: "мыши в подарок"
            },
        ],
        weight: "2",
        isInStock: true,
        description: "Головы щучьи с чесноком да свежайшая сёмгушка."
    },
    {
        taste: "с курой",
        list: [
            {
                number: 10,
                title: "порций",
            },
            {
                number: 0,
                title: "мышь в подарок"
            }
        ],
        weight: "5",
        isInStock: false,
        description: "Филе из цыплят с трюфелями в бульоне."
    },
]

export const devices = {
    Desktop: "1500px",
    Laptop: "1200px"
}