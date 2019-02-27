const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/routes');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
// const EmployeeDetail = require('./models/employee-details').EmployeeDetail;

mongoose.connect('mongodb://localhost:27017/EmployeeDB');
mongoose.connection.on('connected', () => console.log("Connected to mongoDB"));

app.use(cors());
app.use(bodyparser.json());
app.use('/employee',router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Listening on port 3000"));