const router = require("express").Router();
const db = require("../model/folderModel");

router.get("/", async (req, res) => {
  try {
    const allFolders = await db.findAll();
    res.status(200).json(allFolders);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

//get folders by teacher idea
router.get("/:id", async (req, res) => {
  try {
    const folder = await db.findFoldersByTeacherId(req.params.id);

    res.status(200).json(folder);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.post("/add", async (req, res) => {
  try {
    const newFolder = await db.createFolder(req.body);

    res.status(201).json(newFolder);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.post("/addquiz/:id", async (req, res) => {
  try {
    const { quiz_id } = req.body;

    const ids = {
      folder_id: req.params.id,
      quiz_id
    };

    const addQuizToAssignedFolder = await db.addQuizToFolder(ids);

    res.status(201).json({ msg: "successfully added quiz to folder" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const updatedFolder = await db.update(req.params.id, req.body);

    res.status(202).json(updatedFolder);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const deleteFolder = await db.remove(req.params.id);
    if (!deleteFolder) {
      return res.status(404).json({ message: "folder not found." });
    }

    res.status(202).json(deleteFolder);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.delete("/removequiz/:id", async (req, res) => {
  try {
    const removequiz = await db.RemoveQuizFromFolder(req.params.id);
    console.log(removequiz);
    if (!removequiz) {
      return res.status(404).json({ message: "folder not found." });
    }

    res.status(202).json(removequiz);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
