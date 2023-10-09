const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose
        .connect(process.env.DB_URI, {
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
