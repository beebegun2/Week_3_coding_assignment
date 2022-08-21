/*Intro to JavaScript Week 3 Coding Assignment

Points possible: 75

URL to Your GitHub Repository:

https://github.com/beebegun2/Week_3_coding_assignment.git

URL to Your Coding Assignment Video:


Instructions: In VS Code, or an IDE of your choice, write the code that accomplishes the objectives listed below. Ensure that the code compiles and runs as directed. Take screenshots of the code and of the running program (make sure to get screenshots of all required functionality) and paste them in this document where instructed below. Create a new repository on GitHub for this week’s assignments and push this document, with your JavaScript project code, to the repository. Add the URL for this week’s repository to this document where instructed and submit this document to your instructor when complete.
Coding Steps:
*/

//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//  a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use  numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
        //This means subtract (position 0) from the value of in the last element which is (position 7) but don't use the numbers to reference the last element. ... that means use ages.pop and ages.shift
        console.log("original array",ages);
        let lastEl = ages.pop();
        let firstEl = ages.shift();
                
        console.log(lastEl-firstEl);
  
//    b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

for(let i = 0; i < ages.push; i++){

}
ages.push(98);
    console.log("ages after push",ages);

 //   c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
let total = 0;

for(let i = 0; i < ages.length; i++){
    total = total + ages[i];
    // 0 = 0 + 3
    // 3 = 3 + 9
    // 12 = 12 + 23 etc...
}
console.log(total);
console.log(total / ages.length);


//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

/*  a.Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
   */
for (let i = 0; i < names.length; i++) {

average = names.join('').length / names.length
console.log(average)
}
/*  b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.*/
console.log(names);

for (let i = 0; i < names.join; i++) {

newNames = names.join("");
              
console.log(newNames);
}



/*    
3.	How do you access the last element of any array? - 
    Length returns the number of elements in an array. Subtracting 1 from the length of an array gives the index of the last element of an array using which the last element can be accessed. 

4.	How do you access the first element of any array?
    The first element is accessed using index 0 

5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
*/
//For example:

namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array


/*
6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
Screenshots of Code:

Screenshots of Running Application:
*/