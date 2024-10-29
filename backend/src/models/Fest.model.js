import mongoose from "mongoose";

const FestSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        imagePath: {
            type: String,
            required: true,
        },
        iconPath: {
            type: String,
            required: true,
        },
        wikiurl: {
            type: String,
        },
    },
    { timestamps: true }
);

const Fest = mongoose.model("Fest", FestSchema);

export default Fest;
