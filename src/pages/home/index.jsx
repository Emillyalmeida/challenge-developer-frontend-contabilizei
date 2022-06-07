import { useEffect, useState } from "react";
import Container from "../../components/container";
import Header from "../../components/header";
import { Main } from "./style";
import api from "../../services/api";
import Card from "../../components/card";

const Home = () => {
  const [listHq, setListHq] = useState([]);
  useEffect(() => {
    api
      .get(
        "comics?ts=1654268755111&apikey=33ea14e515c183249d66e3db37ce98d0&hash=cac43d374c991f94de1dc400cfd5f7f4&format=comic&orderBy=focDate&limit=30"
      )
      .then((res) => {
        console.log(res.data.data.results);
        setListHq(res.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container>
      <Header />
      <Main>
        <div>
          <h3>Buy yours comics here!!</h3>
        </div>
        <section>
          <h2>filtros</h2>
        </section>
        <ul>
          {listHq.map((hq) => (
            <Card hq={hq} key={hq.id} />
          ))}
        </ul>
      </Main>
    </Container>
  );
};

export default Home;
