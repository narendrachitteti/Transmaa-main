const Userdel = require("../models/DeletedUserModel.js");
const User = require("../models/RegisterModel.js");
const nodemailer = require("nodemailer");

exports.RegisterUsers = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.getAllUserDetails = async (req, res) => {
  try {
    console.log("Getting all user Details");
    const UserDetails = await User.find();
    console.log("User Details:", UserDetails);
    res.json(UserDetails);
  } catch (error) {
    res.status(500).json({ error: "Error fetching User Details" });
  }
};
exports.getUserByCredentials = async (req, res) => {
  try {
    const { username, userType } = req.query;

    const user = await User.findOne({ username, userType });

    if (user) {
      res.status(200).json({ message: "User found", user });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateUserDetail = async (req, res) => {
  const UserId = req.params.id;
  const UserData = req.body;

  try {
    const updatedUserDetail = await User.findByIdAndUpdate(UserId, UserData, {
      new: true,
    });
    res.json(updatedUserDetail);
  } catch (error) {
    console.error("Error updating User Details:", error);
    res.status(400).json({ error: "Error updating User Details" });
  }
};

// exports.deleteUserDetail = async (req, res) => {
//   const UserId = req.params.id;

//   try {
//       await User.findByIdAndDelete(UserId);
//       res.status(204).end();
//   } catch (error) {
//       res.status(400).json({ error: 'Error deleting User Details' });
//   }
// };

exports.deleteUserDetail = async (req, res) => {
  const UserId = req.params.id;

  try {
    const deleteuser = await User.findOneAndDelete({ _id: UserId });
    if (!deleteuser) {
      return res.status(404).json({ error: "user detail not found" });
    }

    const userdel = new Userdel({
      _id: deleteuser._id,
      fullName: deleteuser.fullName,
      username: deleteuser.username,
      email: deleteuser.email,
      phoneNumber: deleteuser.phoneNumber,
      password: deleteuser.password,
      confirmPassword: deleteuser.confirmPassword,
      gender: deleteuser.gender,
      userType: deleteuser.userType,
      isActive: deleteuser.isActive,
    });

    await userdel.save();
    res.status(204).end();
  } catch (error) {
    console.error("Error deleting user detail:", error);

    res.status(400).json({ error: "Error deleting User Details" });
  }
};

// Function to send login email
function sendLoginEmail(username, fullName, userType) {
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com", // Hostinger's SMTP server
    port: 465, // Port number for SMTP
    secure: true, // Enable SSL encryption
    auth: {
      user: "info@transmaa.com", // Your email address
      pass: "Aamsnartt@918273", // Your email password or application password
    },
  });

  // Get the current date and format it
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  const mailOptions = {
    from: "info@transmaa.com",
    to: "info@transmaa.com", // Recipient email address
    subject: "Login Notification",
    html: `
    <div style="background-color: #f2f2f2; padding: 20px; font-family: Arial, sans-serif;">
        <h1 style="color: #333; text-align: center; border-bottom: 2px solid #ccc; padding-bottom: 10px;">Login Notification</h1>
        <p style="font-size: 16px; color: #555; margin-bottom: 20px;"><strong>${userType} ${fullName}</strong> (${username}) logged in at <strong>${formattedDate}</strong></p>
        <p style="font-style: italic; color: #777;">Thank you for using our service!</p>
        <hr style="border: 1px solid #ccc; margin: 20px 0;">
        <p style="font-size: 14px; color: #888;">If you didn't perform this action, please <a href="#" style="color: #007bff; text-decoration: none;">contact support</a>.</p>
        <p style="font-size: 12px; color: #999; margin-top: 30px; text-align: center;">This is an automated email. Please do not reply.</p>
      </div>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}


exports.LoginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (user) {
      if (user.isActive) {
        // Check if isActive is true
        if (password === user.password) {
          const fullName = user.fullName;
          const userType = user.userType;

          sendLoginEmail(username, fullName, userType);

          res.status(200).json({ message: "Login successful", user });
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      } else {
        res.status(403).json({ message: "User is not active" }); // User is not active
      }
    } else {
      res.status(404).json({ message: "User not found" }); // User not found
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.checkUsername = async (req, res) => {
  try {
    const { username } = req.params;

    const user = await User.findOne({ username });

    if (user) {
      res.status(200).json({ exists: true });
    } else {
      res.status(200).json({ exists: false });
    }
  } catch (err) {
    console.error("Error checking username:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getUserByUsername = async (req, res) => {
  try {
    const { username } = req.query;
    // console.log("username",username)

    const adminData = await User.findOne({ username });
    // console.log(adminData)

    if (!adminData) {
      return res.status(404).json({ message: "User data not found" });
    }

    res.status(200).json(adminData);
  } catch (err) {
    console.error("UserError", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
