const express = require("express");
const router = express.Router();

const stores = require("../controllers/storesController");

router.get("/stores", stores.getStores);
router.get("/stores/:id", stores.getStoreById);


module.exports = router;