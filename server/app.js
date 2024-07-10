const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors"); // Import the cors package
// const routes = require('./index'); // Import the combined routes
const bodyParser = require('body-parser');
const dotenv = require('dotenv'); // Import dotenv
const path = require('path');
dotenv.config({ path: 'Config/.env' }); // Load environment variables from config/.env file


const app = express();

app.use(cors()); 

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.use(bodyParser.json());
const CustomerDetailRoutes = require('./routes/CustomerDetailRoutes.js')
const TruckDetailRoutes = require('./routes/TruckDetailRoutes');
const Register = require('./routes/Register.js');
const DelRegister = require('./routes/UserDeleteRoutes.js');

const TruckDeleteRoutes = require('./routes/TruckDeleteRoutes');
const CustomerDeleteRoutes = require('./routes/CustomerDeleteRoutes.js')
const uploadRoutes = require('./routes/uploadRoutes');


app.use(express.json());

app.use('/api', CustomerDetailRoutes);
app.use('/api', TruckDetailRoutes);
app.use('/api', Register);
app.use('/api', TruckDeleteRoutes)
app.use('/api', CustomerDeleteRoutes)

app.use('/api', uploadRoutes);
app.use('/api', DelRegister);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 1985;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
