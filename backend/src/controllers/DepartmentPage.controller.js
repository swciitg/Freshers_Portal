import Department from "../models/Departments.model.js";

export const handleGetAllDepts = async (req, res) => {
    try {
        const allDepts = await Department.find({});

        if (allDepts.length === 0) {
            return res.status(404).json({ msg: "No department found" });
        }

        return res.status(200).json(allDepts);
    } catch (error) {
        console.error("Error retrieving all departments:", error);
        return res
            .status(500)
            .json({ msg: "Server error while fetching departments info" });
    }
};
