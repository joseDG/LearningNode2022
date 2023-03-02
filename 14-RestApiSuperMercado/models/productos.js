const mongoose = require('mongoose');

const productoSchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: {
        type: Number,
        required: true
    }
})

exports.Producto = mongoose.model('Producto', productoSchema);
