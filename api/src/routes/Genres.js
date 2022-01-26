const express = require('express');
const router = express.Router();
const {getGenres, newGenre} = require('../Compiladores/Genres')
const {API_KEY} = process.env



router.use(express.json());

////////////////////////////////////////////////////////////
//* Traigo los Genres desde la Api y los almaceno en la Base de Datos
///////////////////////////////////////////////////////////

router.get('/', getGenres);

router.post('/', newGenre)



module.exports = router;