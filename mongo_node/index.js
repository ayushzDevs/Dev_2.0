const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Connect to MongoDB

main().then((res)=>{ console.log('Connected to MongoDB');})
.catch(err=> console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
}


const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age : Number
})

const User = mongoose.model("User", userSchema);
const Emloyee = mongoose.model("Employee", userSchema);