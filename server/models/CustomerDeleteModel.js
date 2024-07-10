const mongoose = require('mongoose');

const DeleteCustomerDetailSchema = new mongoose.Schema({
    uniqueID: String,
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
    prefix: String,
    donebyid:String,
    donebyname:String,
    vehicalstatus:String,
});

module.exports = mongoose.model('DeleteCustomerDetail', DeleteCustomerDetailSchema);
