import Club from "../models/Clubs.model.js";
import Cult from "../models/Cultural.js";

export const handleGetAllClubs = async (req, res) => {
    try {
        const allClubs = await Cult.find({});

        if (allClubs.length === 0) {
            return res.status(404).json({ msg: "No clubs found" });
        }

        return res.status(200).json(allClubs);
    } catch (error) {
        console.error("Error retrieving all clubs:", error);
        return res
            .status(500)
            .json({ msg: "Server error while fetching clubs info" });
    }
};
