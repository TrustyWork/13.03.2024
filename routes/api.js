import { Router } from 'express';
import { getRandQuestion, createnewAnswer } from '../ctrl/questans.js';

const router = Router();

/* GET home page. */
router.get('/question/getRand', async (req, res) => {
  // valid
  
  const id = await getRandQuestion();
  res.json({ id });
});

router.get('/answer/new', async (req, res) => {
  // valid
  
  const { questionId, answer } = req.body;
  await createnewAnswer( questionId, answer );
  
  res.json('ok');
});

export default router;
