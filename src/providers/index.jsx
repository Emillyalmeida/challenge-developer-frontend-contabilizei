import { CartProvider } from "./cart";

const Providers = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default Providers;
