const express = require("express");
const dotenv = require("dotenv");
const { myProject } = require("./mongoContion");
const { ObjectId } = require("mongodb");

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ECRUD OPERATION !");
});

// 1 READ DATA ***
app.get("/student-read", async (req, res) => {
  const myDb = await myProject();
  const dataCollection = myDb.collection("data");

  const studentList = await dataCollection.find().toArray();
  const myobj = {
    status: 1,
    Msg: "Data Insert",
    studentList,
  };
  res.send(myobj);
});

// 2 CREATE DATA ***
app.post("/student-insert", async (req, res) => {
  const myDb = await myProject();
  const dataCollection = myDb.collection("data");

  const { sName, sEmail } = req.body;

  const obj = { sName, sEmail };

  const check = await dataCollection.findOne({ sEmail });
  if (check) {
    return res.send("Email Allready Esxit !");
  }
  const insert = await dataCollection.insertOne(obj);
  const myobj = {
    status: 1,
    Msg: "Data Insert",
    insert,
  };
  res.send(myobj);
  // console.log(check);/
});

// 3 DELTE DATA ***
app.delete("/student-delete/:id", async (req, res) => {
  const { id } = req.params;
  const myDb = await myProject();
  const dataCollection = myDb.collection("data");

  const deleRes = await dataCollection.deleteOne({ _id: new ObjectId(id) });
  const obj = {
    status: 1,
    Msg: "Data Delete",
    deleRes,
  };
  res.send(obj);
});

// 4 UPDATE DATA ***
app.put("/student-update/:id", async (req, res) => {
  const { id } = req.params;
  const { sName, sEmail } = req.body;

  const obj = {};

  if (sName != "" && sName != undefined && sName != null) {
    obj["sName"] = sName;
  }
  if (sEmail != "" && sEmail != undefined && sEmail != null) {
    obj["sEmail"] = sEmail;
  }

  const myDb = await myProject();
  const dataCollection = myDb.collection("data");
  const updateRes = await dataCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: obj }
  );
  const myObj = {
    status: 1,
    Msg: "Data Update",
    updateRes,
  };
  res.send(myObj);
});

app.listen(process.env.PORT);
