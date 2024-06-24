const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const storeSchema = new Schema({
    name: {
        type: String,

    },
    type: {
        type: String,

    },
    id: {
        type: Number,
        unique: true
    },
    image: {
        type: String,

    },
    address: {
        type: String,
    },
    rating: {
        rate: {
            type: Number,

        },
        count: {
            type: Number,

        }
    },
    restMenu: {
        recommended: {
            food: {
                type: String,

            },
            image: {
                type: String,

            }
        },
        special: {
            food: {
                type: String,

            },
            image: {
                type: String,
            }
        }
    }
});

const Stores = mongoose.model("Stores", storeSchema);

module.exports = Stores;