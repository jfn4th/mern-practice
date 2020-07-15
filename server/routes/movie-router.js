const express = require('express'),
    MovieCtrl = require('../controllers/movie-ctrl'),
    router = express.Router();

router.post('/movie', MovieCtrl.createMovie);
router.put(`/movie/:id`, MovieCtrl.updateMovie);
router.delete('/movie/:id', MovieCtrl.deleteMovie);
router.get('/movie/:id', MovieCtrl.getMovieById);
router.get('/movies', MovieCtrl.getMovies);

module.exports = router;
