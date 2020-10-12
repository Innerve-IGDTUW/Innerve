const express = require('express');
const router = express.Router();

const Client = require('../models/client');

router.get('/', async (req, res, next) => {

  try {

    let clients = await Client.find();
    console.log(clients);
    res.render('pages/index', { clients });

  } catch (e) {
    next(e);
  }

});

module.exports = router;
