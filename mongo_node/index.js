const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://root:Ayush1980@cluster0.vnt1fdx.mongodb.net/?appName=Cluster0');


// Define a schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

// Create a model
const User = mongoose.model('User', userSchema);

// Example usage: Create a new user
const newUser = new User({
  name: 'John Doe',
  email: 'john.doe@example.com',
  age: 30
});

console.log('New user created:', newUser);

