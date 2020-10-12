const express = require('express');
const router = express.Router();

const Client = require('../models/client');

router.post('/', async (req, res, next) => {

  try {
    console.log(req.body);
    await Client.create(req.body);
    res.redirect('/');
  } catch (e) {
    next(e);
  }

});

module.exports = router;
