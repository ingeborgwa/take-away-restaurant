import React, { createContext, useContext, useEffect, useState } from 'react';


const BasketContext = createContext({
  productLines: [],
  addProductLine: () => {},
  total: 0,
});

export const Basket = ({ children }) => {
  const [productLines, setProductLines] = useState([]);
  const [total, setTotal] = useState(0);

  const addProductLine = (product) => {
    setProductLines([...productLines, product]);
  };

<<<<<<< HEAD


  //Remove from basket
  const removeProductLine = (id) => {
    let filteredProductLines = productLines.filter((item) => item.id !== id);
    setProductLines(filteredProductLines);
  };

  


=======
>>>>>>> d482c03e7a9eefce7f65e98d54460105a199fe54
  useEffect(() => {
    const total = productLines.reduce((prev, cur) => {
        console.log("Lagt til", productLines);
      return prev + cur.pris;
    }, 0);
    setTotal(total);
  }, [productLines]);

  return (
<<<<<<< HEAD
    <BasketContext.Provider value={{ productLines, addProductLine, total, removeProductLine }}>
=======
    <BasketContext.Provider value={{ productLines, addProductLine, total }}>
>>>>>>> d482c03e7a9eefce7f65e98d54460105a199fe54
      {children}
    </BasketContext.Provider>
  );
};

export const BasketConsumer = BasketContext.Consumer;

export const useBasket = () => {
  return useContext(BasketContext);
};