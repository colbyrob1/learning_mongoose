
require("./db/connection");
const { Person } = require("./models/Person");
const { Job } = require("./models/job");

const app = async () => {
  try {
    const person = new Person({ name: "Colby", email: "colby@up8create.com", age: 44, likesPizza: true });
    await person.save();

    const job = new Job({ job: "Photographer", completed: true });
    await job.save();

    const everything = await Person.find({});
    console.log(everything);


    await Person.deleteMany();

    //Mongoose docs to queries
    //https://mongoosejs.com/docs/queries.html
  } catch (error) {
    console.log(error);
  }
};

app();

/* 
CRUD
CREATE - instance.save( )
READ - model.find(), .findOne()
UPDATED - .update, updateOne, updateMany
DELETE - deleteOne, deleteMany
*/