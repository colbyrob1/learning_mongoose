require(".db/connection");
const { Person } = require("./models/person");

const  app = async () => {
    const person = new Person({ name: "Colby", email: "colby@up8create.com", age: 44,
likesPizza: true });
await person.save();
};

app();