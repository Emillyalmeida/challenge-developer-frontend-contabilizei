import { createContext, useState } from "react";
import api from "../../services/api";

export const ListComicsContext = createContext([]);

export const ListComicsProvider = ({ children }) => {
  const [load, setLoad] = useState(true);
  const [listHq, setListHq] = useState([]);

  const [page, setPage] = useState(1);
  const [listPerPage, setListPerPage] = useState([]);
  const [maxPage, setMaxPage] = useState(0);

  const [format, setFormat] = useState("format=comic&");
  const [date, setdate] = useState("dateDescriptor=thisWeek&");

  const loadHqs = () => {
    api
      .get(
        `comics?limit=50&${format}${date}ts=1654268755111&apikey=33ea14e515c183249d66e3db37ce98d0&hash=cac43d374c991f94de1dc400cfd5f7f4`
      )
      .then((res) => {
        setLoad(true);
        console.log(res.data.data.results);
        setListHq(res.data.data.results);
        console.log(listHq);
        setMaxPage(Math.ceil(listHq.length / 10));
        console.log(maxPage);
        listPage();
      })
      .catch((err) => console.log(err));
  };

  const listPage = () => {
    const mult = (page - 1) * 10;
    const list = listHq.slice(mult, mult + 10);
    setListPerPage(list);
    setLoad(false);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const beforePage = () => {
    setPage(page - 1);
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
      }}
    >
      {children}
    </ListComicsContext.Provider>
  );
};
