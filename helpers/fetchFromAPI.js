const axios = require("axios");
/**
 * Fetches data from an API using the specified method and URL.
 *
 * @param {Object} options - The options for the API request.
 * @param {string} options.method - The HTTP method to use for the request.
 * @param {string} options.url - The URL to fetch the data from.
 * @return {Promise} A promise that resolves to the response from the API.
 */
module.exports.fetchFromAPI = async ({ method, url }) => {
  try {
    const config = {
      method,
      maxBodyLength: Infinity,
      url,
      headers: {
        "app-id": process.env.APPID,
      },
    };
    const data = await axios.request(config);
    if (data.status !== 200) {
      throw new Error("Internal Server Error");
    }
    return data.data.data;
  } catch (error) {
    throw new Error(error);
  }
};
