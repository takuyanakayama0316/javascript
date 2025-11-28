let randomsNum = Math.floor(Math.random()*10);

console.log(randomsNum);



<<<<<<< HEAD

function HelloWorld(){
    console.log('Hello World!')
}
setTimeout(HelloWorld,3000);

=======
setTimeout(() => {
  console.log("Hello World!");
}, 3000);
>>>>>>> practice




function printName(firstName, formatter) {
<<<<<<< HEAD
    console.log(formatter(firstName));
=======
  console.log(formatter(firstName));
>>>>>>> practice
}

const addIntro = (name) => '私の名前は' + name + 'です。';

<<<<<<< HEAD
printName('安藤', addIntro);

=======
printName('中山',addIntro);
>>>>>>> practice




let num = 1;

<<<<<<< HEAD
if (num > 0){
    console.log('num is greater than 0');
}else if (num < 0){
    console.log('num is less than 0');
}else if (num == 0){
    console.log('num is 0');
}

=======
if (num>0) {
  console.log('num is greater than 0');
}else if (num<0) {
  console.log('num is less than 0');
}else {
  console.log('num is 0');
};
>>>>>>> practice




let numbers = [];
<<<<<<< HEAD
let sum = 0;
=======
>>>>>>> practice

for (let i = 0; i < 100; i++) {
  numbers.push(i);
}

<<<<<<< HEAD
=======

>>>>>>> practice
console.log(numbers);







let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  let value = mixed[i];

  if (typeof value === 'number') {
    if (value % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('not number');
  }
}


<<<<<<< HEAD
=======




>>>>>>> practice
