var express = require('express');
var router = express.Router();
var http = require('http')
var svg2img = require('./lib/convertsvg');
var request = require('request').defaults({
    encoding: null
});

/* GET home page. */
router.get('/', function (req, res, next) {
    svg2img(
        req.query.url,
        function (error, buffer) {
            console.log("error = ", error, "pass", buffer)
            if (error == null) {
                console.log("ini adalh errornya", error);
                res.writeHead(200, {
                    'Content-Type': 'image/png'
                });
                res.write(buffer);
                res.end()

            } else {
                request.get(req.query.url, function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        res.writeHead(200, {
                            'Content-Type': response.headers["content-type"],
                            'Content-Length': response.headers["content-length"]
                        });
                        res.end(body);
                    } else {
                        res.send("error")
                    }
                });
            }


        });
});

module.exports = router;