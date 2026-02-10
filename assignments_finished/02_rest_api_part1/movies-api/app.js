

const express = require('express');
const app = express();

const movies = [
    { id: 1, title: "Harry Potter 14", year: 2034 },
    { id: 2, title: `Alien Invasion Tomato Monster Mexican Armada Brothers Who Are Just Regular Brothers 
        Running From A Van From An Asteroid And All Sorts Of Things: The Movie`, year: 2038 }
];

app.get('/movies', (req, res) => {
    res.json(movies);
});

app.get('/movies/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('Movie not found');
    res.json(movie);
});

app.listen(3000, () => console.log('Server running on port 3000'));