const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;
const routes = require('./routes');
routes(app);
app.get('/', function (req, res) {
    res.status(200).json({
        "OK": "OK"
    });
});
app.use(function (err, req, res, next) {
    // logic
    console.log("error", err);
})
app.get('*', function (req, res) {
    res.send('what???', 404);
});
app.listen(port, function () {
    console.log("Listening ... @", port);
});