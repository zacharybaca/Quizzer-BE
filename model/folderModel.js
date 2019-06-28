const db = require("../data/dbConfig.js");

module.exports = {
  findFoldersByTeacherId,
  findById,
  createFolder,
  update,
  remove,
  addQuizToFolder,
  RemoveQuizFromFolder,
  findByQuizId,
  findAll
};

function findAll() {
  return db("folders");
}

async function findFoldersByTeacherId(teacherId) {
  const folders = await db("folders as f").where("f.teacher_id", teacherId);

  const folderQuizzes = await db("folders as f")
    .join("foldersToTeachers as ft", "ft.folder_id", "f.id")
    .join("quizzes as q", "ft.quiz_id", "q.id")
    .where("f.teacher_id", teacherId);

  let result = { folders };
  result.quizzes = folderQuizzes;

  return result;
}

async function createFolder(folderName) {
  const [id] = await db("folders")
    .returning("id")
    .insert(folderName);

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

function findByQuizId(id) {
  return db("foldersToTeachers").where({ id });
}

async function remove(id) {
  const folder = await findById(id).first();
  await db("folders")
    .where({ id })
    .del();

  return folder;
}

function addQuizToFolder(data) {
  return db("foldersToTeachers").insert(data);
}

function RemoveQuizFromFolder(quiz_id) {
  return db("foldersToTeachers")
    .where({ quiz_id })
    .del();
}
