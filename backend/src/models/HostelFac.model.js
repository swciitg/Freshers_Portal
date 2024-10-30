import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const HostelFacSchema = new Schema({
    name: {
        type: Schema.Types.ObjectId,
        ref: 'Hostel',
        required: true
    },
    description: {
        type: Schema.Types.ObjectId,
        ref: 'Facility',
        required: true
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