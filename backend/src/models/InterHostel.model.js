// Initialize InterHostel model
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const InterHostelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    wikiUrl: {
        type: String,
        required: true
    },
});
const InterHostel = mongoose.model('InterHostel', InterHostelSchema);
export default InterHostel;