var express = require('express');

var model=require('../models/table.js');




exports.index = function(req, res) {
    res.render('index');
    console.log('here we  are at  main JADE  file');
};






exports.create = function(req,res) {
    var entry = new model({

        name: req.body.name,
        project: req.body.project


    });

    entry.save();
    console.log('Here At  saved  data');
}

/* GET home page. */




exports.list = function(req, res) {

    model.find({}, 'project', function(error, polls) {
        res.json(polls);
    });
};








