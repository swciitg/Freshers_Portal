import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const HostelFacSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    imageUrl: {
        type: String,
        required: true
    },
    wikiUrl: {
        type: String,
        required: true
    }
});
const HostelFac = mongoose.model('HostelFac', HostelFacSchema);
export default HostelFac;