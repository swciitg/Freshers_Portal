import mongoose from "mongoose";

const ContactPeopleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        title: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        imagePath: {
            type: String,
        },
    },
    { timestamps: true }
);

const ContactPeople = mongoose.model("ContactPeople", ContactPeopleSchema);

export default ContactPeople;
