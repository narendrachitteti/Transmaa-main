const TruckDetail = require("../models/DeletedTruckDetailModel");
const DeletedTruckDetail = require("../models/TruckDetailsModel.js");

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

exports.getAllDeleteTruck = async (req, res) => {
  try {
    //   console.log("Getting all Truck Details");  // Add this line
    const TruckDetails = await TruckDetail.find();
    //   console.log("Truck Details:", TruckDetails);  // Add this line
    res.json(TruckDetails);
  } catch (error) {
    res.status(500).json({ error: "Error fetching Truck Details" });
  }
};

exports.deleteDeletedTruck = async (req, res) => {
  const TruckDetailId = req.params.id;

  try {
    await TruckDetail.findByIdAndDelete(TruckDetailId);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: "Error deleting Truck Details" });
  }
};

exports.deleteTruckRestore = async (req, res) => {
  const truckDetailId = req.params.id;
  try {
    // Find the truck detail to be deleted and delete it
    const deletedTruckDetailFromTruck = await TruckDetail.findOneAndDelete({
      _id: truckDetailId,
    });

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
      prefix: deletedTruckDetailFromTruck.prefix,
      donebyid: deletedTruckDetailFromTruck.donebyid,
      presentstatus: deletedTruckDetailFromTruck.presentstatus,

    });

    // Save the new document to the DeletedTruckDetail collection
    await deletedTruckDetail.save();

    res.status(204).end();
  } catch (error) {
    console.error("Error deleting truck detail:", error);
    res
      .status(500)
      .json({ error: "Error deleting truck detail", details: error.message });
  }
};
