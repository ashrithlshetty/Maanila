const path = require("path");
const fs = require("fs");
const Payments = require("../models/payment");
const Peoples = require("../models/peoples");
const Groups = require("../models/group");

module.exports = {
  get_home: async (req, res) => {
    res.render("home");
  },

  get_cn: async (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "cn.html"));
  },
};
