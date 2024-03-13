import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
    content: { type: String },
    ans_var: [{ type: String }]
}, { timestamps: true });


const model = mongoose.model('question', schema);
export default model;
