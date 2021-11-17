import axios from "axios";

class AxiosApi {
  constructor() {
    this.api = axios.create({
      baseURL: "https://dog.ceo/api",
    });
  }

  async get(endpointName, params) {
    return this.api.get(endpointName, params);
  }
}

const API = new AxiosApi();

export default API;
