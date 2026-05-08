
const mongoose = require('mongoose');

main().then(()=>{
  console.log('Connected to MongoDB');
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/amazonDB');
}


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
  },
  discount:{
    type:Number,
    default:0
  }

});



const Book = mongoose.model('Book', bookSchema);


Book.findByIdAndUpdate("69fde519f3989763c7b534c9", {price: -100}, {runValidators: true})
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err);
})

// let book1 = new Book({
//     title:'Gone Girl',
//     price:90.99,
// });

// book1.save()
// .then(() => console.log('Book saved'))
// .catch(err => console.log(err));

// Book.insertMany([
//   { title: 'To Kill a Mockingbird', price: 12.99, author: 'Harper Lee' },
//   { title: '1984', price: 9.99, author: 'George Orwell' },
//   { title: 'Moby Dick', price: 15.99, author: 'Herman Melville' }
// ]);

