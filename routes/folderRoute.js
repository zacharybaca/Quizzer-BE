const router = require("express").Router();
const db = require("../model/folderModel");

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
    console.log(req.body);
    const newFolder = await db.createFolder(req.body);
    console.log(newFolder);
    res.status(201).json(newFolder);
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

module.exports = router;
