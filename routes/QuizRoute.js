const router = require("express").Router();

const db = require('../model/QuizModel')

// test
router.get("/", (req, res) => {
  res.status(200).json("Quizzer: Auth Quiz API is running");
});


router.get('/quizzes', async (req, res) => {
  const rows = await db.find();

  res.status(200).json(rows);
});

router.get('/quizzes/:id', (req, res) => {
  try {
    db.findById(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
  } catch(err){
      res.status(422).json({message: `Database error`  });
    } 
});

router.post('/create', async (req, res) => {
  try {
      const Data = req.body
      //console.log(Data)
      if(Data.quiz_name, Data.quiz_description, Data.quiz_question) {
          const result = await db.add(Data)
          //console.log('result:', result)
          res.status(201).json({message: `Quiz Successfuly added `})
      } else {
      res.status(422).json({ error: 'Missing data' })
      }
  } catch(err) {
      res.status(500).json({ error: 'Dtabase error' })
  }
})
router.put('/quizzes/:id', async (req, res) => {
  try {
      const Data = req.body
      const { id } = req.params
      //console.log(id)

      if(Data) {
          const array = await db.update(id, Data)
          //console.log(Data)
          res.status(200).json({ message: `The id # ${id} has been edited`})
      } else {
          res.status(422).json({ error: 'Missing required fields' })
      }
  } catch(err) {
      res.status(500).json({ error: 'Database error' })
  }
})

router.delete('/quizzes/:id', async (req, res) => {
  try {
    const deleteUser = await db.remove(req.params.id);
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting User',
    });
  }
});

// router.put('/quizzes/:id', async (req, res) => {
//  try {
//    const user = await db.update(req.params.id, req.body);
//     if (user) {
//       res.status(200).json(user);
//     } else {
//       res.status(404).json({
//         message: `The quiz ${id} doesn't exist`
//       })
//     }
//  } catch (err) {
//    console.log(err);
//    res.status(500).json({
//      message: 'An error has occured, no quiz was logged'
//    });
//  }
// });

// router.put('/quizzes/:id', (req, res) => {
//   db.update(req.params.id, req.body)
//     .then(users => {
//       res.json(users);
//     })
//     .catch(err => 
//       res.status(500).json(err));
// });



module.exports = router;
