var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
/// res.send('Hello from kurts flower shop');
res.render('Kurtsflowershop', { title: 'Kurts Flower Shop' });
});

/* GET users listing. */
router.get('/help', function(req, res, next) {
  /// res.send('Hello from kurts flower shop');
  res.render('Kurtshelp', { title: 'Kurts Flower Shop' });
  });

  /* GET users listing. */
router.get('/register', function(req, res, next) {
  /// res.send('Hello from kurts flower shop');
  res.render('kurtsregister', { title: 'Kurts Flower Shop' });
  });



module.exports = router;
