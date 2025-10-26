import Tech from "../models/Tech.Model.js";
import TechBoardInfo from "../models/TechBoardInfo.model.js";

const TechBoard = async (req, res) => {
    try {
        const clubs = await Tech.find();
        const boardInfo = await TechBoardInfo.findOne();
        
        return res.status(200).json({
            boardInfo: boardInfo,
            clubs: clubs
        });
    } catch (error) {
        return res
            .status(500)
            .json({ message: "Error fetching TechBoard", error });
    }
};

export default TechBoard;
