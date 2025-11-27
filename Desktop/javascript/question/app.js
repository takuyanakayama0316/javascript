let randomsNum = Math.floor(Math.random()*10);

console.log(randomsNum);



setTimeout(() => {
  console.log("Hello World!");
}, 3000);




function printName(firstName, formatter) {
  console.log(formatter(firstName));
}

const addIntro = (name) => '私の名前は' + name + 'です。';

printName('中山',addIntro);




let num = 1;

if (num>0) {
  console.log('num is greater than 0');
}else if (num<0) {
  console.log('num is less than 0');
}else {
  console.log('num is 0');
};




let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers.push(i);
}


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






