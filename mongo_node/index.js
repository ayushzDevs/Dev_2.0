const mongoose = require('mongoose');

main().then(()=>{
  console.log('Connected to MongoDB');
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/mydb');
}

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
})

const Employee = mongoose.model('Employee', userSchema);

const emp1 = new Employee({
  name: 'John Doe',
  age: 30,
  email: 'ash@123mail.com'});

emp1.save()
.then(() => console.log('Employee saved'))
.catch(err => console.log(err));

Employee.find()
.then(employees => console.log(employees))
.catch(err => console.log(err));