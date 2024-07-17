import express from "express";
import { userRegistration } from "../controllers/clientController.mjs";

const routes = express.Router();

routes.route("/registration").post(userRegistration);

export default routes;
