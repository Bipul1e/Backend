const { fetchFromAPI } = require("../helpers/fetchFromAPI");
const Post = require("../models/posts");
const User = require("../models/user");

/**
 * Inserts posts into the database for all users.
 *
 * @return {Promise<void>} - Returns a promise that resolves when the posts are inserted.
 */
module.exports.insertPosts = async () => {
  try {
    const data = await User.find({});
    if (!data) {
      throw new Error("Data not found");
    }
    data.map(async (user) => {
      const postData = await fetchFromAPI({
        method: "GET",
        url: `https://dummyapi.io/data/v1/user/${user.userId}/post`,
      });
      const userPostData = postData.map((post) => {
        return {
          owner: post.owner.id,
          image: post.image,
          likes: post.likes,
          text: post.text,
          publishDate: post.publishDate,
        };
      });
      await Post.insertMany(userPostData);
    });
    console.info("Post inserted");
  } catch (error) {
    throw new Error(error);
  }
};
