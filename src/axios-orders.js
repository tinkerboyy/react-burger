import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-710e0.firebaseio.com/"
});

export default instance;
