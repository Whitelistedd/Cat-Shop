import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import BackgroundImage from './assets/images/Background.svg';
import { Product } from './components/Product/Product';
import { CatFood } from './data';
import GlobalStyle from './fontInjection';

const App = () => {

  const [selectedFood,setSelectedFood] = useState<boolean[]>([false,true,false])

  /* выбирает или отменяет выбор продуктов */
  const handleFoodSelection = (index : number) => {
    setSelectedFood(prev => {
      let newArray = [...prev]
      newArray[index] = newArray[index] ? false : true /* если у состояния было true состояние, то оно будет false и наоборот */
      return newArray
    })
    console.log(selectedFood)
  }

  return (
    <Container>
      <GlobalStyle/>
      <Title>Ты сегодня покормил кота?</Title>
      {/* делает количество продуктов, которые имеют данные */}
      <Products>
        {
          CatFood.map((food,index) => 
            <Product 
            key={index}
            index={index}
            isInStock={food.isInStock} 
            handleFoodSelection={handleFoodSelection} 
            selectedFood={selectedFood[index]} 
            taste={food.taste} 
            list={food.list} 
            description={food.description}
            weight={food.weight}  
            />
          )
        }
      </Products>
    </Container>
  );
}

const Products = styled.div`
  display: flex;
  width: 100%;
  gap: 5em;
  flex-wrap: wrap;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 3em;
  line-height: 44px;
`

const Container = styled.div`
  background: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  width: 100vw;
  color: white;
  font-family: "Exo2";
  display: flex;
  gap: 5em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default App;
