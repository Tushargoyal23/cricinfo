const mongoose = require('mongoose');
const mongoUrl = 'mongodb+srv://Tushar:Tushar@cluster0.g5jvoto.mongodb.net/CricInfo?retryWrites=true&w=majority'
const mongoDB = async () => {
    try {
      mongoose.set("strictQuery", false);
      mongoose.connect(mongoUrl);
      console.log("Connected to Mongo Successfully!");

      // checking for data 
      // yaha per bhi try catch lagana padega or await bhi also hum fetched_data add kerte hi data me badal denge taki recalling ke time error na aye
      // bakki chat gpt se kiya hai
    // mongoose.connection.once('open', async () => {
    //     try {
    //       const fetched_data = await mongoose.connection.db.collection("admin").find({}).toArray();
    //     //   console.log(fetched_data);
    //       process.exit(); // Exiting the process after fetching data
    //     } catch (error) {
    //       console.log(error);
    //       process.exit();
    //     }
    //   });
    } catch (error) {
      console.log(error);
      process.exit()
    }
  };
module.exports = mongoDB;