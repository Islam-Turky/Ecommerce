const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        default: ""
    },
    color: {
        type: String,
        required: true,
    }
});

exports.Category = mongoose.model("Category", categorySchema);
