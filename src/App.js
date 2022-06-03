import { useEffect } from "react";
import Routers from "./routers";
import api from "./services/api";
import GlobalStyle from "./styles/global";

function App() {
  useEffect(() => {
    api
      .get("&format=comic&orderBy=focDate&limit=30")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <GlobalStyle />
      <Routers />
    </>
  );
}

export default App;
