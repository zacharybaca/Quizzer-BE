const db = require("../data/dbConfig.js");

module.exports = {
  findFoldersByTeacherId,
  findById,
  createFolder,
  update,
  remove
};

async function findFoldersByTeacherId(teacherId) {
  const folderName = await db("foldersToTeachers as f")
    .join("folders", "folders.id", "f.folder_id")
    .select("folders.folder_name")
    .where("f.teacher_id", teacherId)
    .first();

  const quizIds = await db("foldersToTeachers as f")
    .join("folders", "folders.id", "f.folder_id")
    .select("f.quiz_id")
    .where("f.teacher_id", teacherId);

  return {
    ...folderName,
    quizIds
  };
}

async function createFolder(folderName) {
  const [id] = await db("folders").insert(folderName);

  return findById(id).first();
}

async function update(id, changes) {
  await db("folders")
    .where({ id })
    .update(changes);

  return await findById(id).first();
}

function findById(id) {
  return db("folders").where({ id });
}

async function remove(id) {
  const folder = await findById(id).first();
  await db("folders")
    .where({ id })
    .del();

  return folder;
}