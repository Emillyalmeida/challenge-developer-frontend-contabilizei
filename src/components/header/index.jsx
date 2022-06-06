import { HeaderContainer } from "./style";
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import ModalCart from "../cart";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ModalCart isOpen={isOpen} onClose={onClose} />
      <HeaderContainer>
        <h1> House of Marvel</h1>
        <nav>
          <Link to="/">
            <div>
              <span>Home</span>
              <FaHome />
            </div>
          </Link>
          <div onClick={() => onOpen()}>
            <span>Cart</span>
            <FaShoppingCart />
          </div>
        </nav>
      </HeaderContainer>
    </>
  );
};

export default Header;
