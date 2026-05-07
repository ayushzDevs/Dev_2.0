const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Connect to MongoDB

main().then((res)=>{ console.log('Connected to MongoDB');})
.catch(err=> console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
}
