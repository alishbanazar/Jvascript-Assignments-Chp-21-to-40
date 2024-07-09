// ----------- Chapter 35-38 Functions ----------

// Task 1
// Write a function that displays current date & time in your browser.

// function currentTime (){
//     var time = new Date();
//     document.write(time);
// }
// currentTime();

// Task 2
//2. Write a function that takes first & last name and then it greets the user using his full name.

// function greets(){
//     var first = prompt("Enter your first name");
//     var last = prompt("Enter your last name");
//     document.write("Assalam-o-Alikum ! hope you are fine." + first + " " + last);
// }
// greets();

// Task 3
//3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// function sum (){
//     var num1 = +prompt("Enter number 1");
//     var num2 = +prompt("Enter number 2");
//     var add = num1 + num2

//     document.write("The first number is " + num1 + " and the second number is " + num2 + "<br>" + 
//         "Total sum of two numbers is "  + add) 
// }
// sum();

//Task 4
// // Calculator:
// //Write a function that takes three arguments num1, num2& operator & compute the desired operation. Return andshow the desired result in your browser.

// function calculator (){
//     var num1 = +prompt("Enter number 1");
//     var operator = prompt("Enter your operator i.e;( + , - , * , /)");
//     var num2 = +prompt("Enter number 2");
//     var result ;
//     if(operator === "+"){
//         result = num1 + num2;
//     }else if(operator === "-"){
//         result = num1 - num2;
//     }else if(operator === "*"){
//         result = num1 * num2;
//     }else if(operator === "/"){
//         if(num2 !== 0){
//             result= num1 / num2
//         }else{
//             result = "Error : Division by zero"
//         }

//     }
//     else{
//         result = "Enter a valid operator ! ";
//     }
//     return num1 + operator + num2 + "=" + result
// }
// alert(calculator ());

//Task 5
// Write a function that squares its argument.

// function calculateSquare (x){
//     return x * x
// }
// var user = +prompt("Enter your number and see the square of it's number");
// var square = Math.sqrt(user);
// alert(" The square of " + user + " is " + square)

// calculateSquare(x);

//Task 6
//Write a function that computes factorial of a number.

// function factorial (){
//     var num = + prompt("Enter a number");
//     if (num == 0){
//         alert("Error! factorial is not define foe a negative numbers");

//     }
//     else{
//         var result = 1;
//         for (var i=1; i<=num; i++){
//             result *= i
//         }
//         alert("The factorila of "+ num + " is " + result);
//     }
// }
// factorial();

//Task 7
//Write a function that take start and end number as inputs& display counting in your browser.

// function counting(start,end){
//         for(var i = start; i <= end; i++ ){
//             document.write(i + '<br>');
//         }
//     }
//     var start = +prompt("Enter start number for counting:");
//     var end = +prompt("Enter end number for counting:");
//     counting(start,end);

//Task 8
//Write a nested function that computes hypotenuse of aright angle triangle.Hypotenuse2 = Base2 + Perpendicular2
//Take base and perpendicular as inputs.Outer function : calculateHypotenuse()Inner function: calculateSquare()


function calculateHypotenuse(){
    function calculateSquare (x){
        return x * x

    }

var base = +prompt ("Enter the base of a right angle triangle ");
var perpendicular = +prompt ("Enter the baseperpendicular of a right angle triangle ");  
var hypotenuse = Math.sqrt(calculateSquare(base) + calculateHypotenuse (perpendicular));
alert("The hypoteneuse of a right angle triangle base " + base  + " and  perpendicular " + perpendicular + " is " + hypotenuse);

}
calculateHypotenuse();