import PartyModel from "../models/party.model.js";

const PartyService = {};

PartyService.getPartyInfo = async () => {
	return await PartyModel.find({});
};

export default PartyService;
