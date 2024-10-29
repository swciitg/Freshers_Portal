import mongoose from "mongoose";

const ClubSchema = new mongoose.Schema(
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

const Club = mongoose.model("Club", ClubSchema);

export default Club;
