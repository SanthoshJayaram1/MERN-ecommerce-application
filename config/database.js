const mongoose = require("mongoose");
const dotenv=require("dotenv");

// env config and env variables
dotenv.config();
const url = process.env.DB_URI;

// setting mongoose default options
mongoose.set('strictQuery', true);

const connectDatabase = () => {
    mongoose
        .connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((con) => {
            console.log(
                `MongoDB Database connected with HOST: ${con.connection.host}`
            );
            // removeUniqueIndex();
        });
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
