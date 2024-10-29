import Tech from "../models/Tech.Model.js";

const TechBoard = async (req, res) => {
    try {
        const techBoard = await Tech.find();
        return res.status(200).json(techBoard);
    } catch (error) {
        return res
            .status(500)
            .json({ message: "Error fetching TechBoard", error });
    }
};

export default TechBoard;
