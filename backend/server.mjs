import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import clientRoutes from "./routes/routes.mjs";
import Database from "./config/Database.mjs";

//dotenv
config({ path: "./config/.env" });

//creating app
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routes
app.use("/api/v1", clientRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port no. ${process.env.PORT}`);
  Database();
});
