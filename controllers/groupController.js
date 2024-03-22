const path = require("path");
const Payments = require("../models/payment");
const Peoples = require("../models/peoples");
const Groups = require("../models/group");

module.exports = {
  get_group: async (req, res) => {
    console.log("groups");
    res.render("groupForm");
  },

  post_group: async (req, res) => {
    const { name, head, place } = req.body;
    console.log(name, head, place);

    const newPerson = new Groups({ name, head, place });
    try {
      await newPerson.save();

      res.render("home");
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  },

  get_group: async (req, res) => {
    const groupsData = await Groups.find({});

    const newgroupsData = groupsData.map((group) => ({
      name: group.name,
    }));
    // console.log(newgroupsData);
    const enteredName = req.body.name;
    // console.log(enteredName);
    const enteredNameLower = req.body.name.toLowerCase();
    const peopleNamesLower = newgroupsData.map((person) =>
      person.name.toLowerCase()
    );
    // console.log(peopleNamesLower);
    if (peopleNamesLower.includes(enteredNameLower)) {
      res.json({ exists: true });
    } else {
      res.json({ exists: false });
    }
  },

  get_groups: async (req, res) => {
    const groupsData = await Groups.find({});

    const uniqueYears = await Budget.distinct("issuedYear");
    console.log(uniqueYears);

    const formattedGroups = groupsData.map((group) => ({
      id: group._id,
      name: group.name,
    }));

    res.json({ groups: formattedGroups, uniqueYears: uniqueYears });
  },
};
