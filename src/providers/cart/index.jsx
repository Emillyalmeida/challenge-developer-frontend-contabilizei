import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [Cart, setCart] = useState([]);

  const addToCart = (hq) => {
    const isDuplicate = Cart.some((item) => item.id === hq.id);

    if (isDuplicate) {
      hq.qtd++;
      setCart([...Cart]);
    } else {
      hq.qtd = 1;
      hq.prices[0].price = hq.prices[0].price === 0 ? 4.99 : hq.prices[0].price;
      setCart([...Cart, hq]);
    }
    localStorage.setItem("@MarvelHouse", Cart);
  };

  const RemoveToCart = (hq) => {
    const filtered = Cart.filter((item) => item.id !== hq.id);
    setCart(filtered);
    localStorage.setItem("@MarvelHouse", Cart);
  };

  const addQtd = (hq) => {
    hq.qtd++;
    setCart([...Cart]);
  };

  const subQtd = (hq) => {
    hq.qtd--;
    if (hq.qtd >= 1) {
      setCart([...Cart]);
    } else {
      RemoveToCart(hq);
    }
  };

  return (
    <CartContext.Provider
      value={{ Cart, addToCart, RemoveToCart, addQtd, subQtd }}
    >
      {children}
    </CartContext.Provider>
  );
};
