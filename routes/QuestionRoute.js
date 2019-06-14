const router = require("express").Router();

const db = require('../model/QuestionModel');

//Check -> means that the endpoint has been tested and is in working order

// test
router.get("/", (req, res) => {
    res.status(200).json("Quizzer: Question Route API is running");
});

//Check
router.get('/question', (req, res) => {
  db.find()
  .then(user => {
    res.json(user);
  })
  .catch(err => {
    res.status(500).json(err)});
})

//Check
router.get('/question/:id', (req, res) => {
  db.findById(req.params.id)
  .then(user => {
      res.json(user);
  })
  .catch(err => 
      res.status(500).json(err));
});

//Check
router.post('/question', (req, res) => {
  db.add(req.body)
  .then(user => {
    res.json(user);
  })
  .catch(err =>
    res.status(500).json(err));
});
  
//Check
router.put('/question/:id', (req, res) => {
  db.update(req.params.id, req.body)
    .then(users => {
      res.json(users);
    })
    .catch(err => 
      res.status(500).json(err));
});
  
//Check
router.delete('/question/:id', async (req, res) => {
  try {
    const deleteQuest = await db.remove(req.params.id);
    res.status(200).json(deleteQuest);
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting Question',
    });
  }
});

module.exports = router;