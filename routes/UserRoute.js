const router = require("express").Router();
const passport = require("passport");
const db = require("../model/UserModel");
// test
// router.get("/", (req, res) => {
//   res.status(200).json("Quizzer: Auth user API is running");
// });

router.get("/", (req, res) => {
  db.find()
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  db.findById(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(err => res.status(500).json(err));
});

router.post("/", (req, res) => {
  db.add(req.body)
    .then(user => {
      res.json(user);
    })
    .catch(err => res.status(500).json(err));
});

router.put("/:id", (req, res) => {
  db.update(req.params.id, req.body)
    .then(users => {
      res.json(users);
    })
    .catch(err => res.status(500).json(err));
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteUser = await db.remove(req.params.id);
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(500).json({
      message: "Error deleting User"
    });
  }
});

// router.get('/users', db.getUsers);

// // router.get('/users', (req, res) => {
// //   res.status(200).json(db.getUsers);
// // });

// router.get('/users/:id', (req, res) => {
//   res.status(200).json(db.getUserById);
// });

// router.post('/users', (req, res) => {
//   res.status(200).json(db.createUser);
// });

// router.put('/users/:id', (req, res) => {
//   res.status(200).json(db.updateUser);
// });

// router.delete('/users/:id', (req, res) => {
//   res.status(200).json(db.deleteUser);
// });

module.exports = router;
