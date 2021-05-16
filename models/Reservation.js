const mongoose = require('mongoose');

const HomeSchema = mongoose.Schema({
    product: String,
    email: String,
    pickupdate: String,
    tel: String,
    updated_date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Reservation', HomeSchema);