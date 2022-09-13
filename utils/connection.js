import mongoose from "mongoose";

const connectionToMongo = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://giedrevalanciute:Laime11*@cluster0.rh0wek1.mongodb.net/animals?retryWrites=true&w=majority"
    );
    console.log("Connected to DB!");
  } catch (error) {
    console.error(error);
  }
};

export default connectionToMongo;
