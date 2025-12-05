import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../../../assets/assets";

export const StoreContext = createContext(null);

function StoreContextProvider({ children }) {

  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev;

      return {
        ...prev,
        [itemId]: prev[itemId] - 1,
      };
    });
  };

  useEffect(() => {
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;
