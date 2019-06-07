const router = require("express").Router();

const db = require("../model/UserModel");

// test
// router.get("/", (req, res) => {
//   res.status(200).json("Quizzer: Auth user API is running");
// });

//Check -> means that the endpoint has been tested and is in working order

//Check
router.get("/", (req, res) => {
  db.find()
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//Check
router.get("/:id", (req, res) => {
  db.findById(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(err => res.status(500).json(err));
});

//Check
router.post("/", (req, res) => {
  db.add(req.body)
    .then(user => {
      res.json(user);
    })
    .catch(err => res.status(500).json(err));
});

//Check
router.put("/:id", (req, res) => {
  db.update(req.params.id, req.body)
    .then(users => {
      res.json(users);
    })
    .catch(err => res.status(500).json(err));
});

//Check
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

module.exports = router;
