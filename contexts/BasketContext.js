import React, { createContext, useContext, useEffect, useState } from 'react';


const BasketContext = createContext({
  productLines: [],
  addProductLine: () => {},
  total: 0,
});

export const Basket = ({ children }) => {
  const [productLines, setProductLines] = useState([]);
  const [total, setTotal] = useState(0);



  
  //localStorage

  useEffect (() => {
    let data = localStorage.getItem("productlines");
    let data2 = JSON.parse(data);
    if(data){
      setProductLines(data2);
    }
  }, []); 

  useEffect (() => {
    localStorage.setItem("productlines", JSON.stringify(productLines));
  }, [productLines]);

  

  //Add product

  const addProductLine = (product) => {
    const productInCart = productLines.filter((item) => item.id == product.id).length;

    if(productInCart) {
       const productIndex = productLines.findIndex((item) => item.id === product.id);

       const newProductLines = productLines;
       newProductLines[productIndex] = {
           ...newProductLines[productIndex], 
           antall: newProductLines[productIndex].antall += 1,
           total: newProductLines[productIndex].pris * newProductLines[productIndex].antall
       };

       setProductLines([...newProductLines]);

    } else {
        let newProduct = {
            total: product.pris,
            ...product
        }
        setProductLines([...productLines, newProduct]);
    }
    
  };


  //Remove from basket
  const removeProductLine = (id) => {
    let filteredProductLines = productLines.filter((item) => item.id !== id);
    setProductLines(filteredProductLines);
  };

  useEffect(() => {
    const totalPrice = productLines.reduce((prev, cur) => {
        console.log("Lagt til", productLines);
      return prev + cur.total;
    }, 0);
    setTotal(totalPrice);
  }, [productLines]);


  //Clear cart after Order
  const clearCart = () => {
    setProductLines([]);
  };



  return (
    <BasketContext.Provider value={{ productLines, addProductLine, total, removeProductLine, clearCart }}>
      {children}
    </BasketContext.Provider>
  );
};

export const BasketConsumer = BasketContext.Consumer;

export const useBasket = () => {
  return useContext(BasketContext);
};