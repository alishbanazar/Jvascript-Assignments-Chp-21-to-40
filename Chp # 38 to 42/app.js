//----------CHAPTER 38-42
// ------TASK 1
//Write a custom function power ( a, b ), to calculate the value of a raised to b.

// function power(a,b){
//     document.write(a**b)
// }
// power(2,2);

// ------TASK 2
//Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.

// var year = prompt("Enter your year");
// switch(year){
//     case "2012":
//         alert("Leap Year!");
//         break;
//     case "2016":
//         alert("Leap Year!");
//         break;
//     case "2020":
//         alert("Leap Year!");
//         break;
//     default:
//         alert("This is not a leap year");

// }

// ------TASK 3
//If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by area = S(S − a)(S − b)(S − c)
//where, S = ( a + b + c ) / 2 Calculate area of triangle using 2 functions

// var a = +prompt("Enter your first side");
// var b = +prompt("Enter your second side");
// var c = +prompt("Enter your third side");

// function findingS(a,b,c){
//     var S = (a+b+c)/2;
//     return S
// }
// var foundS = findingS(a,b,c);
// alert("The side of the triangle is " + foundS);

// function area(findingS){
//     var findingArea = foundS*(foundS-a)*(foundS-b)*(foundS-c)
//     return findingArea;
// }

// var result = area(foundS);
// alert("The area of a triangle is " + " = " + result);

// ------TASK 4
//. Write a function that receives marks received by a student in 3  subjects and returns the average and percentage of these
//marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions
//from mainFunction and display result in mainFunction.

// function mainFunction() {
//     var sub1 = +prompt('Enter first subject marks');
//     var sub2 = +prompt('Enter second subject marks');
//     var sub3 = +prompt('Enter third subject marks');
//     var total = +prompt('Enter total marks')
//     var average = ave(sub1, sub2, sub3);
//     var per = percen(sub1, sub2, sub3, total);
//     document.write('<h3>' + 'Average is ' + '</h3>' + average + '<br>');
//     document.write('<h3>' + 'Percentage is ' + '</h3>' + per+' %' + '<br>');

// }
// function ave(a, b, c) {
//     var av = (a + b + c) / 3;
//     av=av.toFixed(2)
//     return av;
// }

// function percen(a, b, c, total) {
//     var percentage = ((a + b + c) / total) * 100;
//    percentage= percentage.toFixed(2);
//     return percentage;
// }
// mainFunction();

//// ------TASK 5
//You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code 
//for single character as of now

// function check (str,char) {
//     var add;
//     for (var i=0; i<str.length; i++){
//        if(str[i] === char){
//         add = i
//         break
//        }
       
//     }
//     return add; 
    
// }
// var str = "Hello world!";
// var indexOf = prompt("Write a character do you find");
// var result = check(str,indexOf);
// document.write("The index of " + indexOf +" is "  + result);