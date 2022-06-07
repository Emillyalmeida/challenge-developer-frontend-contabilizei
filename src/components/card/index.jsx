import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { CardLi } from "./style";
import { CartContext } from "../../providers/cart";

const Card = ({ hq }) => {
  const { title, images, prices, id } = hq;
  const history = useHistory();
  const { addToCart, Cart } = useContext(CartContext);

  return (
    <CardLi onClick={() => history.push(`/hq/${id}`)}>
      <img src={`${images[0].path}.${images[0].extension}`} alt={title} />
      <h3>{title}</h3>
      <span>Price: US$ {prices[0].price === 0 ? 4.99 : prices[0].price}</span>
      <button onClick={() => addToCart(hq)}>
        <FaShoppingCart /> add to cart
      </button>
    </CardLi>
  );
};

export default Card;
