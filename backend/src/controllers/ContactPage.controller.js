import ContactForm from "../models/ContactForm.model.js";
import ContactPeople from "../models/ContactPeople.model.js";

export const handleGetContactPeople = async (req, res) => {
    try {
        const contactPeople = await ContactPeople.find({});

        if (contactPeople.length === 0) {
            return res.status(404).json({ msg: "No contact people found" });
        }

        return res.status(200).json(contactPeople);
    } catch (error) {
        console.error("Error retrieving contact people:", error);
        return res
            .status(500)
            .json({ msg: "Server error while fetching contact people" });
    }
};

export const handleContactForm = async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
        return res.status(400).json({ msg: "All fields are required" });
    }

    try {
        const contactForm = await ContactForm.create({
            name,
            email,
            phone,
            message,
        });

        return res
            .status(201)
            .json({ msg: "Form saved successfully", contactForm });
    } catch (error) {
        console.error("Error saving contact form:", error);
        return res
            .status(500)
            .json({ msg: "Server error while saving contact form" });
    }
};
