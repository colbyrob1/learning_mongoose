const mongoose = require("mongoose");

const connection = async () => {


const URI = "mongodb+srv://Colby:<Colby123>@cluster0.kcwsk.mongodb.net/<dbname>?retryWrites=true&w=majority"

const connection = async () => {
    const client = new MongoClient.MongooseDocument.conect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    await client.connect()

    console.log("successfull conned to mongoDB");

    const db =client.db('people')
    const collection = db.collection('emails')


}