import mongoose from 'mongoose';

const WelfareBoardInfoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "Students' Welfare Board"
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

const WelfareBoardInfo = mongoose.model('WelfareBoardInfo', WelfareBoardInfoSchema);

export default WelfareBoardInfo;
