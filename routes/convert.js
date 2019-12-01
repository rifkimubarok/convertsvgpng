var express = require('express');
var router = express.Router();
var svg2img = require('svg2img');

/* GET home page. */
router.get('/', function (req, res, next) {
    svg2img(
        'http://223.27.153.196/theme/image.php/enlightlite/forum/1572937756/icon',
        function (error, buffer) {
            res.writeHead(200, {
                'Content-Type': 'image/png'
            });
            res.write(buffer);
            res.end()
        });
});

module.exports = router;