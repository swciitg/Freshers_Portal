import HostelFac from "../models/HostelFac.model.js";

export const HostelFacilities = async (req, res) => {
    try {
        const hostelFacs = await HostelFac.find();
        res.status(200).json(hostelFacs);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching Hostel Facilities",
            error,
        });
    }
};
