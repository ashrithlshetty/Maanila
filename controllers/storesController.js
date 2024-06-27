const path = require("path");
const Stores = require("../models/store");

module.exports = {
    getStores: async (req, res) => {
        console.log(req.query);
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        try {
            const count = await Stores.countDocuments();

            const stores = await Stores.find()
                .skip((page - 1) * limit)
                .limit(limit);

            res.status(200).json(stores);

            //   res.status(200).json({
            //     totalItems: count,
            //     totalPages: Math.ceil(count / limit),
            //     currentPage: page,
            //     stores
            //   });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
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
