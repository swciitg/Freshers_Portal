import HostelList from "../models/HostelList.model.js";

const ListHostelPage = async (req, res) => {
    try {
        const hostelList = await HostelList.find();
        res.status(200).json(hostelList);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export default ListHostelPage;
