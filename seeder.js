const mongoose = require("mongoose");
const config = require("./config");
const Contact = require("./models/Contact");
const contacts = [
  {
    name:"Vincent Vega",
    phone:"+17654532001"
  },
  {
    name:"Mia Wallace",
    phone:"+17654532001"
  },
  {
    name:"Tinder Less",
    email:"iamtinderless@outlook.com",
    phone:"+919810153260"
  },
  {
    name:"Khiladi Kumar",
    email:"khiladikumar@gmail.com",
    phone:"+919810153260"
  },
  {
    name:"Vasant Kukreja",
    phone:"+919810153260"
  },
]

async function seed() {
  try {
    await mongoose.connect(config.mongoURI);
    await Contact.deleteMany({})
    await Contact.insertMany(contacts)

    console.info("Done!");
  } catch (error) {
    console.error(error);
  }
  
  //mongoose.disconnect();
}

seed();