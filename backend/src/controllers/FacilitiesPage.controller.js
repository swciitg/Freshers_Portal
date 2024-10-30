import Facility from "../models/Facilities.model.js";

export const handleGetAllFacilities = async (req, res) => {
    try {
        const allFacilities = await Facility.find({});

        if (allFacilities.length === 0) {
            console.log("HandleAllFacilities");
            return res.status(404).json({ msg: "No facilities found" });
        }

        return res.status(200).json(allFacilities);
    } catch (error) {
        console.error("Error retrieving all facilities:", error);
        return res
            .status(500)
            .json({ msg: "Server error while fetching facilities info" });
    }
};
