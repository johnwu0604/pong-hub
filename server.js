/**
 * Created by JohnWu on 2016-10-26.
 */

// set up ======================================================================
var express = require('express');
var app = express();
var port  	 = process.env.PORT || 5000;

// configuration ===============================================================

app.use(express.static(__dirname + '/public'));

app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); 
    });

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listing on port " + port);