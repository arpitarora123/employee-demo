const express = require('express');
const router = express.Router();
const EmployeeModel = require('../models/employee-details');
const EmployeeDetail = EmployeeModel.EmployeeDetail;

router.get('/', (req, res) => {
    EmployeeDetail.find((err, item) => {
        if (err) {
            res.json(err);
        } else {
            res.json(item);
        }
    })
});

router.post('/', (req, res) => {
    console.log("DB: Adding employee");
    var employee = new EmployeeDetail(req.body);
    employee.save((err) => {
        if (err) { 
            console.log("DB: Error Adding employee");
            res.json(err);
        }
        else {
            console.log("DB: Employee Added successfully");
            res.json("Employee Added succssfully");
        };
    })

})

module.exports = router;