import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const WelfareSchema = new Schema({
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
    iconUrl: {
        type: String,
        required: true
    },
    wikiUrl: {
        type: String,
        required: true
    },
});
const Welfare = mongoose.model('Welfare', WelfareSchema);
export default Welfare;