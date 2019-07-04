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
  correctAnswers,
  testCompleted,
  deleteStudentToQuiz,
  findByStudentAndQuiz
};

function find() {
  return db("quizzes");
}

function findBy(filter) {
  return db("quizzes").where(filter);
}

function testCompleted(data) {
  return db("studentToQuiz").insert(data);
}

function findByStudentAndQuiz(quiz_id) {
  return db("studentToQuiz").where({ quiz_id });
}

function deleteStudentToQuiz(quiz_id) {
  return db("studentToQuiz")
    .where({ quiz_id })
    .del();
}

async function add(data) {
  const [id] = await db("quizzes")
    .returning("id")
    .insert(data);

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

async function remove(id) {
  await db("questions")
    .where("quiz_id", id)
    .del();

  return await db("quizzes")
    .where("id", id)
    .del();
}

function getQuizByTeacher(id) {
  return db("quizzes")
    .select("*")
    .where("quizzes.teacher_id", id);
}

async function getQuizByStudent(id) {
  const student = await db("students")
    .where({ id })
    .first();

  const quizzes = await db("student_teacher")
    .join("teachers", "student_teacher.access_code", "teachers.access_code")
    .join("quizzes", "quizzes.teacher_id", "teachers.id")
    // .join("studentToQuiz as sq", "sq.student_id", "student_teacher.student_id")hi
    .select("student_teacher.*", "quizzes.*", "teachers.name")
    .where("student_teacher.student_id", id);

  const completedQuizzes = await db("studentToQuiz as sq")
    .join("quizzes", "sq.quiz_id", "quizzes.id")
    .select("sq.quiz_id", "quizzes.*")
    .where("sq.student_id", id);

  return {
    student,
    quizzes,
    completedQuizzes
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
