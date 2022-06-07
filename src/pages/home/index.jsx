import { useEffect, useState } from "react";
import Container from "../../components/container";
import Header from "../../components/header";
import { Main } from "./style";
import api from "../../services/api";
import Card from "../../components/card";

const Home = () => {
  const [load, setLoad] = useState(true);
  const [listHq, setListHq] = useState([]);
  const [format, setFormat] = useState("format=comic&");
  const [date, setdate] = useState("dateDescriptor=thisWeek&");

  useEffect(() => {
    api
      .get(
        `comics?${format}${date}ts=1654268755111&apikey=33ea14e515c183249d66e3db37ce98d0&hash=cac43d374c991f94de1dc400cfd5f7f4`
      )
      .then((res) => {
        console.log(res.data.data.results);
        setListHq(res.data.data.results);
        setLoad(false);
      })
      .catch((err) => console.log(err));
  }, [format, date]);
  return (
    <Container>
      <Header />
      <Main>
        <div>
          <h3>Buy yours comics here!!</h3>
        </div>
        <section>
          <h2>Filters</h2>
          <select onChange={(e) => setFormat(`format=${e.target.value}&`)}>
            <option value="comic">Comic</option>
            <option value="magazine">Magazine</option>
            <option value="graphic%20novel">Grafic Novel</option>
            <option value="digital%20comic">Digital Comic </option>
            <option value="hardcover">Hardcover</option>
            <option value="trade%20paperback">Paperback</option>
            <option value="infinite%20comic">Infinite Comic </option>
          </select>
          <select onChange={(e) => setdate(e.target.value)}>
            <option value="dateDescriptor=thisWeek&">This week</option>
            <option value="dateDescriptor=lastWeek&">Last week</option>
            <option value="dateDescriptor=nextWeek&">Next week </option>
            <option value="dateDescriptor=thisMonth&">This month</option>
            <option value="">None</option>
          </select>
        </section>
        {load ? (
          <></>
        ) : (
          <ul>
            {listHq.map((hq) => (
              <Card hq={hq} key={hq.id} />
            ))}
          </ul>
        )}
      </Main>
    </Container>
  );
};

export default Home;
