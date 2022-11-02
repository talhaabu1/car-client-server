const express = require('express');
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require('dotenv').config()

const app = express();
const Port = process.env.PORT || 4000;

app.use(cors())
app.use(express.json());



// MongoDB Server Star

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_Password}@new-database.6yvpkxa.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
// MongoDB Server end

app.get('/', (req, res) => { 
    res.send('hello mongodb server start')
})

app.listen(Port, () => { 
    console.log('Port start check ' , {Port})
})