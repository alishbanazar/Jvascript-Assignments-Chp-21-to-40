// ----------- Chapter 31-34 Date Methods ----------


// 1. Write a program that displays current date and time in your browser.

// var date = new Date ()
// document.write(date);

//2. Write a program that alerts the current month in words. For example December.

//  var date = new Date ()
//  var currentMonth = ["january", "feburary", "march", "april", "may","june", "july", "august", "september","october",
//     "november","december"]
//  var  month = date.getMonth()

// document.write("Current Month : " + currentMonth[month]);

//3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show
//Sun.

// var date = new Date ()
// var days = ["mon", "tues", "wed" , "thurs", "fri", "sat", "sun"]
// var todayDay = date.getDay()
// alert("Today is " + days[todayDay])

//4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

//  Create a new Date object
//  let today = new Date();

// Get the current day of the week (0 for Sunday, 6 for Saturday)
// let day = today.getDay();

// Check if the day is Saturday (6) or Sunday (0)
// if (day === 0 || day === 6) {
//     alert("It's Fun day");
// } else {
//   alert("It's a regular day");
// }

//5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month
//else shows “Last days of the month”.

// var todayDate = new Date ()
// var date = todayDate.getDate()
// if(date<16){
//     alert("First fifteen days of the month");
// }
// else{
//     alert("Last days of the month")
// }

//6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that
//hasn't been declared beforehand. Use any variable you like to represent the Date object.

// var todayDate = new Date ()
// document.write("Current date: " + todayDate + "<br>");

// var millisec = todayDate.getTime()
// document.write("Elapsed milliseconds since Januarary 1,1970 : " + millisec + "<br>");
//  document.write("Elapsed minutes since January 1, 1970: " + (millisec/(999*60)) + "<br>");

//7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

// var currentTime = new Date ()
// var currentHours = currentTime.getHours()
// if(currentTime<12){
//     alert("It's AM");
// }
// else{
//     alert("It's PM");
// }

//8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named
//laterDate.

// var laterDate = new Date(2020,11,31)
// document.write("Later date : "+ laterDate);

//9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
//Note: 1st Ramadan was on June 18, 2015

// var date = new Date(2023,2,22);
// var currentTime = new Date ();
// var minus = currentTime-date
// var formula = Math.floor(minus/(1000 * 60 * 60 * 24));
// document.write(formula + " days have passed since 1st Ramadan, 2023" );

//10. Write a program that displays in your browser the seconds that elapsed between the reference date and the
//beginning of 2015.

// var todayDate = new Date ();
// var startOf2015 = new Date(2015,0,1);
// var timeDifference = todayDate - startOf2015;
// var elapsed = Math.floor(timeDifference/1000);
// document.write("On refrence date "+ todayDate + " " + elapsed + " seconds has passed since beginning of 2015 .");

//11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and
//finally display the date object in your browser.

// var currentTime = new Date ()
// var currentHours = currentTime.getHours()
// currentHours=currentHours-1;

// document.write("current date: " + currentTime + "<br>");
// currentTime.setHours(currentHours)
// document.write("1 hour ago, it was " + currentTime);

//12. Write a program that creates a date object and show thedate in an alert box that is reset to 100 years back?

// var currentTime = new Date ()
// var yearsAgo = currentTime.getFullYear()
// yearsAgo = yearsAgo-100;
// document.write("Current date : " + currentTime + "<br>");
// currentTime.setHours(yearsAgo);
// document.write("100 years back, it was " + currentTime);

//13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

// var userInput = +prompt('ENTER YOUR AGE');
// var currentTime = new Date ();
// var yearNow = currentTime.getFullYear();
// var userYear = yearNow - userInput;
// document.write("your age is " + userInput + "<br>" + " Your birth year is " + userYear);

//14. Write a program to generate your K-Electric bill in yourbrowser. All the amounts should be rounded off to 2
//decimal places. Display the following fields: a. Customer Name b. Current Month c. Number of units d. Charges per unit
//e. Net Amount Payable (within Due Date) f. Late Payment Surcharge g. Gross Amount Payable (after Due Date)

var customerName = "Alishba Nazar Muhammad Abbasi";
var today = new Date();
var month = today.getMonth();
var monthList = ["Januarary" , "Feburary" , "March", "April", "May", "June", "July", "AUgust", "September", "October",
    "November", "December"];
var noUnits = 400;
var chgPerUnit = 18;
var netAmount = noUnits * chgPerUnit ;
var lateChrg = 350;
var afterDueDate = netAmount + lateChrg ;
document.write("<h1> K-Electric Bill </h1>" + "<br>");
document.write("Customer Name : " + customerName + "<br>");
document.write("Month : " + monthList[month] + "<br>");
document.write("Number Of Units : " + noUnits + "<br>");
document.write("Charge per Unit : " + chgPerUnit + "<br>" + "<br>");
document.write("Net Amount Payable (within Due Date) : " + netAmount + "<br>");
document.write("Net Amount Payable (within Due Date) : " + netAmount + "<br>");
document.write("Late payment surcharge : " + lateChrg + "<br>");
document.write("Gross Amount Payable (after Due Date) : " + afterDueDate + "<br>");


