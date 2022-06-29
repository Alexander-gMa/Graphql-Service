import { RESTDataSource } from "apollo-datasource-rest";
import { envConfig } from "../../../common/config";

export default class TracksApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = envConfig.TRACKS_URL;
  }

  async getTracks() {
    const res = await this.get("/");

    return res.items;
  }
}