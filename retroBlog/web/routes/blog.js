
const express = require('express');
const router = express.Router();
const dataProvider = require('../dataprovider');


router.get('/', (req, res) => {
  const entradas = dataProvider.getAllPosts();
  res.render('index', { entradas });
});


router.get('/entrada/:id', (req, res) => {
  const entrada = dataProvider.getPostById(req.params.id);
  if (entrada) {
    res.render('entrada', { entrada });
  } else {
    res.status(404).send('Entrada no encontrada');
  }
});

module.exports = router;
