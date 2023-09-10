const Grade = require("../models/grade");

const getGrades = async (req, res) => {
  const grades = await Grade.find();
  return res.status(200).json(grades);
};

const getGrade = async (req, res) => {
  console.log("call of get One grade's function");
  const gradeID = req.params.gradeID;
  const grade = await Grade.findOne({ _id: gradeID });
  if (!grade) {
    return res.status(404).send("Grade not found");
  }
  return res.status(200).json(grade);
};

const createGrade = async (req, res) => {
  console.log(req.body);
  const newGrade = new Grade({
    id: req.body.id,
  });

  // grades.push(newGrade);
  //   res.json(newGrade);
  try {
    newGrade.save().then((newGrade) => {
      return res.status(201).json(newGrade);
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const updateGrade = async (req, res) => {
  const gradeID = req.params.gradeID;
  const foundedGrade = await Grade.findOne({ _id: gradeID });
  if (foundedGrade) {
    const updatedGrade = {
      id: req.body.id,
    };
    console.log(updatedGrade);
    // return res.status(200).json("Grade updated");

    const updateFinished = await Grade.replaceOne(foundedGrade, updatedGrade);
    if (updateFinished) {
      console.log(updateFinished);
    }
  }
};

const deleteGrade = async (req, res) => {
  const gradeID = req.params.gradeID;
  const isDelete = await Grade.findByIdAndRemove({ _id: gradeID });
  if (isDelete) {
    return res.status(200).json("grade deleted");
  }
};

module.exports = {
  getGrades,
  getGrade,
  createGrade,
  updateGrade,
  deleteGrade,
};
