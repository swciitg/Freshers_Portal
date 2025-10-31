import express from "express";
import Representative from "../models/Representative.model.js";

const router = express.Router();

// GET /api/admin-data
router.get("/admin-data", async (req, res) => {
  try {
    const docs = await Representative.find().sort({ order: 1, createdAt: 1 }).lean();

    const brData = docs
      .filter((d) => d.category === "br3")
      .map((d) => ({ department: d.department, year: d.year, name_and_no: d.name_and_no }));

    const thirdYearBRs = docs
      .filter((d) => d.category === "br4")
      .map((d) => ({ department: d.department, name_and_no: d.name_and_no }));

    const regionData = docs
      .filter((d) => d.category === "mentor")
      .map((d) => ({ region: d.region, name_and_no: d.name_and_no }));

    res.json({ brData, regionData, thirdYearBRs });
  } catch (err) {
    console.error("Error fetching admin data:", err);
    res.status(500).json({ error: "Failed to fetch admin data" });
  }
});

export default router;
