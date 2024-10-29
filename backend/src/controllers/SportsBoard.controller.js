import Sports from "../models/Sports.model.js";

export const SportsBoard = async (req, res) => {
    try {
        const sports = await Sports.find();
        res.status(200).json(sports);
    } catch (error) {
        res.status(500).json({ message: "Error fetching Sports", error });
    }
};

export default SportsBoard;
