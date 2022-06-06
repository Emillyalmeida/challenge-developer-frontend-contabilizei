import { HeaderContainer } from "./style";
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <h1> House of Marvel</h1>
      <nav>
        <Link to="/">
          <div>
            <span>Home</span>
            <FaHome />
          </div>
        </Link>
        <div>
          <span>Cart</span>
          <FaShoppingCart />
        </div>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
