import { Router } from 'express';
import { createQuestion } from '../ctrl/questans.js';

const router = Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('admin');
});

// створеня питань у адмінці
router.post('/question/create', async (req, res) => {
  // Valid!
  const { question, answers } = req.body;
  const id = await createQuestion(question, answers);

  res.json({ id });
});

export default router;
