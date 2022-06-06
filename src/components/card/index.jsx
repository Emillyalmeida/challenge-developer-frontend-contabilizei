import { useHistory } from "react-router-dom";
import { CardLi } from "./style";

const Card = ({ hq }) => {
  const { title, images, prices, id } = hq;
  const history = useHistory();
  return (
    <CardLi onClick={() => history.push(`/hq/${id}`)}>
      <img src={`${images[0].path}.${images[0].extension}`} alt={title} />
      <h3>{title}</h3>
      <span>Price: US$ {prices[0].price === 0 ? 4.99 : prices[0].price}</span>
    </CardLi>
  );
};

export default Card;
