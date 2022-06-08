import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Container from "../../components/container";
import Header from "../../components/header";
import api from "../../services/api";

import { MainDetail } from "./style";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import { useContext } from "react";
import { CartContext } from "../../providers/cart";

import noImage from "../../assets/noImage.jpg";

const HqDetails = () => {
  const history = useHistory();
  const Params = useParams();
  const [hq, setHq] = useState({});

  useEffect(() => {
    getHqById(Params.id);
  }, []);

  const getHqById = (id) => {
    api
      .get(
        `comics/${id}?ts=1654268755111&apikey=33ea14e515c183249d66e3db37ce98d0&hash=cac43d374c991f94de1dc400cfd5f7f4`
      )
      .then((res) => {
        console.log(res.data.data.results[0]);
        setHq(res.data.data.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const { addToCart } = useContext(CartContext);

  return (
    <Container>
      <Header />
      <MainDetail>
        <section>
          {hq.images ? (
            <>
              <button onClick={() => history.push("/")}>
                <FaArrowLeft />
              </button>
              <img
                src={
                  hq.images.length > 0
                    ? `${hq.images[0].path}.${hq.images[0].extension}`
                    : noImage
                }
                alt={hq.title}
              />

              <div>
                <h2>{hq.title}</h2>
                <ul>
                  {" "}
                  {hq.creators.items.map((creator) => {
                    return (
                      <li key={creator.name}>
                        <h4>{creator.role} :</h4>
                        <span>{creator.name} </span>
                      </li>
                    );
                  })}
                </ul>
                <p>{hq.description}</p>
                <span>
                  Price: US${" "}
                  {hq.prices[0].price === 0 ? 4.99 : hq.prices[0].price}
                </span>
                <button onClick={() => addToCart(hq)}>
                  <FaShoppingCart /> add to cart
                </button>
              </div>
            </>
          ) : (
            <>
              <h2>help</h2>
            </>
          )}
        </section>
      </MainDetail>
    </Container>
  );
};

export default HqDetails;
