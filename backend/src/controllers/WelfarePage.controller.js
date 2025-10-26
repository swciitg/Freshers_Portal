import Welfare from "../models/Welfare.model.js";
import WelfareBoardInfo from "../models/WelfareBoardInfo.model.js";

const WelfarePage = async (req, res) => {
    try {
        const clubs = await Welfare.find();
        const boardInfo = await WelfareBoardInfo.findOne();
        
        res.status(200).json({
            boardInfo: boardInfo,
            clubs: clubs
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export default WelfarePage;
