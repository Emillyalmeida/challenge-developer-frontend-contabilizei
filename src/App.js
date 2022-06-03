import { useEffect } from "react";
import api from "./services/api";
import GlobalStyle from "./styles/global";

function App() {
  useEffect(() => {
    api
      .get("&format=comic&orderBy=focDate&limit=30")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);
  return <div className="App"></div>;
}

export default App;
