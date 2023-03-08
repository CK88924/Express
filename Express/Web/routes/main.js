var express = require('express');
var router = express.Router();

router.get ('/', async(req, res) => {
    res.render ('index', { title: 'Express' });
  });

  router.get ('/inf', async(req, res) => {
    res.render ('inf', { title: '會員中心' });
  });
  module.exports = router;