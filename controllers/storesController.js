const path = require("path");
const Stores = require("../models/store");

module.exports = {
    getStores: async (req, res) => {
        const stores = await Stores.find();
        res.status(200).json(stores);
    },
    getStoreById: async (req, res) => {
        console.log(req.params.id);
        const ID = req.params.id;
        const store = await Stores.find({ id: ID });
        if (!store) {
            return res.status(404).json({ message: "Store not found" });
        }
        res.status(200).json(store);
    }
}