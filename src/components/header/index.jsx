import { HeaderContainer } from "./style";
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import ModalCart from "../cart";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { Cart } = useContext(CartContext);
  return (
    <>
      <ModalCart isOpen={isOpen} onClose={onClose} />
      <HeaderContainer>
        <h1> House of Marvel</h1>
        <nav>
          <Link to="/">
            <div>
              <FaHome />
              <span>Home</span>
            </div>
          </Link>
          <div onClick={() => onOpen()}>
            <div>
              <p>{Cart.length}</p>
            </div>

            <FaShoppingCart />
            <span>Cart</span>
          </div>
        </nav>
      </HeaderContainer>
    </>
  );
};

export default Header;
