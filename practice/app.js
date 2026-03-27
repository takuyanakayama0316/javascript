
let nickname ='ごっしー';

let age = 28;

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');



let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`)



let user = [{name: 'John', age: 26, bloodType: 'A', favorite: 'card'}];

console.log (user[0].age);




let playerList = [
    {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
    },
    {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
    },
    {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
    },
];
console.log(playerList[1].favorites[1]);





let totalAge = playerList[0].age + playerList[1].age + playerList[2].age;
let averageAge = totalAge / 3;

console.log(`平均年齢は ${averageAge}です`);




function sayHello () {
    console.log("Hello")
}
sayHello();

const sayWorld = function() {
    console.log("World");
};
sayWorld();




let updatedUser = {
    ...user,
    birthday: '2000-09-27'
};

console.log(updatedUser.birthday);
console.log(user.birthday);


let updatedUser2 = {
    ...user,
    sayHello: 'Hello!'
};

console.log(updatedUser2.sayHello);
console.log(user.Hello);







let calc = {};

calc.add =function(a,b) {
    return a + b;
};

console.log(calc.add(3,4));





let calc2 = {};

calc2.subtract = function(a, b) {
    return a - b;
};

console.log(calc2.subtract (15,5));






let calcs3 = {};

calcs3.multiply = function(a, b) {
    return a * b;
};

console.log(calcs3.multiply (7, 7));





let calcs4 ={};

calcs4.divide = function(a,b) {
    return a / b;
};

console.log(calcs4.divide(10,2));







function remainder(x,y){
    return x % y ;
}

let result = remainder(5, 3);

console.log("5 を 3 で割った余りは " + result + " です。");



function foo() {
    let x = 1;
}


let text = 'javaScriptの練習';
console.log(text)

text = 'javaScriptをマスターした';
console.log(text);

