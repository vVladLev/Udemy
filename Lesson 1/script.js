// console.log( NaN || 2 || undefined );


// console.log( NaN && 2 && undefined );


// console.log( 1 && 2 && 3 );


// console.log( !1 && 2 || !3 );


// console.log( 25 || null && !3 );


// console.log( NaN || null || !3 || undefined || 5);


// console.log( NaN || null && !3 && undefined || 5);


// console.log( 5 === 5 && 3 > 1 || 5);

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
      for(let i=0; i<=10; i++){\
        console.log(i);
    }