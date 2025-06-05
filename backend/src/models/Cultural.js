import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const CultSchema = new Schema({
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
const Cult = mongoose.model('Cult', CultSchema);
export default Cult;