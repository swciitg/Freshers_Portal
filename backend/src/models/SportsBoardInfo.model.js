import mongoose from 'mongoose';

const SportsBoardInfoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: 'Sports Board'
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
        default: '#'
    },
    headName: {
        type: String,
        default: ''
    }
}, { timestamps: true });

const SportsBoardInfo = mongoose.model('SportsBoardInfo', SportsBoardInfoSchema);

export default SportsBoardInfo;
