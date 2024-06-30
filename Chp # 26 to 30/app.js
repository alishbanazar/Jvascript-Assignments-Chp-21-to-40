// ----------- Chapter 26-30 Maths Methods ----------

//1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number b. round off value of the number c. floor value of the number d. ceil value of the number

// var num = prompt("Enter any positive");
// var round = Math.round(num);
// var floor = Math.floor(num);
// var ceil = Math.ceil(num);
// document.write("number : " + num + "<br>");
// document.write("round off value : " + round + "<br>");
// document.write("floor value : " + floor + "<br>");
// document.write("ceil value : " + ceil + "<br>");

//2. Write a program that takes a negative floating point number from user & display the following in your browser.
//a. numberb. round off value of the numberc. floor value of the numberd. ceil value of the number

//  var num = prompt("Enter negative floating values");
// var round = Math.round(num);
// var floor = Math.floor(num);
// var ceil = Math.ceil(num);
// document.write("number : " + num + "<br>");
// document.write("round off value : " + round + "<br>");
// document.write("floor value : " + floor + "<br>");
// document.write("ceil value : " + ceil + "<br>");

//3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var num=+prompt('Enter number :');
// var abs=Math.abs(num);
// document.write('The absolute value of '+num+'  is '+abs)

 //4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser

//  var randomNo = Math.random()*6;
//  var floor = Math.floor(randomNo);
//  document.write("Random die value " + floor  )

//5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your

// var coinValue =Math.random()*3;
// var floor =Math.floor(coinValue);
// console.log(floor);
// if(coinValue<2){
//     document.write(floor + "<br>" + "Random coin value : " + "Tails");
// }
// else{
//     document.write(floor + "<br>" + "Random coin value : " + "Heads");
// }

//6. Write a program that shows a random number between 1 and 100 in your browser.

// var num = Math.random()*100;
// var floor = Math.floor( Math.random()*100);
// document.write("random number between 1 and 100 :" + floor)

//7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.
//Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms

// var weight=prompt('Enter your weight in kilogramas');
// var parse=parseFloat(weight);
// document.write('The weight of userr is '+parse.toFixed(1)+' kilograms');

//8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number
//between 1 and 10. If the user input equals the secret number, congratulate the user.

// var randomNo=Math.ceil((Math.random()*10));
// document.write(randomNo)
// var userInput=prompt('Enter a number in between 1 and 10');
// if(userInput===randomNo){
//     alert('Congratulations  you entered the same number')
// }
// else{
//     alert('Try Again')
// }
