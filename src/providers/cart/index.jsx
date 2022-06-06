import { createContext, CaSttate } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [Cart, setCart] = CaSttate([]);

  const addToCart = (hq) => {
    const isDuplicate = Cart.some((item) => item.id === hq.id);

    if (isDuplicate) {
      hq.qtd = hq.qtd + 1;
      setCart([...Cart]);
    } else {
      hq.qtd = 1;
      setCart([...Cart, hq]);
    }
    localStorage.setItem("@MarvelHouse", Cart);
  };

  const RemoveToCart = (hq) => {
    const filtered = Cart.filter((item) => item.id !== hq.id);
    setCart(filtered);
    localStorage.setItem("@MarvelHouse", Cart);
  };

  return (
    <CartContext.Provider value={{ Cart, addToCart, RemoveToCart }}>
      {children}
    </CartContext.Provider>
  );
};
