const path = require("path");
const Payments = require("../models/payment");
const Peoples = require("../models/peoples");
const Groups = require("../models/group");
const budget = require("../models/budget");

module.exports = {
  check_issued_year: async (req, res) => {
    try {
      const year = req.body.year;

      console.log(req.body);

      console.log(year);

      const uniqueYears = await budget.distinct("issuedYear");
      console.log(uniqueYears);

      const DB_Years = [
        "2024",
        "2025",
        "2026",
        "2027",
        "2028",
        "2029",
        "2030",
        "2031",
        "2032",
        "2033",
        "2034",
        "2035",
        "2036",
        "2037",
        "2038",
        "2039",
        "2040",
      ];

      if (!uniqueYears.includes(year) && DB_Years.includes(year)) {
        res.json({ result: true });
      } else {
        return res.json({ result: false });
      }
    } catch (error) {
      console.error("Error in check_issued_year:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  issue_budget: async (req, res) => {
    res.render("issue_budget");
  },
  issue_budget_post: async (req, res) => {
    console.log("hello...");
    console.log(req.body);
    try {
      const { year, monthlyAmount, yearlyAmount, description } = req.body;

      const newBudget = new budget({
        issuedYear: year,
        monthlyAmount: parseInt(monthlyAmount),
        yearlyAmount: parseInt(yearlyAmount),
        description: description,
      });

      await newBudget.save();

      res.redirect("/home");
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Error issuing budget.");
    }
  },
};
