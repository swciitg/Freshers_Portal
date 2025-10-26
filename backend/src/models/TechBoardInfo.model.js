import mongoose from 'mongoose';

const TechBoardInfoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: 'Technical Board'
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

const TechBoardInfo = mongoose.model('TechBoardInfo', TechBoardInfoSchema);

export default TechBoardInfo;
