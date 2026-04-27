const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://sn885394_db_user:xtwqFL1028o2nOaV@cluster0.c7ymwow.mongodb.net/mern_ai?retryWrites=true&w=majority'
)
.then(() => {
  console.log("✅ database connected");
})
.catch(err => {
  console.log("something is error");
  console.log(err.message);
});