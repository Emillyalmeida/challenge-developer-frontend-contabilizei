import { useHistory } from "react-router-dom";

import Container from "../../components/container";
import Header from "../../components/header";

import { MainDetail } from "./style";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import { useContext } from "react";
import { CartContext } from "../../providers/cart";

import noImage from "../../assets/noImage.jpg";
import useComics from "../../providers/listComics";

const HqDetails = () => {
  const history = useHistory();

  const { selectHq } = useComics();

  const { addToCart } = useContext(CartContext);

  return (
    <Container>
      <Header />
      <MainDetail>
        <section>
          <button onClick={() => history.push("/")}>
            <FaArrowLeft />
          </button>
          <img
            src={
              selectHq.images.length > 0
                ? `${selectHq.images[0].path}.${selectHq.images[0].extension}`
                : noImage
            }
            alt={selectHq.title}
          />

          <div>
            <h2>{selectHq.title}</h2>
            <ul>
              {selectHq.creators.items.map((creator) => {
                return (
                  <li key={creator.name}>
                    <h4>{creator.role} :</h4>
                    <span>{creator.name} </span>
                  </li>
                );
              })}
            </ul>
            <p>{selectHq.description}</p>
            <span>
              Price: US${" "}
              {selectHq.prices[0].price === 0 ? 4.99 : selectHq.prices[0].price}
            </span>
            <button onClick={() => addToCart(selectHq)}>
              <FaShoppingCart /> add to cart
            </button>
          </div>
        </section>
      </MainDetail>
    </Container>
  );
};

export default HqDetails;
