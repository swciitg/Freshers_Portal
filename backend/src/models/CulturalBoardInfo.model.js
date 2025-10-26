import mongoose from 'mongoose';

const CulturalBoardInfoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: 'Cultural Board'
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

const CulturalBoardInfo = mongoose.model('CulturalBoardInfo', CulturalBoardInfoSchema);

export default CulturalBoardInfo;
