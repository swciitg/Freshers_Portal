import mongoose from "mongoose";

const FacilitySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        imagePath: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Facility = mongoose.model("Facility", FacilitySchema);

export default Facility;
