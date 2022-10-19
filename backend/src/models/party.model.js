import mongoose from "mongoose";

const { Schema } = mongoose;


const PartySchema = Schema({
	name: String
});

const PartyModel = mongoose.model("Parties", PartySchema, "parties");

export default PartyModel;