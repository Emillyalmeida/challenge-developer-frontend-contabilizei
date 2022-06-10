import { useEffect } from "react";
import { useCallback } from "react";
import { useContext } from "react";
import { createContext, useState } from "react";
import api from "../../services/api";

const useComics = () => {
  const context = useContext(ListComicsContext);

  if (!context) {
    throw new Error("useTasks must to be used within AuthContext");
  }

  return context;
};

export const ListComicsContext = createContext([]);

export const ListComicsProvider = ({ children }) => {
  const [load, setLoad] = useState(true);
  const [listHq, setListHq] = useState([]);

  const [page, setPage] = useState(1);
  const [listPerPage, setListPerPage] = useState([]);
  const [maxPage, setMaxPage] = useState(0);

  const [format, setFormat] = useState("format=comic&");
  const [date, setdate] = useState("dateDescriptor=thisWeek&");

  const [selectHq, setSelectHq] = useState({});

  const loadHqs = useCallback(() => {
    api
      .get(
        `comics?limit=50&${format}${date}ts=1654868189291&apikey=33ea14e515c183249d66e3db37ce98d0&hash=1cd4a3dcb68d8e5dc9e5f006fbd7417b`
      )
      .then((res) => {
        setLoad(true);
        console.log(res.data.data.results);
        ramdomNumbers(res.data.data.results);
      })
      .catch((err) => console.log(err));
  }, [format, date]);

  const listPage = () => {
    console.log(listHq);
    setMaxPage(Math.ceil(listHq.length / 10));
    console.log(maxPage);
    const mult = (page - 1) * 10;
    const list = listHq.slice(mult, mult + 10);
    setListPerPage(list);
    setLoad(false);
  };

  useEffect(() => {
    loadHqs();
  }, [format, date]);

  useEffect(() => {
    listPage();
  }, [listHq, page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const beforePage = () => {
    setPage(page - 1);
  };

  const ramdomNumbers = (arr) => {
    const rares = Math.ceil(arr.length * 0.1);
    let num = [];
    for (let i = rares; i > 0; i--) {
      num.push(Math.floor(Math.random() * arr.length));
    }
    setRares(arr, num);
  };

  const setRares = (comics, num) => {
    console.log(num);
    num.forEach((num) => {
      comics[num].rare = true;
    });

    setListHq(comics);
  };

  return (
    <ListComicsContext.Provider
      value={{
        loadHqs,
        setFormat,
        setdate,
        load,
        format,
        date,
        beforePage,
        nextPage,
        page,
        listPerPage,
        maxPage,
        selectHq,
        setSelectHq,
      }}
    >
      {children}
    </ListComicsContext.Provider>
  );
};

export default useComics;
