const { db } = require("./index.js");
const Patient = require("./Patient.js");

const sampleData = require("../data.json");

const insertSamplePatient = function () {
  Patient.create(sampleData)
    .then(() => {
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    })
    .finally(() => {
      db.close();
    });
};

insertSamplePatient();
