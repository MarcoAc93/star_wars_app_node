var movieJSON = require('../movies.json');

exports.home = function(req, res){
	
	var movies = movieJSON.movies;
	res.render('home',{
		titulo: 'Star wars movies',
		movies: movies
	});
};

exports.single_page = function(req, res){
	var movies = movieJSON.movies;
	var episodio = req.params.episode_number;
	
	if(episodio >= 1 && episodio <= 6){
		var movie = movies[episodio - 1];
		var title = movie.title;
		var main_characters = movie.main_characters;
		res.render('movie_single.ejs', {
			movies: movies,
			title: title,
			movie: movie,
			main_characters: main_characters
		});
	}else {
		res.render('notFound.ejs',{
			movies: movies,
			title: "Estos no son los droids que estas buscando"
		});
	}
};

exports.not_found = function(req, res){
	var movies = movieJSON.movies;
	res.render('notFound', {
		movies: movies,
		title: "Estos no son los droids que estas buscando"
	});
};


















