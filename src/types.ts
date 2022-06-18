export interface ProductProps {
    taste: string,
    list: Array<{title: string, number: number}>,
    weight: string,
    selectedFood: boolean,
    index: number,
    handleFoodSelection: (index : number) => void,
    isInStock: boolean,
    description: string,
}

export interface ProductDescriptionProps {
    taste: string,
    selectedFood: boolean,
    isInStock: boolean,
    description: string,
    index: number,
    handleFoodSelection: (index : number) => void,
}

export interface ListItemProps {
    number: number,
    item: string
}

export interface allProductImagesType {
    normalBackground: string,
    hoverBackground: string,
    selectedBackground: string,
    selectedAndHoverBackground: string,
    disabledBackground: string,
}

export interface ProductContainerProps {
    isInStock: boolean,
    allProductImages : allProductImagesType,
    selectedFood: boolean
}