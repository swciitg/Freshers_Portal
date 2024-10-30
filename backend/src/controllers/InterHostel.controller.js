import interHostel from "../models/InterHostel.model.js";

const InterHostel = async (req, res) => {
    try {
        const InterHostData = await interHostel.find();
        res.status(200).json(InterHostData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export default InterHostel;
