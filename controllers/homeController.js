const path = require("path");
const fs = require("fs");
const Payments = require("../models/payment");
const Peoples = require("../models/peoples");
const Groups = require("../models/group");

module.exports = {
  get_home: (req, res) => {
    res.render("home");
  },

  get_home1: async (req, res) => {
    const count = await Groups.find({}).count();
    const members = await Peoples.find({}).count();
    const userArr = await Payments.find({}).limit(3);
    console.log(count);
    console.log(members);
    const arr = await Payments.find();

    let netMonthly = 0;
    let netYearly = 0;

    arr.map((user) => {
      const user1 = user.monthly_pay[2024];
      user1.forEach((obj) => {
        netMonthly += obj.amount;
      });
    });

    arr.map((user) => {
      const user1 = user.yearly_pay[2024];
      user1.forEach((obj) => {
        netYearly += obj.amount;
      });
    });

    const netAmount = netMonthly + netYearly;
    console.log(userArr);

    const data = {
      count: count,
      members: members,
      netAmount: netAmount,
      userArr: userArr,
    };

    res.render("home1", { data });
  },

  get_cn: (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "cn.html"));
  },
};
