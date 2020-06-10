const express = require("express");
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3001, function() {
    console.log("I'm listening.");
});
