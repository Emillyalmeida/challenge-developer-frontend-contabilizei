import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container";
import Header from "../../components/header";
import api from "../../services/api";
import { MainDetail } from "./style";

const HqDetails = () => {
  const Params = useParams();

  const getHqById = (id) => {
    api
      .get(
        `comics/${id}?ts=1654268755111&apikey=33ea14e515c183249d66e3db37ce98d0&hash=cac43d374c991f94de1dc400cfd5f7f4`
      )
      .then((res) => {
        console.log(res.data);
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
          <img src="" alt="" />
          <div>
            <h2>title</h2>
            <p>descripion</p>
            <span>price</span>
          </div>
          <button> add to cart</button>
        </section>
      </MainDetail>
    </Container>
  );
};

export default HqDetails;
