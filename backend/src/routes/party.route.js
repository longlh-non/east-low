import express from "express";
import PartyController from "../controllers/party.controller.js";

const router = express.Router();

router.get("/", (req, res) => PartyController.getPartyInfo());

export default router;