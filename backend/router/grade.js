const express = require("express");

const router = express.Router();

const {
  getGrades,
  getGrade,
  createGrade,
  updateGrade,
  deleteGrade,
} = require("../controllers/grade.js");

router.get("/grade", getGrades);

router.get("/grade/:gradeID", getGrade);

router.post("/grade", createGrade);

router.put("/grade/:gradeID", updateGrade);

router.delete("/grade/:gradeID", deleteGrade);

module.exports = router;
