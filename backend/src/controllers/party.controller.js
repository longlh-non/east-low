import PartyService from '../services/party.service.js';
const PartyController = {};

PartyController.getPartyInfo = async (req, res) => {
	try {
		const partyInfo = await PartyService.getPartyInfo();
		res.status(200).json({partyInfo});
	} catch (err) {
		res.status(400)
	}
}

export default PartyController;