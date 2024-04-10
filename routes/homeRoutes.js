const express = require("express");
const router = express.Router();

const home = require("../controllers/homeController");

router.get(["/home", "/"], home.get_home);
router.get("/home1", home.get_home1);
router.get("/cn", home.get_cn);

module.exports = router;
