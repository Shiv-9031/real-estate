import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config/.env" });
async function Database() {
  try {
    const connDb = await mongoose.connect(process.env.DB_CONN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`connected to database ${connDb.connection.host}`);
  } catch (error) {
    console.log(error);
  }
}

export default Database;
