const numberOfFilms = +prompt("How many movies did your watch?", '');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   private: false
};

const a = prompt("What the name of one of them?", ''),
      b = prompt("How will you rate it?", ''),
      c = prompt("What the name of another one?", ''),
      d = prompt("How will you rate it?", '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);