const TruckDetail = require("../models/TruckDetailsModel.js");
const DeletedTruckDetail = require("../models/DeletedTruckDetailModel");
const upload = require('../helpers/fileUpload.js');

const generateUniqueID = async () => {
  const session = await TruckDetail.startSession();
  session.startTransaction();
  try {
    const latestTruckDetail = await TruckDetail.findOne(
      {},
      {},
      { sort: { uniqueID: -1 } }
    ).session(session);
    let newID;
    if (!latestTruckDetail || !latestTruckDetail.uniqueID) {
      // If no records exist yet or the latest S.No is not defined, start the count from 1
      newID = "TRNo-001";
    } else {
      const latestID = latestTruckDetail.uniqueID;
      const countMatch = latestID.match(/(\d+)$/);

      if (!countMatch) {
        throw new Error(
          "Invalid uniqueID format. Count could not be extracted."
        );
      }
      const currentCount = parseInt(countMatch[1]);

      if (isNaN(currentCount)) {
        throw new Error(
          "Invalid uniqueID format. Count is not a valid number."
        );
      }

      const newCount = currentCount + 1;
      newID = "TRNo-" + newCount.toString().padStart(3, "0");
    }
    // Check if the new uniqueID already exists
    const existingTruck = await TruckDetail.findOne({
      uniqueID: newID,
    }).session(session);
    if (existingTruck) {
      // If it already exists, recursively call the function to generate a new one
      return generateUniqueID();
    }

    await session.commitTransaction();
    session.endSession();

    return newID;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error("Error generating uniqueID:", error);
    throw error;
  }
};

exports.getLatestSNo = async (req, res) => {
  try {
    const latestTruckDetail = await TruckDetail.findOne(
      {},
      {},
      { sort: { sno: -1 } }
    );

    if (!latestTruckDetail || !latestTruckDetail.sno) {
      return res.json({ latestSNo: "1" }); // If no records exist yet, start the count from 1
    }

    const latestCount = parseInt(latestTruckDetail.sno);
    const newCount = latestCount + 1;

    res.json({ latestSNo: newCount.toString() });
  } catch (error) {
    console.error("Error fetching latest S.No:", error);
    res.status(500).json({ error: "Error fetching latest S.No" });
  }
};

exports.getAllTruckDetails = async (req, res) => {
  try {
    //   console.log("Getting all Truck Details");  // Add this line
    const TruckDetails = await TruckDetail.find();
    //   console.log("Truck Details:", TruckDetails);  // Add this line
    res.json(TruckDetails);
  } catch (error) {
    res.status(500).json({ error: "Error fetching Truck Details" });
  }
};
exports.createTruckDetail = async (req, res) => {
  const TruckDetailData = req.body;

  try {
    const uniqueID = await generateUniqueID();

    const newTruckDetail = new TruckDetail({
      ...TruckDetailData,
      uniqueID: uniqueID,
    });

    await newTruckDetail.save();
    res.status(201).json(newTruckDetail);
  } catch (error) {
    console.error("Error adding Truck Details:", error);
    res.status(400).json({ error: "Error adding Truck Details" });
  }
};

exports.updateTruckDetail = async (req, res) => {
  const TruckDetailId = req.params.id;
  const TruckDetailData = req.body;

  try {
    const updatedTruckDetail = await TruckDetail.findByIdAndUpdate(
      TruckDetailId,
      TruckDetailData,
      { new: true }
    );
    res.json(updatedTruckDetail);
  } catch (error) {
    console.error("Error updating Truck Details:", error);
    res.status(400).json({ error: "Error updating Truck Details" });
  }
};


  // exports.deleteTruckDetail = async (req, res) => {
//   const TruckDetailId = req.params.id;

//   try {
//     await TruckDetail.findByIdAndDelete(TruckDetailId);
//     res.status(204).end();
//   } catch (error) {
//     res.status(400).json({ error: "Error deleting Truck Details" });
//   }
// };

exports.deleteTruckDetail = async (req, res) => {
    const truckDetailId = req.params.id;
    try {
        // Find the truck detail to be deleted and delete it
        const deletedTruckDetailFromTruck = await TruckDetail.findOneAndDelete({ _id: truckDetailId });
        
        // If the truck detail doesn't exist, return a 404 error
        if (!deletedTruckDetailFromTruck) {
            return res.status(404).json({ error: "Truck detail not found" });
        }

        // Create a new document in the DeletedTruckDetail collection using the deleted truck detail data
        const deletedTruckDetail = new DeletedTruckDetail({
            _id: deletedTruckDetailFromTruck._id,
            uniqueID: deletedTruckDetailFromTruck.uniqueID,
            truckdrivername: deletedTruckDetailFromTruck.truckdrivername,
            driverphno: deletedTruckDetailFromTruck.driverphno,
            truckno: deletedTruckDetailFromTruck.truckno,
            date: deletedTruckDetailFromTruck.date,
            time: deletedTruckDetailFromTruck.time,
            fromaddress: deletedTruckDetailFromTruck.fromaddress,
            toaddress: deletedTruckDetailFromTruck.toaddress,
            totalamount: deletedTruckDetailFromTruck.totalamount,
            paidamount: deletedTruckDetailFromTruck.paidamount,
            commissionamount: deletedTruckDetailFromTruck.commissionamount,
            remainingamount: deletedTruckDetailFromTruck.remainingamount,
            paidstatus: deletedTruckDetailFromTruck.paidstatus,
            prefix:deletedTruckDetailFromTruck.prefix,
            donebyid:deletedTruckDetailFromTruck.donebyid,
            donebyname:deletedTruckDetailFromTruck.donebyname,
            presentstatus:deletedTruckDetailFromTruck.presentstatus,


        });

        // Save the new document to the DeletedTruckDetail collection
        await deletedTruckDetail.save();

        res.status(204).end();
    } catch (error) {
        console.error("Error deleting truck detail:", error);
        res.status(500).json({ error: "Error deleting truck detail", details: error.message });
    }
};



