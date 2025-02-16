// Место для первой задачи
function sayHello(name) {
   return `Привет, ${name}!`;
}
console.log(sayHello('Vlad'));


// Место для второй задачи
function returnNeighboringNumbers(num) {
   return [num - 1, num, num + 1];
}
console.log(returnNeighboringNumbers(5))


// Место для третьей задачи
let str = '';
function getMathResult(num1, num2) {
   if (typeof (num2) == 'string' || num2 <= 0) return num1;
   else {
      for (let i = 1; i <= num2; i++) {
         if (i === num2) {
            str += `${i * num1}`;
         } else {
            str += `${i * num1}---`;
         }
      }
   }
   return str;
}
console.log(getMathResult(5, 3))

const fruit = "sofme fruift";
console.log(fruit.indexOf("f"));

const logg = "Hello world!";
console.log(logg.slice(-13, 2))

// Место для первой задачи
function calculateVolumeAndArea(side) {
   if (side == null || side == "" || isNaN(side) || side < 0 || side % 1 !== 0) {
      return "При вычислении произошла ошибка";
   }
   else {
      let area = Math.pow(side, 3);
      let volume = 6 * Math.pow(side, 2);
      return `Объем куба: ${area}, площадь всей поверхности: ${volume}`;
   }
}
console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(1.5));
console.log(calculateVolumeAndArea("qweqweq"));
console.log(calculateVolumeAndArea(-5));
console.log(calculateVolumeAndArea());

// Место для второй задачи
function getCoupeNumber(seat) {
   if (typeof (seat) !== 'number' || seat < 0 || !Number.isInteger(seat)) {
      return 'Ошибка. Проверьте правильность введенного номера места';
   }
   if (seat == 0 || seat > 36) {
      return 'Таких мест в вагоне не существует';
   }
   else {
      return Math.ceil(seat / 4)
   }
}
console.log(getCoupeNumber(1));

// Место для первой задачи
function getTimeFromMinutes(Getminutes) {
   if (Getminutes === null || !Number.isInteger(Getminutes) || Getminutes < 0) return 'Ошибка, проверьте данные';
   let Hours = Math.floor(Getminutes / 60);
   let Minutes = Getminutes % 60;
   if (Hours % 10 == 1 && Hours !== 11) {
      return `Это ${Hours} час и ${Minutes} минут`;
   }
   if (Hours % 10 > 1 && Hours % 10 < 5) {
      return `Это ${Hours} часа и ${Minutes} минут`;
   }
   return `Это ${Hours} часов и ${Minutes} минут`;

}
console.log(getTimeFromMinutes(670));
console.log(getTimeFromMinutes(1300));
console.log(getTimeFromMinutes(80));
console.log(getTimeFromMinutes(140));
console.log(getTimeFromMinutes(1450));
console.log(getTimeFromMinutes(0));
// Место для второй задачи
function findMaxNumber(a, b, c, d) {
   // Самое простое - это использовать Math.max :)
   // А оптимизировать такую проверку мы научимся совсем скоро
   if (typeof (a) !== 'number' ||
      typeof (b) !== 'number' ||
      typeof (c) !== 'number' ||
      typeof (d) !== 'number') {
      return 0;
   } else {
      return Math.max(a, b, c, d);
   }
}

const options = {
   name: 'test',
   width: 1024,
   height: 1024,
   colors: {
      border: 'black',
      bg: 'red'
   },
   makeTest: function () {
      console.log("Test")
   }
};

// delete options.name;
// console.log(Object.keys(options).length);
// options.makeTest();
// console.log(options["colors"]["border"])
const { border, bg } = options.colors;
console.log(border);
// for (let key in options) {
//    if (typeof (options[key]) === 'object') {
//       for (let i in options[key]) {
//          console.log(`Свойство ${i}, has value of ${options[key][i]}`)
//       }
//    } else {
//       console.log(`Свойство ${key}, has value of ${options[key]}`)
//    }
// }

