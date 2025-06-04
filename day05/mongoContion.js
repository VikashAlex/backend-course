const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

const dbName = "students";

const myProject = async () => {
  await client.connect();
  const db = client.db(dbName);
  return db;
};

module.exports = { myProject };
