const router = require("express").Router();

const LoginRouter = require('./login');
const ClassRouter = require('./class');
//const EventRouter = require('./event');
//const ResultRouter = require('./result');
//const SchoolSubjectRouter = require('./schoolSubject');
const TaskRouter = require('./task');
//const TestRouter = require('./test');


router.use("/login",LoginRouter);
router.use("/class", ClassRouter);
//router.use("/events", EventRouter);
//router.use("/results", ResultRouter);
//router.use("/schoolSubject", SchoolSubjectRouter);
router.use("/tasks", TaskRouter);

//router.use("/test", TestRouter);

router.use("*",(req, res) => {res.sendStatus(404);}); //le cas ou la route demandée n'existe pas

module.exports = router;