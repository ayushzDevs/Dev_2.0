
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
  }

});



const Book = mongoose.model('Book', bookSchema);


let book1 = new Book({
    title:'The Great Gatsby',
    price:10.99,
    author:'F. Scott Fitzgerald'
});

book1.save()
.then(() => console.log('Book saved'))
.catch(err => console.log(err));

Book.insertMany([
  { title: 'To Kill a Mockingbird', price: 12.99, author: 'Harper Lee' },
  { title: '1984', price: 9.99, author: 'George Orwell' },
  { title: 'Moby Dick', price: 15.99, author: 'Herman Melville' }
]);

