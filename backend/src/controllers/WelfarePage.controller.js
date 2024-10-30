import Welfare from "../models/Welfare.model.js";

const WelfarePage = async (req, res) => {
    try {
        const welfareData = await Welfare.find();
        res.status(200).json(welfareData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export default WelfarePage;
