const path = require("path");
const fs = require("fs");
const Payments = require("../models/payment");
const Peoples = require("../models/peoples");
const Groups = require("../models/group");

module.exports = {
  get_home: (req, res) => {
    res.render("home");
  },

  get_cn: (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "cn.html"));
  },
};
