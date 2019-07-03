const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findBy,
  add,
  findById,
  remove,
  update,
  showStudents,
  showTeachers,
  addStudentToClass
};

function find() {
  return db("students");
}

function findBy(filter) {
  return db("students").where(filter);
}

function findById(id) {
  return db("students")
    .where({ id })
    .first();
}

async function add(user) {
  const [id] = await db("students")
    .returning("id")
    .insert(user);
  return findById(id);
}

function update(id, changes) {
  return db("students")
    .where({ id })
    .update(changes);
}

function addStudentToClass(access) {
  return db("student_teacher").insert(access);
}

function remove(id) {
  return db("students")
    .where("id", id)
    .del();
}

async function showTeachers(id) {
  const teachers = await db("student_teacher")
    .join("students", "students.id", "student_teacher.student_id")
    .join("teachers", "teachers.id", "student_teacher.teacher_id")
    .select(
      "teachers.id",
      "teachers.name",
      "teachers.username",
      "teachers.email"
    )
    .where("students.id", id);

  const student = await db("students")
    .select("name")
    .where("id", id)
    .first();

  const res = {
    [student.name]: { teachers }
  };

  return {
    ...res
  };
}

async function showStudents(id) {
  const students = await db("student_teacher")
    .join("teachers", "teachers.access_code", "student_teacher.access_code")
    .join("students", "students.id", "student_teacher.student_id")
    .select(
      "students.id",
      "students.name",
      "students.username",
      "students.email"
    )
    .where("teachers.id", id);

  const teacher = await db("teachers")
    .select("name")
    .where("id", id)
    .first();

  const res = {
    [teacher.name]: { students }
  };

  return {
    ...res
  };
}
