const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findBy,
  add,
  findById,
  remove,
  update,
  getQuizByTeacher,
  getQuizByStudent,
  getQuizWithQuestions,
  correctAnswers
};

function find() {
  return db("quizzes");
}

function findBy(filter) {
  return db("quizzes").where(filter);
}

async function add(data) {
  const [id] = await db("quizzes").insert(data);

  return findById(id);
}

function findById(id) {
  return db("quizzes")
    .where({ id })
    .first();
}

function update(id, changes) {
  return db("quizzes")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("quizzes")
    .where("id", id)
    .del();
}

async function getQuizByTeacher(id) {
  const quizzes = await db("quizzes")
    .select("id", "class_average")
    .where("quizzes.teacher_id", id);

  return {
    quizzes
  };
}

async function getQuizByStudent(id) {
  const student = await db("students")
    .where({ id })
    .first();

  const quizzes = await db("student_teacher")
    .join("teachers", "student_teacher.access_code", "teachers.access_code")
    .join("quizzes", "quizzes.teacher_id", "teachers.id")
    .select("*")
    .where("student_teacher.student_id", id);

  return {
    student,
    quizzes
  };
}

async function getQuizWithQuestions(id) {
  const quiz = await db("quizzes")
    .join("questions", "questions.quiz_id", "quizzes.id")
    .select("*")
    .where("quizzes.id", id);

  return {
    quiz
  };
}

async function correctAnswers(id) {
  const options = await db("quizzes")
    .join("questions", "questions.quiz_id", "quizzes.id")
    .select("questions.correct_answer")
    .where("quizzes.id", id);

  return {
    options
  };
}
