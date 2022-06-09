import { useEffect } from "react";
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
  const [page, setPage] = useState(0);
  const [format, setFormat] = useState("format=comic&");
  const [date, setdate] = useState("dateDescriptor=thisWeek&");

  useEffect(() => {
    loadHqs();
  }, [format, date]);

  const loadHqs = () => {
    api
      .get(
        `comics?limit=20&${format}${date}ts=1654268755111&apikey=33ea14e515c183249d66e3db37ce98d0&hash=cac43d374c991f94de1dc400cfd5f7f4`
      )
      .then((res) => {
        // setLoad(true);
        console.log(res.data.data.results);
        setListHq(res.data.data.results);
        console.log(listHq);
        listPage();
        setLoad(false);
      })
      .catch((err) => console.log(err));
  };

  const listPage = () => {
    const mult = page * 10;
    const list = listHq.slice(mult, mult + 10);
    console.log(list);
  };

  return (
    <ListComicsContext.Provider
      value={{ listHq, loadHqs, setFormat, setdate, load, format, date }}
    >
      {children}
    </ListComicsContext.Provider>
  );
};

export default useComics;
