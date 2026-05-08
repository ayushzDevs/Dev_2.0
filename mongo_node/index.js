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

// emp1.save()
// .then(() => console.log('Employee saved'))
// .catch(err => console.log(err));

// Employee.insertMany([
//   { name: 'Alice Smith', age: 28, email: 'ashjj@mail.com'},
//   { name: 'Bob Johnson', age: 35, email: 'mmajbdj@mail.com'},
//   { name: 'Charlie Brown', age: 22, email: 'mmmmmm@mmmmmail.com'}
// ])
// .then(()=> console.log('Employees inserted'))
// .catch(err => console.log(err));

// Employee.find({age:{$gt:25}}).then((res)=>{
//   console.log(res);
// }).catch(err => console.log(err));

// Employee.updateOne({name:'John Doe'}, {age:31}).then((res)=>{
//   console.log(res);
// }).catch(err => console.log(err));

// Employee.deleteOne({name:'John Doe'}).then((res)=>{
//   console.log(res);
// }).catch(err => console.log(err));

Employee.findOneAndUpdate({name:'Alice Smith'}, {age:15}, {new:false}).then((res)=>{
  console.log(res);
}).catch(err => console.log(err));

const bookSchema = new mongoose.Schema({

  title:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  author:{
    type:String,
  },
  publishedDate:{
    type:Date,
    default:Date.now
  }

})








