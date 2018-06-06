var express = require('express');
var router = express.Router();



router.get('/', function (req, res, next) {
  console.log(req.query);

  var str = watsonReplacer(parseInt(req.query.length), parseInt(req.query.firstNum), parseInt(req.query.secondNum))
  res.json({ result: { string: str } });
});

function watsonReplacer(length, digit1, digit2) {

  var str = '';
  for (var i = 1; i <= length; i++) {

    var num1 = i % digit1,
      num2 = i % digit2,
      floatD1 = parseFloat(i).toString().indexOf(digit1),
      floatD2 = parseFloat(i).toString().indexOf(digit2);

    if (num1 === 0 && num2 !== 0 && floatD1 < 0) {
      str += "WAT ";
    } else if (num1 !== 0 && num2 === 0 && floatD2 < 0) {
      str += "SON ";
    } else if (num1 === 0 && num2 === 0 && floatD1 < 0 && floatD2 < 0) {
      str += "WATSON ";
    } else {
      str += i + " ";
    }

  }
  return str.trim();
}

module.exports = router;
