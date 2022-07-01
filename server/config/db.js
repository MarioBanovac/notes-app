const mongoose = require("mongoose");
const db = process.env.MONGODB;

async function connectToDb() {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Spojena baza podataka...");
  } catch (err) {
    console.log(`Nije moguce spojiti se sa bazom podataka...`);
  }
}

module.exports = connectToDb;
