var express = require('Kavya Alavala');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kavya Alavala' });
});

module.exports = router;
