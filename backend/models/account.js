const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserPaytm",
        required: true,
    },
    balance: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("AccountPaytm", accountSchema);