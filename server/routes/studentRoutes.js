const express = require("express");
const router = express.Router();

const Student = require("../models/Student");

// GET All Students
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// ADD Student
router.post("/", async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.status(201).json(student);
});

// UPDATE Student
router.put("/:id", async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(student);
});

// DELETE Student
router.delete("/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);

  res.json({
    message: "Student Deleted Successfully",
  });
});

module.exports = router;