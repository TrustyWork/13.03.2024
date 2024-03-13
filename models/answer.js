import mongoose, { Schema } from 'mongoose';

import './question.js';

const { ObjectID } = Schema.Types;

const schema = new Schema({
    question: { type: ObjectID, ref: 'question' },
    content: { type: String }
}, { timestamps: true });


const model = mongoose.model('answer', schema);
export default model;
