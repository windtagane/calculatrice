import express from 'express';
const router = express.Router();

const main_dir = process.cwd();
/* GET home page. */
router.get('/calculatrice', function(req, res, next) {
  res.render(main_dir + '/views/index', { title: 'Express' });
});

export default router;
