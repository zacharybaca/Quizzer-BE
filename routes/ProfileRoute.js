const router = require("express").Router();

const dbt = require('../model/TeacherModel');
const dbs = require('../model/StudentModel');

// test
router.get("/", (req, res) => {
  res.status(200).json("Quizzer: Profile Route API is running");
});

// Teacher routes
router.get('/teacher', (req, res) => {
  dbt.find()
  .then(user => {
    res.json(user);
  })
  .catch(err => {
    res.status(500).json(err)});
})

router.get('/teacher/:id', (req, res) => {
  dbt.findById(req.params.id)
  .then(user => {
      res.json(user);
  })
  .catch(err => 
      res.status(500).json(err));
});

router.post('/teacher', (req, res) => {
  dbt.add(req.body)
  .then(user => {
      res.json(user);
  })
  .catch(err =>
      res.status(500).json(err));
});  

router.put('/teacher/:id', (req, res) => {
  dbt.update(req.params.id, req.body)
    .then(users => {
      res.json(users);
    })
    .catch(err => 
      res.status(500).json(err));
});

router.delete('/teacher/:id', async (req, res) => {
  try {
    const deleteUser = await dbt.remove(req.params.id);
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting User',
    });
  }
});

// Student Routes
router.get('/student', (req, res) => {
  dbs.find()
  .then(user => {
    res.json(user);
  })
  .catch(err => {
    res.status(500).json(err)});
})

router.get('/student/:id', (req, res) => {
  dbs.findById(req.params.id)
  .then(user => {
      res.json(user);
  })
  .catch(err => 
      res.status(500).json(err));
});

router.post('/student', (req, res) => {
  dbs.add(req.body)
  .then(user => {
      res.json(user);
  })
  .catch(err =>
      res.status(500).json(err));
});

router.put('/student/:id', (req, res) => {
  dbs.update(req.params.id, req.body)
    .then(users => {
      res.json(users);
    })
    .catch(err => 
      res.status(500).json(err));
});

router.delete('/student/:id', async (req, res) => {
  try {
    const deleteUser = await dbs.remove(req.params.id);
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting User',
    });
  }
});

module.exports = router;
