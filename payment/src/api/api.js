import { baseAxiosClient } from "./";

/**
 * An API for the Data Archive.
 *
 * login
 *   A function responsible for authenticating the user.
 */
export default {
  /**
   * Log the user in.
   *
   * Parameters:
   * -----------
   * credentials:
   *     The authentication credentials. They must contain the email and
   *     password.
   *
   * Returns:
   * --------
   * true
   */
  login: async (credentials) => {
    return baseAxiosClient().post("/auth/login", {
      password: credentials.password,
      username: credentials.email
    });
  },

  galery: async () => {
    return baseAxiosClient().post("/", {
      query: "query { gallery{ id }}"
    })
  }
};
