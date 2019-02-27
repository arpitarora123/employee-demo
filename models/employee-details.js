const mongoose = require('mongoose');

const employeeDetailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    addresses : {
        currentaddress: {
            type: String,
            required: true
        },
        permanentaddress: {
            type: String,
            required: true
        }
    }
});

var EmployeeDetail = mongoose.model('EmployeeDetail', employeeDetailSchema);
module.exports.EmployeeDetail = EmployeeDetail;
