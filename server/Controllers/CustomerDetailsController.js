const CustomerDetail = require('../models/CustomerDetailsModel.js');
const CustomerDeleteDetail = require('../models/CustomerDeleteModel.js');


const generateUniqueID = async () => {
    const session = await CustomerDetail.startSession();
    session.startTransaction();

    try {
        const latestCustomerDetail = await CustomerDetail.findOne({}, {}, { sort: { 'uniqueID': -1 } }).session(session);

        let newID;
        if (!latestCustomerDetail || !latestCustomerDetail.uniqueID) {
            // If no records exist yet, start the count from 1
            newID = 'CRNo-001';
        } else {
            const latestID = latestCustomerDetail.uniqueID;
            const countMatch = latestID.match(/(\d+)$/);

            if (!countMatch) {
                throw new Error('Invalid uniqueID format. Count could not be extracted.');
            }
            const currentCount = parseInt(countMatch[1]);

    if (isNaN(currentCount)) {
        throw new Error('Invalid uniqueID format. Count is not a valid number.');
    }

    const newCount = currentCount + 1;
    newID = 'CRNo-' + newCount.toString().padStart(3, '0');
}
        // Check if the new uniqueID already exists
        const existingCustomer = await CustomerDetail.findOne({ uniqueID: newID }).session(session);
        if (existingCustomer) {
            // If it already exists, recursively call the function to generate a new one
            return generateUniqueID();
        }

        await session.commitTransaction();
        session.endSession();

        return newID;
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        console.error('Error generating uniqueID:', error);
        throw error;
    }
};

exports.getLatestSNo = async (req, res) => {
    const session = await CustomerDetail.startSession();
    session.startTransaction();

    try {
        const latestCustomerDetail = await CustomerDetail.findOne({}, {}, { sort: { 'sno': -1 } }).session(session);


        if (!latestCustomerDetail || !latestCustomerDetail.sno) {
            return res.json({ latestSNo: '1' }); // If no records exist yet, start the count from 1
        }

        const latestCount = parseInt(latestCustomerDetail.sno);
        const newCount = latestCount + 1;

        res.json({ latestSNo: newCount.toString() });
        await session.commitTransaction();
        session.endSession();
    } catch (error) {
        await session.abortTransaction();
        session.endSession();

        console.error('Error fetching latest S.No:', error);
        res.status(500).json({ error: 'Error fetching latest S.No' });
    }
};

exports.getAllCustomerDetails = async (req, res) => {
    try {
        console.log("Getting all Customer Details");  // Add this line
        const CustomerDetails = await CustomerDetail.find();
        // console.log("Customer Details:", CustomerDetails);  // Add this line
        res.json(CustomerDetails);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Customer Details' });
    }
};

exports.createCustomerDetail = async (req, res) => {
    const customerDetailData = req.body;

    try {
        const uniqueID = await generateUniqueID();
        const newCustomerDetail = new CustomerDetail({
            ...customerDetailData,
            uniqueID: uniqueID,
        });

        await newCustomerDetail.save();
        res.status(201).json(newCustomerDetail);
    } catch (error) {
        console.error('Error adding Customer Details:', error);
        res.status(400).json({ error: 'Error adding Customer Details' });
    }
};


exports.updateCustomerDetail = async (req, res) => {
    const CustomerDetailId = req.params.id;
    const CustomerDetailData = req.body;

    try {

        const updatedCustomerDetail = await CustomerDetail.findByIdAndUpdate(
            CustomerDetailId,
            CustomerDetailData,
            { new: true }
        );
        res.json(updatedCustomerDetail);
    } catch (error) {
        console.error('Error updating Custommer Details:', error);
        res.status(400).json({ error: 'Error updating Customer Details' });
    }
};

// exports.deleteCustomerDetail = async (req, res) => {
//     const CustomerDetailId = req.params.id;

//     try {
//         await CustomerDetail.findByIdAndDelete(CustomerDetailId);
//         res.status(204).end();
//     } catch (error) {
//         res.status(400).json({ error: 'Error deleting Customer Details' });
//     }
// };


exports.deleteCustomerDetail = async (req, res) => {
    const customerDetailId = req.params.id;

    try {
        // Find the customer detail to be deleted and delete it
        const deletedCustomerDetailFromCustomer = await CustomerDetail.findOneAndDelete({ _id: customerDetailId });
        
        // If the customer detail doesn't exist, return a 404 error
        if (!deletedCustomerDetailFromCustomer) {
            return res.status(404).json({ error: "Customer detail not found" });
        }

        // Create a new document in the DeletedCustomerDetail collection using the deleted customer detail data
        const deletedCustomerDetail = new CustomerDeleteDetail({
            _id: deletedCustomerDetailFromCustomer._id,
            uniqueID: deletedCustomerDetailFromCustomer.uniqueID,
            customername: deletedCustomerDetailFromCustomer.customername,
            customerphno: deletedCustomerDetailFromCustomer.customerphno,
            truckno: deletedCustomerDetailFromCustomer.truckno,
            date: deletedCustomerDetailFromCustomer.date,
            time: deletedCustomerDetailFromCustomer.time,
            fromaddress: deletedCustomerDetailFromCustomer.fromaddress,
            toaddress: deletedCustomerDetailFromCustomer.toaddress,
            totalamount: deletedCustomerDetailFromCustomer.totalamount,
            paidamount: deletedCustomerDetailFromCustomer.paidamount,
            commissionamount: deletedCustomerDetailFromCustomer.commissionamount,
            remainingamount: deletedCustomerDetailFromCustomer.remainingamount,
            paidstatus: deletedCustomerDetailFromCustomer.paidstatus,
            prefix:deletedCustomerDetailFromCustomer.prefix,
            donebyid:deletedCustomerDetailFromCustomer.donebyid,
            donebyname:deletedCustomerDetailFromCustomer.donebyname,
            vehicalstatus:deletedCustomerDetailFromCustomer.vehicalstatus,

            
        });

        // Save the new document to the DeletedCustomerDetail collection
        await deletedCustomerDetail.save();

        res.status(204).end();
    } catch (error) {
        console.error("Error deleting customer detail:", error);
        res.status(500).json({ error: "Error deleting customer detail", details: error.message });
    }
};


