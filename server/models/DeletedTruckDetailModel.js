const mongoose = require('mongoose');

const DeletedTruckDetailSchema = new mongoose.Schema({
    uniqueID: String,
    truckdrivername: String,
    driverphno: String,
    truckno: String,
    date: String,
    time: String,
    fromaddress: String,
    toaddress: String,
    totalamount: String,
    paidamount: String,
    commissionamount: String,
    remainingamount: String,
    paidstatus: String,
    prefix: String,
    donebyid:String,
    donebyname:String,
    presentstatus:String,

    deletedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('DeletedTruckDetail', DeletedTruckDetailSchema);
