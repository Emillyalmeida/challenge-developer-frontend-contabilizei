import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { CardLi } from "./style";
import { CartContext } from "../../providers/cart";
import noImage from "../../assets/noImage.jpg";

const Card = ({ hq }) => {
  const { title, images, prices, id } = hq;
  const history = useHistory();
  const { addToCart } = useContext(CartContext);

  return (
    <CardLi>
      <img
        onClick={() => history.push(`/hq/${id}`)}
        src={
          images.length > 0
            ? `${images[0].path}.${images[0].extension}`
            : noImage
        }
        alt={title}
      />

      <h3>{title}</h3>
      <span>Price: US$ {prices[0].price === 0 ? 4.99 : prices[0].price}</span>
      <button onClick={() => addToCart(hq)}>
        <FaShoppingCart /> add to cart
      </button>
    </CardLi>
  );
};

export default Card;
