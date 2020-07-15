const Movie = require('../models/movie');

createMovie = (req, res) => {
    const body = req.body;

    if (!body) {
        return RandomSource.status(400).json({
            success: false,
            error: 'Yoh must provide a movie'
        });
    }

    const movie = new Movie(body);

    if (!movie) {
        return res.status(400).json({ success: false, error: err });
    }

    movie
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: movie._id,
                message: 'Movie created!'
            });
        })
        .catch((error) => {
            return res.status(400).json({
                error,
                message: 'Movie not created!'
            });
        });
};

updateMovie = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update'
        });
    }

    Movie.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Movie not found!'
            });
        }
        movie.name = body.name;
        movie.time = body.time;
        movie.rating = body.rating;
        movie
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: movie._id,
                    message: 'Movie updated!'
                });
            })
            .catch((err) => {
                return res.status(404).json({
                    err,
                    message: 'Movie not updated!'
                });
            });
    });
};

deleteMovie = async (req, res) => {};

getMovieById = async (req, res) => {};

getMovies = async (req, res) => {};
