const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");

// 회원가입 라우트
router.post("/signup", register);

// 로그인 라우트
router.post("/login", login);

module.exports = router;
