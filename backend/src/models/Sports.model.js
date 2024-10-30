import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const SportsSchema = new Schema({
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
    iconUrl: {
        type: String,
        required: true
    },
});

const Sports = mongoose.model('Sports', SportsSchema);
export default Sports;