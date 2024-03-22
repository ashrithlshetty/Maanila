const path = require("path");
const Payments = require("../models/payment");
const Peoples = require("../models/peoples");
const Groups = require("../models/group");

module.exports = {
  get_home: async (req, res) => {
    res.render("home");
  },
};
