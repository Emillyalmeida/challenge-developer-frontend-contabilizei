import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container";
import Header from "../../components/header";
import api from "../../services/api";
import { MainDetail } from "./style";
import { FaShoppingCart } from "react-icons/fa";

const HqDetails = () => {
  const Params = useParams();
  const [hq, setHq] = useState({});

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

  useEffect(() => {
    getHqById(Params.id);
  }, []);

  return (
    <Container>
      <Header />
      <MainDetail>
        <section>
          <img
            src={`${hq.images[0].path}.${hq.images[0].extension}`}
            alt={hq.title}
          />
          <div>
            <h2>{hq.title}</h2>
            <ul>
              {" "}
              {hq.creators.items.map((creator) => {
                return (
                  <li>
                    <h4>{creator.role} :</h4>
                    <span>{creator.name} </span>
                  </li>
                );
              })}
            </ul>
            <p>{hq.description}</p>
            <span>Price: US$ {hq.prices[0].price}</span>
            <button>
              <FaShoppingCart /> add to cart
            </button>
          </div>
        </section>
      </MainDetail>
    </Container>
  );
};

export default HqDetails;
