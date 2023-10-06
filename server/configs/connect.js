const mongoose = require("mongoose");

exports.connection = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("successfully connected");
      })
      .catch((err) => {
        console.log(err);
        console.log("database connection problem");
      });
  } catch (error) {
    console.log(error);
  }
};
