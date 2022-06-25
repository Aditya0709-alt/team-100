const express = require("express");
const router = express.Router();
const {
  getAllTaDetail,
  getAllTeacherDetail,
  getSessionDetail,
    getTaDetail,
    getTeacherDetail,
} = require("../controllers/getDataController");

router.get("/alltadetail", getAllTaDetail);

router.get("/allteacherdetail", getAllTeacherDetail);

router.get("/tadetail", getTaDetail);

router.get("/teacherdetail", getTeacherDetail);

//router.get("/sessiondetail", getSessionDetail);

module.exports = router;
