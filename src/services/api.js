import axios from "axios";

const api = axios.create({
  baseURL:
    "http://gateway.marvel.com/v1/public/comics?ts=1654268755111&apikey=33ea14e515c183249d66e3db37ce98d0&hash=cac43d374c991f94de1dc400cfd5f7f4",
});

export default api;
