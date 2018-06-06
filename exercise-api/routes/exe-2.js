var express = require('express');
var request = require('request');
var router = express.Router();


//get all characters
router.get('/', function (req, res, next) {
    res.json({ result: { url: '/*' } });
});

router.get('/characters', function (req, res, next) {

    if(req.query.hasOwnProperty('search')){
        request('https://swapi.co/api/people?search=' + req.query.search, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var result = JSON.parse(body);
                res.json(result)
            }
        })
    } else {
        request('https://swapi.co/api/people', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var result = JSON.parse(body);
                res.json(result)
            }
        })
    }

    
});

router.get('/films', function (req, res, next) {

    request(req.query.url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.json(JSON.parse(body));
        }
    })
});




module.exports = router;
