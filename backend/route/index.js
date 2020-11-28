const router = require("express").Router();

const ClassRouter = require('./class');
const EventRouter = require('./event');
const PupilRouter = require('./pupil');
const ResultRouter = require('./result');
const SchoolSubjectRouter = require('./schoolSubject');
const TaskRouter = require('./task');
const TeacherRouter = require('./teacher');
const TestRouter = require('./test');



router.use("/class", ClassRouter);
router.use("/event", EventRouter);
router.use("/pupil", PupilRouter);
router.use("/result", ResultRouter);
router.use("/schoolSubject", SchoolSubjectRouter);
router.use("/task", TaskRouter);
router.use("/teacher", TeacherRouter);
router.use("/test", TestRouter);

module.exports = router;
