import { HeaderContainer } from "./style";
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <HeaderContainer>
      <h1> House of Marvel</h1>
      <nav>
        <div>
          <span>Home</span>
          <FaHome />
        </div>
        <div>
          <span>Cart</span>
          <FaShoppingCart />
        </div>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
