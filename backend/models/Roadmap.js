import mongoose from 'mongoose';
const { Schema } = mongoose;

const RoadmapSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    stream: {
        type: [
            {
                type: String
            }
        ],
        required: true
    },
    tags: {
        type: [
            {
                type: String
            }
        ],
        required: true
    },

    eligibility: {
        type: String,
        required: true
    },
    entranceExams: {
        type: String,
        required: true
    },
    courses: {
        type: String,
    },
    duration: {
        type: Number,
    },
    colleges: {
        type: String,
        required: true
    },
    recruiters: {
        type: String,
        required: true
    },
    averageSalary: {
        type: String,
        required: true
    },
    higherStudies: {
        type: String,
        required: true
    },
    jobProfiles: {
        type: String,
        required: true
    },
}, { timestamps: true })

export default mongoose.model("Roadmap", RoadmapSchema)