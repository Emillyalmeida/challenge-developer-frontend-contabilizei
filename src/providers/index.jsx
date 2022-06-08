import { CartProvider } from "./cart";
import { ListComicsProvider } from "./listComics";

const Providers = ({ children }) => {
  return (
    <ListComicsProvider>
      <CartProvider>{children}</CartProvider>;
    </ListComicsProvider>
  );
};

export default Providers;
