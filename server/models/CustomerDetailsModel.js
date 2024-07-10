const mongoose = require('mongoose');

const CustomerDetailSchema = new mongoose.Schema({
    uniqueID: String,
    prefix: String,
    customername: String,
    customerphno: String,
    truckno: String,
    date: String,
    time: String,
    fromaddress: String,
    toaddress: String,
    totalamount: String,
    paidamount: String,
    commissionamount: String,
    remainingamount: String,
    paidstatus:String,
    donebyid:String,
    donebyname:String,
    vehicalstatus:String,

});

module.exports = mongoose.model('CustomerDetail', CustomerDetailSchema);
