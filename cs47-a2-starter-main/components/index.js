import bodyParser from "body-parser";
import express from "express";

const NAMES = [
  ["Michael", "Chang"], ["Dhruva", "Bansal"], ["Danielle", "Cruz"], ["Michelle", "Liu"],
  ["Andrew", "Tang"], ["Eli", "Wald"], ["Meredith", "Xu"]
];
const STUDENTS = Object.fromEntries(NAMES.map(([firstName, lastName]) => {
  let id = (firstName[0] + lastName).toLowerCase();
  return [id, { id, firstName, lastName, dept: null }];
}));

const ENROLLED = Object.fromEntries(Object.keys(STUDENTS).map(id => [id, []]));


let myApi = express.Router();
/* Parse request bodies as JSON */
myApi.use(bodyParser.json());

myApi.get("/", (req, res) => {
  res.json({ message: "Hello, world!" });
});

myApi.get("/students", (req, res) => {
  let students = Object.values(STUDENTS);
  let filter = req.query.q;
  if (filter) students = students.filter(s => `${s.firstName} ${s.lastName}`.toLowerCase().includes(filter));
  res.json({ students });
});

/* Can't do this; requests may be handled in parallel */
//let curStudent = null;

myApi.use("/students/:id", (req, res, next) => {
  let id = req.params.id;
  let student = STUDENTS[id];
  if (!student) {
    res.status(404).json({ error: `No student with ID ${id}` });
    /* Returns an error, don't call next; we have handled the request */
    return;
  }
  /* res.locals: variables associated with this request/response pair */
  res.locals.student = student;
  res.locals.courses = ENROLLED[id];
  /* Keep processing this request */
  next();
});

myApi.get("/students/:id", (req, res) => {
  let student = res.locals.student;
  let courses = res.locals.courses;
  res.json({ ...student, courses });
});

myApi.patch("/students/:id", (req, res) => {
  let student = res.locals.student;
  let update = req.body;
  student.dept = update.dept;
  //TODO: Handle name change
  /* Clean up the input */
  if (student.dept.toLowerCase() === "cs")
    student.dept = "Computer Science";
  res.json(student);
});

myApi.post("/students/:id/enroll", (req, res) => {
  let { course } = req.body;
  /* Equivalent to: let course = req.body.course; */
  let { courses } = res.locals;
  courses.push(course);
  res.json({ success: true });
});

/* Takes Express app, does API setup, adds routes to app */
const initApi = async app => {
  app.set("json spaces", 2);
  app.use("/api", myApi);
};

export default initApi;
