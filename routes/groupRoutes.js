const express = require("express");
const router = express.Router();

const group = require("../controllers/groupController");

router.get("/group", group.get_group); //form
router.post("/group", group.post_group);
router.get("/groups", group.get_groups);
router.post("/check-group", group.get_group);

module.exports = router;
