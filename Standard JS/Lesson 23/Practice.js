const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: () => {
   personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');

      // while это = Если не ... 
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
      }
   },
   rememberMyFilms: () => {
   for(let i = 0; i < 2; i++ ) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
      
         if(a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
         } else {
            console.log('error');
            i--;
         }
      }
   },
   detectPersonalLevel:() => {
      if (personalMovieDB.count < 10) {
         console.log('Not a big fan...');
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
         console.log('Regular viewer');
      } else if (personalMovieDB.count >= 30 ) {
         console.log('You are beast of the movie fans');
      } else {
         console.log('Oh no... Something went wrong :(');
      }
   },
   showMyDB: (hidden) => {
      if (!hidden) {
         console.log(personalMovieDB);
      }
   },
   toggleVisibleMyDB: () => {
      personalMovieDB.privat ? personalMovieDB.privat = false : personalMovieDB.privat = true;
   },
   writeYourGenres: () => {
      for(let i = 1; i <= 3; i++) {
         let genre = prompt(`Your favorite genre by number ${i}`);

         if(genre === '' || genre == null) {
            console.log('Incorrect data');
            i--;
         } else {
            personalMovieDB.genres[i - 1] = genre
         }
      }
      personalMovieDB.genres.forEach((item, i) => {
         console.log(`Favorite genre ${i + 1} - is ${item}`);
      });
   }
};

const cars = {
   bmw: ['e39', 'e46', 'm5'],
   mercedes: ['cls', 'benz', 'e-class'],
   audi: ['a1', 'a2', 'a3'],
   honda: ['civic', 'accord', 'sydney']
}

console.log(cars.bmw.includes('e39'))


function rpsls(pl1,pl2){
//Your Magnificent Code here
  if( pl1 == pl2 ) return "Draw!";
  
  const rules = {
    scissors: ['lizard', 'paper'],
    paper: ['rock', 'spock'],
    rock: ['lizard', 'scissors'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock'],
  }
  
  if(rules[pl1].includes(pl2)){
   return "player 1 Wins";
  } else{
   return "player 2 wins";
  }
}


console.log(rpsls('rock', 'lizard'));
rpsls('paper', 'rock')
rpsls('scissors', 'lizard')
rpsls('lizard', 'paper')
rpsls('spock', 'rock')

rpsls('lizard','scissors');
rpsls('spock','lizard')
rpsls('paper','lizard')
rpsls('scissors','spock')
rpsls('rock','spock')

rpsls('rock', 'rock')
rpsls('spock', 'spock')


// еще можно через reduce((outout,current) => ... )
function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}