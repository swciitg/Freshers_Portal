import Club from "../models/Clubs.model.js";
import Cult from "../models/Cultural.js";
import CulturalBoardInfo from "../models/CulturalBoardInfo.model.js";

export const handleGetAllClubs = async (req, res) => {
    try {
        const clubs = await Cult.find({});
        const boardInfo = await CulturalBoardInfo.findOne();

        return res.status(200).json({
            boardInfo: boardInfo,
            clubs: clubs
        });
    } catch (error) {
        console.error("Error retrieving all clubs:", error);
        return res
            .status(500)
            .json({ msg: "Server error while fetching clubs info" });
    }
};
