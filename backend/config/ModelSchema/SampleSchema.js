import mongoose, { mongo } from "mongoose";

// 1 - Create a Schema
// 2 - Create a Model out of that Schema
// 3 - Export the Model

const SampleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
    age: {
        type: Number,
        required: true,
    },
}, 
{timestamps: true} //automatically creates createdAt and updatedAt fields
);

const SampleModel = mongoose.model("SampleDocument", SampleSchema);

export default SampleModel;