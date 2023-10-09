const mongoose = require("mongoose");
const dotenv=require("dotenv");

// env config and env variables
dotenv.config();
const url = process.env.DB_URI;

// setting mongoose default options
mongoose.set('strictQuery', true);

const connectDatabase = () => {
    try{
      // connection to mongoose
      mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true});
      console.log("Database connected successfully");
  }catch(err){
      // if error
      console.log("Error while comnnecting to the database",err);
  }
};

const removeUniqueIndex = () => {
    const Product = mongoose.model('Product'); 
  
    // Remove the unique index on the "slug" field
    Product.collection.dropIndex('slug_1', function (err, result) {
      if (err) {
        console.error('Error removing unique index on slug field:', err);
      } else {
        console.log('Unique index on slug field removed');
      }
    });
  };



module.exports = connectDatabase;
