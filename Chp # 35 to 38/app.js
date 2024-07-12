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

            //    2nd method
// function createLoop (firstNum , lastNum ){
//     for (var i=firstNum; i<=lastNum; i++){
//         document.write(i + "<br>")
//     }
// }  
// createLoop(2,20);          

//Task 8
//Write a nested function that computes hypotenuse of aright angle triangle.Hypotenuse2 = Base2 + Perpendicular2
//Take base and perpendicular as inputs.Outer function : calculateHypotenuse()Inner function: calculateSquare()

// function calculateHypotenuse(){
//     var base = + prompt("Enter the base of a right angle triangle ");
//     var perpendicular = +prompt ("Enter the baseperpendicular of a right angle triangle ");  
//     var hypoteneuse = calculateSquare(base)+ calculateSquare(perpendicular);
//     alert("The hypoteneues of right angle triangle is base " + base + " and perpendicular " + perpendicular + " is " + hypoteneuse)

//     function calculateSquare(value) {
//         return value * value
        
//     }
// }
// calculateHypotenuse();

//Task 9
//Write a function that calculates the area of a rectangle.A = width * height Pass width and height in following manner:
//i. Arguments as value ii. Arguments as variables

// -----------------using variable------------
// function calculateArea(){
//     var width = 45;
//     var height = 80;
//     var total = width * height;
//     alert("The width of area  is " + width + " and the height of area is " + height + "<br>" + "The area of rectanle is " + total)

// }
// calculateArea();

//----------------using argument-----------------
// function calculateArea(width,height){
//    var A = width * height;
//     return A;

// }
// var width = + prompt("Enter the width of the rectangle");
// var height = + prompt("Enter the height of the rectangle");
// var result = calculateArea(width,height);
// document.write(result);

//Task 10
//Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence
//that reads the same backward as forward, e.g., madam.

// function palindrome (){
//     var text = prompt("Enter your word to check whether is is palindrome or not");
//     var reverseText = " ";
//     for(var i=text.length-1; i>=0; i--){
//         reverseText += text[i]
//         if(text == reverseText){
//             alert("Amazing it's an Palindrome word 🤩🥰");
//         }
//         else{
//             alert("sorry! it's not a palindrome word try again 😐 ") 
//         }
//     }
// }
// palindrome();
 
//---------------2nd method--------------------
// function palindrome (){
//     var text = prompt("Enter some text");
//     var splitText = text.split( " ");
//     var reverse = splitText.reverse( );
//     var finalString = reverse.join(" ");

//     if(finalString == text){
//         alert( text + " It's a palindrome word");

//     }
//     else{
//         alert( text + " It's not a palindrome word");
//     }
   
// }
// palindrome();

//Task 11
//Write a JavaScript function that accepts a string as aparameter and converts the first letter of each word of the
//string in upper case.EXAMPLE STRING : 'the quick brown fox' EXPECTED OUTPUT : 'The Quick Brown Fox"

// function upperCase(str){
//     var arr = str.split(" ");
//     var newArr = [];
//     for( var i=0; i<arr.length; i++){
//         newArr.push(arr[i].chartAt(0).toUpperCase() + arr[i].slice(1));
//         return newArr.join(" ");

//     }
//     return newArr.join(" ");
//     }
//     var str = 'the quick brown fox';
//     document.write('EXAMPLE  SRING :' + str + '<br>')
//     document.write('EXPECTED  SRING :' + result + '<br>')
//     var result = upperCase(str);
    
//Task 12
//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
//EXAMPLE STRING : 'Web Development Tutorial' EXPECTED OUTPUT : 'Development'

// function longest(str) {
//         var word = str.split(' ');
//         var longestWord = word[0].length;
//         for (var i = 0; i < word.length; i++) {
//             if (longestWord < word[i].length) {
//                 longestWord = word [i]
//             }
//         }
//         return longestWord;
//     }
//     var str = 'Web Development Tutorial ';
//     var result = longest(str);
//     document.write('EXAMPLE  SRING :' + str + '<br>')
//     document.write('EXPECTED  SRING :' + result + '<br>')
    
//Task 13
//Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of
//occurrences of the specified letter within the string. Sample arguments : 'JSResourceS.com', 'o'

// function count(str, letter) {
//         var find=0;   
//         for (var i = 0; i < str.length; i++) {
//             if (str[i] === letter) {
//                 find += 1;
//             }
//         }
//         return find
//     }
//     var str = 'JSResourceS.com';
//     var letter = 'o'
//     var result = count(str, letter);
//     document.write('The occurence of 0 in this string is ' + result)
    

//Task 14
//The Geometrizer Create 2 functions that calculate properties of a circle, usingthe definitions here.
//Create a function called calcCircumference: Create a function called calcArea:

//  Circumference of circle = 2πr
// Area of circle = πr2

// function calcCircumference(value){
//     var circumference = 2 * 3.142 * value
//     return circumference
// }
// function calcArea(value){
//     var area = 3.142 *(value * value);
//     return area
// }
// var radius = +prompt("Enter the radius of circle ");
// var circumference = calcCircumference(radius);
// var area= calcArea(radius);
// document.write('The Circumference of circle is '+ circumference +'<br>');
// document.write('The Area of circle is '+ area +'<br>');


// --------------------COMPLETED-------------------------------










