import AnswerModel from '../models/answer.js';
import QuestionModel from '../models/question.js';

const createQuestion = async (question, answers) => {
    const doc = await AnswerModel.create({ content: question, ans_var: answers});
    const id = doc.id;
    return id;
}

const getRandQuestion = async () => {
    // await Model.find( умова , масив які поля треба витягнути);
    const docs = await QuestionModel.find({}, [ '_id' ]);

    if(!docs) { // якщо в базі немає питань
        return null;
    }

    // (не писав але тут має бути) перемішати айдішники, витягнути рандомний
    const id = docs[0].id;
    
    const doc = await QuestionModel.findById(id);

    const result = {
        id: doc.id,
        content: doc.content,
        answers: doc.ans_var
    }

    return result;
}


const createnewAnswer = async (questionId, answer) => {
    await AnswerModel.create({ 
        question: questionId,
        content: answer
    });
}

export { 
    createQuestion,
    getRandQuestion,
    createnewAnswer
};