const personalPlanPeter = {
   name: "Peter",
   age: "29",
   skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
         js: '20%',
         php: '10%'
      },
      exp: '1 month'
   },
   // ZAD 3
   showAgeAndLangs: function (plan) {
      const { age } = plan;
      const { languages } = plan.skills;
      let str = `Мне ${age} и я владею языками: `;

      languages.forEach(function (lang) {
         str += `${lang.toUpperCase()} `;
      });

      return str;
   }
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// ZAD 1
// function showExperience(plan) {
//     const { exp }  = plan.skills; // or plan["skills"]["exp"] IDK what is better?
//     return exp;
// }

// console.log(showExperience(personalPlanPeter));

// ZAD 2
function showProgrammingLangs(plan) {
   let str = '';
   const { programmingLangs } = plan.skills;
   for (let key in programmingLangs) {
      str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
   }

   return str;
}

console.log(showProgrammingLangs(personalPlanPeter));

//ZAD 1
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
   let str = '';

   arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';
   arr.forEach(member => {
      str += `${member} `
   });

   return str;
}

console.log(showFamily(family));
// ZAD 2
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
   arr.forEach(city => {
      console.log(city.toLowerCase());
   })
}
standardizeStrings(favoriteCities);

// Zad 1
const someString = 'This is some strange string';

function reverse(str) {
   if (typeof (str) !== 'string') {
      return "Ошибка!";
   }
   // Самый оптимальный вариант решения
   return str.split('').reverse().join('');

   // Решение при помощи цикла
   // let newStr = '';
   // for (let i = str.length - 1; i >= 0; i--) {
   //     newStr += str[i];
   // }
   // return newStr
}

console.log(reverse(someString));
// ZAD 2
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
   let str = '';
   arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

   arr.forEach((curr, i) => { // or just: curr => ... IDK what is the diff, works the same
      if (curr !== missingCurr) {
         str += `${curr}\n`;
      }
   })

   return str;
}
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));

// ООП урок 35

// ZAD 1
const shoppingMallData = {
   shops: [
      {
         width: 10,
         length: 5
      },
      {
         width: 15,
         length: 7
      },
      {
         width: 20,
         length: 5
      },
      {
         width: 8,
         length: 10
      }
   ],
   height: 5,
   moneyPer1m3: 30,
   budget: 50000
}

function isBudgetEnough(data) {
   let square = 0;
   let volume = 0;
   data.shops.forEach(shop => {
      square += shop.width * shop.length;
   });
   volume = data.height * square;

   if (data.budget - (volume * data.moneyPer1m3) >= 0) {
      return 'Бюджета достаточно';
   } else {
      return 'Бюджета недостаточно';
   }
}

console.log(isBudgetEnough(shoppingMallData));

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', "Maria"];
// МОЙ ВАРИАНТ (чучуть хуже) в чате ГПТ 04.08 Разделение массива... 
function sortStudentsByGroups(arr) {
   arr.sort();
   const groups = [],
      groupSize = 3,
      len = arr.length;
   let remainder;
   if (len % 3 === 0) {
      for (let i = 0; i < len; i += groupSize) {
         groups.push(arr.slice(i, i + groupSize));
      }
   } else {
      remainder = len % 3;
      for (let i = 0; i < len - remainder; i += groupSize) {
         groups.push(arr.slice(i, i + groupSize));
      }
   }
   const rest = remainder > 0 ? arr.slice(-remainder) : [];
   groups.push(`Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`);

   return groups;
}

console.log(sortStudentsByGroups(students));

console.log(typeof(NaN));

for (let i = 1; i < 5; i++) {
    console.log(i +=1 )
}



// DEBUG TASK
const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

console.log(transferWaitors(restorantData));

//until lesson 43

//lesson 46 Recursion

function pow(x, n){
   if(n === 1){
      return x;
   } else {
      return x * pow(x, n - 1); 
   }
}

console.log(pow(2,3));

// Zad recursion

function factorial(n) {
    if(isNaN(n) || !Number.isInteger(n)) {
      return 'ERROR 401: Give me an int number!';
    } if (n >= 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }
}

console.log(factorial(0))