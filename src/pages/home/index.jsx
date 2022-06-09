import { useEffect, useContext } from "react";

import Container from "../../components/container";
import Header from "../../components/header";
import Card from "../../components/card";

import { Main, Pagination, BannerMain } from "./style";
import useComics from "../../providers/listComics";

import { ChakraProvider, Spinner } from "@chakra-ui/react";
import { MdError } from "react-icons/md";

const Home = () => {
  const {
    maxPage,
    loadHqs,
    setFormat,
    setdate,
    load,
    beforePage,
    nextPage,
    page,
    listPerPage,
  } = useComics();

  return (
    <Container>
      <Header />
      <Main>
        <BannerMain>
          <h2>Buy yours comics here!!</h2>
        </BannerMain>
        <section>
          <h3>Filters</h3>
          <div>
            <label> Format</label>
            <select onChange={(e) => setFormat(`format=${e.target.value}&`)}>
              <option value="comic">Comic</option>
              <option value="magazine">Magazine</option>
              <option value="graphic%20novel">Grafic Novel</option>
              <option value="digital%20comic">Digital Comic </option>
              <option value="hardcover">Hardcover</option>
              <option value="trade%20paperback">Paperback</option>
              <option value="infinite%20comic">Infinite Comic </option>
            </select>
          </div>
          <div>
            <label> Date</label>
            <select onChange={(e) => setdate(e.target.value)}>
              <option value="dateDescriptor=thisWeek&">This week</option>
              <option value="dateDescriptor=lastWeek&">Last week</option>
              <option value="dateDescriptor=nextWeek&">Next week </option>
              <option value="dateDescriptor=thisMonth&">This month</option>
              <option value="">None</option>
            </select>
          </div>
        </section>

        <ul>
          {load ? (
            <ChakraProvider resetCSS={false}>
              <Spinner h="300px" w="300px" color="var(--color-main)" />
            </ChakraProvider>
          ) : listPerPage.length > 0 ? (
            <>
              {listPerPage.map((hq) => (
                <Card hq={hq} key={hq.id} />
              ))}
            </>
          ) : (
            <>
              <section>
                <h3>Not found any comic with these filters</h3>
                <MdError />
              </section>
            </>
          )}
        </ul>
        <Pagination>
          {page !== 1 && (
            <button onClick={() => beforePage()}>Before page</button>
          )}

          <span>{page}</span>
          {page !== maxPage && (
            <button onClick={() => nextPage()}>Next page</button>
          )}
        </Pagination>
      </Main>
    </Container>
  );
};

export default Home;
