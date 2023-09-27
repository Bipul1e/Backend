const { fetchFromAPI } = require("../helpers/fetchFromAPI");
const User = require("../models/user");

/**
 * Insert a user into the database.
 *
 * @return {Promise<void>} Promise that resolves when the user is inserted.
 */
module.exports.insertUser = async () => {
  try {
    const data = await fetchFromAPI({
      method: "GET",
      url: "https://dummyapi.io/data/v1/user",
    });
    const insertUserPromise = data.map((user) => {
      const data = {
        userId: user.id,
        title: user.title,
        firstName: user.firstName,
        lastName: user.lastName,
        picture: user.picture,
      };
      User.create(data);
    });

    await Promise.all(insertUserPromise);
    console.info(`Inserted ${data.length} users`);
  } catch (error) {
    throw new Error(error);
  }
};
