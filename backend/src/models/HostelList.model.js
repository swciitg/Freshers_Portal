import e from 'express';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const HostelListSchema = new Schema({
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
    gender: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    }
});

const HostelList = mongoose.model('HostelList', HostelListSchema);
export default HostelList;