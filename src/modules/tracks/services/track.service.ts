import { RESTDataSource } from "apollo-datasource-rest";
import { envConfig } from "../../../common/config";

export default class TracksApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = envConfig.TRACKS_URL;
  }

  async getTracks(limit: any, offset: any) {
    const response = await this.get(`/?limit=${limit}&offset=${offset}`);

    return response;
  }
}