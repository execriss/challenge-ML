import axios from "axios";
import APIUrlBuilder from "../http/APIUrlBuilder.js";
import MeliMapper from "./MeliMapper.js";

class MeliService {
  constructor({ APIPath = "ML", root = "MLA" }) {
    this.http = axios.create();
    this.builder = new APIUrlBuilder();
    this.MeliMapper = new MeliMapper();
    this.APIPath = APIPath;
    this.root = root;
  }

  async request(url, params = {}) {
    try {
      const response = await this.http.get(url, { params });
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error(`Request failed: ${error.message}`);
    }
  }

  async getSearch({ q, limit = 4 }) {
    const url = this.builder.createUrl(this.APIPath, `/sites/${this.root}/search`);
    return this.MeliMapper.mapGetSearchByResponse(
      await this.request(url, { q, limit })
    );
  }

  async getItemById(id) {
    const url = this.builder.createUrl(this.APIPath, `items/${id}`);
    return await this.request(url);
  }

  async getItemByDescription(id) {
    const url = this.builder.createUrl(this.APIPath, `items/${id}/description`);
    return await this.request(url);
  }

  async getCurrencies() {
    const url = this.builder.createUrl(this.APIPath, "/currencies");
    return await this.request(url);
  }

  async getCategoryById(category_id) {
    const url = this.builder.createUrl(this.APIPath, `categories/${category_id}`);
    return await this.request(url);
  }
}

export default new MeliService({});
