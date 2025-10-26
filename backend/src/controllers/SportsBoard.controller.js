import Sports from "../models/Sports.model.js";
import SportsBoardInfo from "../models/SportsBoardInfo.model.js";

export const SportsBoard = async (req, res) => {
    try {
        const clubs = await Sports.find();
        const boardInfo = await SportsBoardInfo.findOne();
        
        res.status(200).json({
            boardInfo: boardInfo,
            clubs: clubs
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching Sports", error });
    }
};

export default SportsBoard;
