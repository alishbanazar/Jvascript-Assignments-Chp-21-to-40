// ----------- Chapter 21-25 String Methods ----------

// 1 Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable
//titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
//  alert(" Hello "+ firstName + " " + lastName + "!");

 //2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user
 //input in your browser.

//  var userMobile =prompt ("Write your favourite phone model");
//  var userLength= userMobile.length
//  document.write(userMobile + "<br>" + "Length of string is : "+ userLength)

//3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

// var findWord = "Pakistani";
// var indexNo = findWord.indexOf("n")
// document.write("String : " + findWord + "<br>" + " Index of 'n' :"+ indexNo);

//4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// var word = "Hello world";
// var lastIndex = word.lastIndexOf("l");
// document.write("String : " + word + "<br>" + "Last index of 'l' :"+ lastIndex);

//5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// var word = "Pakistani";
// var character = word.charAt(3);
// document.write("String : " + word + "<br>" + "Character at index 3 :"+ character);

//6. Repeat Q1 using string concat() method.

// var firstName = prompt("Enter your first name: ");
//  var lastName = prompt("Enter your last name: ");
//  alert('Hello '+firstName.concat(lastName));

//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// var cityName = "Hyderabad";
// var replace = cityName.replace("Islamabad");
// document.write("City : " + cityName + "<br>" + "After replacement :"+ replace);

//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace=message.replace(/and/g,'&');
// document.write("Message :"+message+"<br>"+"After replacement :"+replace);

//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

//  var string = "472";
//  var num = Number(str);
//  document.write("value: " + string + "<br>");
//  document.write("Type: " + typeof(string) + "<br>");
//  document.write("value: " + num + "<br>");
//  document.write("Type: " + typeof(num) + "<br>");

//10. Write a program that takes user input. Convert and show the input in capital letters.

// var userInput = prompt("Please enter any word");
// var changing = userInput.toUpperCase();
// document.write("User input :"+ userInput + "<br>" + " Upper case :"+ changing);

//11. Write a program that takes user input. Convert and show the input in title case.

// var word = prompt("Enter any word");
// var firstLetter = word[0].toUpperCase();
// var restLetter = word.slice(1).toLowerCase();
// var result = firstLetter + restLetter
// document.write("User input :"+ word + "<br>" + "Title case :"+ result);

//12. Write a program that converts the variable num to string.
//var num = 35.36 ;
//Remove the dot to display “3536” display in your browser.

//  var num = 35.36;
// Convert to string and remove the dot
// var numStr = num.toString().replace(".", "");

 // Display result
// document.write("Number :" + num + "<br>" +" Result :" + numStr);

//13. Write a program to take user input and store username in a variable. If the username contains any special symbol
//among [@ . , !], prompt the user to enter a valid username.For character codes of [@ .
//Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var userInput = prompt ("Enter your valid username");
// var charCode;
// for (var i=0;i<userInput.length;i++){
//     charCode=userInput.charCodeAt(i);
//     if(charCode===33||charCode===44||charCode===46||charCode===64){
//         alert("Please enter a valid username")
//      }
// }

//14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an
//array. After searching, prompt the user whether the given item is found in the list or not.Note: Perform case insensitive search. Whether the user
//enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:

// var arr =["cake", "cookie","chipe","patties"];
// var userInput = prompt("Wellcome to sweet bakery! What do you want to order sir/mam ?");
// userInput=userInput.toLowerCase()
// flag=false;
// for (var i=0; i<arr.length; i++){
//     if(userInput == arr[i]){
//         document.write(arr[i] + "is avalaible in our bakery at" + i + "index number" )
//     }
// }
// if(flag===false){
//          document.write("we are sorry" + userInput  + "is not avalible in our bakery.")
//     }

//15. Write a program to take password as an input fromuser. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,prompt the user to enter a valid password.For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var password, isValid;
// for (;;) {
//         password = prompt("Enter a valid password (at least 6 characters, must contain letters and numbers, cannot start with a number):");
//         isValid = /^[a-zA-Z]/.test(password) && /[a-zA-Z]/.test(password) && /\d/.test(password) && password.length >= 6;
//         if (isValid) break;
//         alert("Invalid password. Please try again.");
//     }
//     document.write("Your password is valid.");
    
//16. Write a program to convert the following string to an array using string split method.

// var university = "University of Karachi";
// var splittedArr = university.split("");
// for(var i=0;i<university.length;i++){
//     document.write(splittedArr[i] + "<br>");
// }

//17. Write a program to display the last character of a user input.

// var userInput=prompt('Write any word');
// document.write('User input :'+userInput+'<br>'+'Last character of input:'+userInput[userInput.length-1]);

//18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of
//occurrences of word “the” in given string.

// var str='The quick brown fox jumps over the lazy dog';
// str =str.toLowerCase();
// var count=str.match(/the/g);
// var length=count.length;
// document.write('Text:'+str+'<br>'+'There are '+length+' occurence(s) of word "the"');

// ---------------------------End of Chap 21-25