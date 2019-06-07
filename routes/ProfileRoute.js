const router = require("express").Router();

const dbt = require('../model/TeacherModel');
const dbs = require('../model/StudentModel');

const knex = require('knex');

const knexConfig = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: './data/quizzer.db3'
    }
}

const db = knex(knexConfig);

//Check -> means that the endpoint has been tested and is in working order

// test
router.get("/", (req, res) => {
  res.status(200).json("Quizzer: Profile Route API is running");
});

// Teacher routes

//Check
router.get('/teacher', (req, res) => {
  dbt.find()
  .then(user => {
    res.json(user);
  })
  .catch(err => {
    res.status(500).json(err)});
})

//Check 
router.get('/teacher/:id', (req, res) => {
  dbt.findById(req.params.id)
  .then(user => {
      res.json(user);
  })
  .catch(err => 
      res.status(500).json(err));
});

//Check
// router.get('/teacher/:id', (req, res) => {
//   const { id } = req.params;
//   db('teacher')
//   .where({ id: id })
//   .first()
//   .then(student => {
//       db('student')
//         .where({ teacher_id: id }).then(teacher => {
//        (student.teacher = teacher);
//          return res.status(200).json(student);
//         });
//       })
//         .catch(err => {
//           res.status(500).json({ Error: "There was an error getting that" })
//       });
//    })

//works but not as intended
// router.get('/student/:id',async (req, res) => {
//   const { id } = req.params;
//  try {
//    const get = await db('student').join('teacher','student.id','teacher.student_id').select("*").where("teacher.id",id).first()
//   res.status(200).json(get)
//  } catch (err) {
//    res.status(500).json({msg:err.message})
//  }
// })

//Check
router.post('/teacher', (req, res) => {
  dbt.add(req.body)
  .then(user => {
      res.json(user);
  })
  .catch(err =>
      res.status(500).json(err));
});  

//Check
router.put('/teacher/:id', (req, res) => {
  dbt.update(req.params.id, req.body)
    .then(users => {
      res.json(users);
    })
    .catch(err => 
      res.status(500).json(err));
});

//Check
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

//Check
router.get('/student', (req, res) => {
  dbs.find()
  .then(user => {
    res.json(user);
  })
  .catch(err => {
    res.status(500).json(err)});
})

//Check
router.get('/student/:id', (req, res) => {
  dbs.findById(req.params.id)
  .then(user => {
      res.json(user);
  })
  .catch(err => 
      res.status(500).json(err));
});

//Check
// router.get('/student/:id', (req, res) => {
//   const { id } = req.params;
//   db('student')
//   .where({ id: id })
//   .first()
//   .then(teacher => {
//       db('teacher')
//         .where({ student_id: id }).then(student => {
//        (teacher.student = student);
//          return res.status(200).json(teacher);
//         });
//       })
//       .catch(err => {
//           res.status(500).json({ Error: "There was an error getting that" })
//       });
//    })

//Check
router.post('/student', (req, res) => {
  dbs.add(req.body)
  .then(user => {
      res.json(user);
  })
  .catch(err =>
      res.status(500).json(err));
});

//Check
router.put('/student/:id', (req, res) => {
  dbs.update(req.params.id, req.body)
    .then(users => {
      res.json(users);
    })
    .catch(err => 
      res.status(500).json(err));
});

//Check
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
