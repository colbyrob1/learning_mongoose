const mongoose = require("mongoose");

const connection = async () => {
    try {

    
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("successfull conned to mongoDB");
    } catch (error) {
        console.log(error);
    }

//     const db =client.db('people')
//     const collection = db.collection('emails');
// }

};

connection();