import axios from 'axios';
import environmentDev from "../environments/environment.dev.js";

class ApiFetchService {
  constructor(APIPath) {
    this.PATH = APIPath;
  }

  async getResults(search) {
    const url = `${this.PATH}/api/items?q=${encodeURI(search)}`;
    const resp = await axios.get(url);
    return resp.data;
  }

  async getItemDetails(id) {
    const url = `${this.PATH}/api/items/${id}`;
    const resp = await axios.get(url);
    return resp.data;
  }
}

let apiPath;
if (import.meta.env.MODE === "development") {
  apiPath = environmentDev.APIBaseURL;
}

export default new ApiFetchService(apiPath);