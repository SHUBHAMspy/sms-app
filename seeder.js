const mongoose = require("mongoose");
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
    phone:"+919810153260"
  },
  {
    name:"Khiladi Kumar",
    phone:"+919810153260"
  },
  {
    name:"Vasant Kukreja",
    phone:"+919810153260"
  },
]

async function seed() {
  try {
    // await mongoose.connect(process.env.MONGODB_URI);
    await Contact.deleteMany({})
    await Contact.insertMany(contacts)

    console.info("Done!");
  } catch (error) {
    console.error(error);
  }
  
  //mongoose.disconnect();
}

seed();