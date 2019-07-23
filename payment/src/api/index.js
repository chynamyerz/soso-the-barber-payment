import axios from "axios";
import "now-env";

/**
 * An axios base client responsible for the HTTP requests.
 */
export const baseAxiosClient = () => ({
  _client: axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URI}`,
  }),

  _handleError(error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    } else {
      throw error;
    }
  },

  get(url) {
    return this._client.get(url).catch(this._handleError);
  },

  post(url, data) {
    return this._client.post(url, data).catch(this._handleError);
  }
});
