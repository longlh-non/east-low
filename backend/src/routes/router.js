import express from "express";
import partyRouter from "./party.route.js";
const apiRoute = express();

apiRoute.use("/party-info", partyRouter);

export default apiRoute; 
