const express = require('express');
const ejs = require('ejs');
const app = express();
const multer = require('multer');// Downloading module img
const mongoose = require('mongoose');// data base
const bodyParser = require('body-parser');// get information from html forms


app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css/')); 
app.use(express.static(__dirname + '/public'));  // search all ressources 
