import Fest from "../models/Fest.model.js";

export const handleGetAllFests = async (req, res) => {
    try {
        const allFests = await Fest.find({});

        if (allFests.length === 0) {
            return res.status(404).json({ msg: "No fest found" });
        }

        return res.status(200).json(allFests);
    } catch (error) {
        console.error("Error retrieving all fests:", error);
        return res
            .status(500)
            .json({ msg: "Server error while fetching fests info" });
    }
};
