var path = require('path');

module.exports = function (app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });
    
    app.get("/add", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/add.html"));
    });

    app.get("/checkin", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/checkin.html"));
    });
}