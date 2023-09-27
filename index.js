const { json } = require("express");
const express = require("express");
const router = require("./routes/index");
const db = require("./config/mongoose");
const { insertUser } = require("./scripts/insertUser");
const { insertPosts } = require("./scripts/insertPosts");
require("dotenv").config();

const app = express();

app.use(json());

app.use("/api", router);

/**
 * Calls the scripts to insert a user and posts into the database.
 *
 * @return {Promise<void>} A promise that resolves when the scripts are finished executing.
 */
const callScripts = async () => {
  await insertUser();
  await insertPosts();
};
callScripts();

app.listen(process.env.PORT || 3030, () => {
  console.info(`server is running on port ${process.env.PORT || 3030}`);
});

module.exports = app;
