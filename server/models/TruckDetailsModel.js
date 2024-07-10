const mongoose = require('mongoose');

const TruckDetailSchema = new mongoose.Schema({
    uniqueID: String,
    prefix: String,
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
    donebyid:String,
    donebyname:String,
    presentstatus:String,
});

module.exports = mongoose.model('TruckDetail', TruckDetailSchema);
