// console.log( NaN || 2 || undefined );


// console.log( NaN && 2 && undefined );


// console.log( 1 && 2 && 3 );


// console.log( !1 && 2 || !3 );


// console.log( 25 || null && !3 );


// console.log( NaN || null || !3 || undefined || 5);


// console.log( NaN || null && !3 && undefined || 5);


// console.log( 5 === 5 && 3 > 1 || 5);

// 0 || 1

// 0 && 1

// "a" > "b"

// 0 || NaN || false || null


/*
UNTIL LESSON 23

for (i = 5; i < 10; i++) {
   console.log(i);
}

for (i = 20; i >= 10; i--) {
   if (i === 13) {
      break;
   }
   console.log(i);
}

for (i = 2; i <= 10; i++) {
   if(i%2==0) console.log(i);
   
}

let q = 2;

while(q<=16){
   if(q%2==1){
      console.log(q);
   }
   q++;
   
}
let qq = [] 
for(let i=5; i<= 10; i++){
   for(let j=0;j<=10;j++){
      qq[j]=[i];
      console.log(qq[j])
      break;
   }
   
}
    // Пишем решение вот тут
for(let i=0; i<=10; i++){
   if(i%2==0) console.log(i);
}
for (let i = 2; i <= 16; i++) {
     if (i % 2 === 0) {
         continue;
     } else {
         console.log(i);
     }
 }
     let i=2;
    while(i<=16){
    
    if (i % 2 === 0) {
      i++;
        continue;
    } else {
      console.log(i);
    }
    i++;
}
const arrayOfNumbers = [];

    // Пишем решение вот тут
    for(i=5;i<=10;i++){
        arrayOfNumbers[i-5]=i;
    }
    
    // Не трогаем
    return arrayOfNumbers;
*/

// start lesson 24
const NumberOfFilms =+prompt('How many movies have you watched?');

const personaMovieDB = {
   count: NumberOfFilms,
   movies:{},
   actors:{},
   genres:[],
   private: false
}

for(let i=0; i < 2; i++){
   const a = prompt('last watched movie?'),
         b = prompt('How was it?');

   if(a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50){
      
   }  

         personaMovieDB.movies[a] = b;
}
console.log(personaMovieDB);