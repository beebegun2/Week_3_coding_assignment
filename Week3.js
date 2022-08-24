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
// use a loop to iterate thru the array again and concatenate all of the names together
// then separate by spaces
// print to console logs

console.log(names);

// loop concatenating all of the names together then separate with spaces ..instead of '' use ' '
for (let i = 0; i < names.length; i++) {

nameJoin = names.join(' ')
console.log(nameJoin)
}

/*    
3.	How do you access the last element of any array? - 
    Length returns the number of elements in an array. Subtracting 1 from the length of an array gives the index of the last element of an array using which the last element can be accessed. 

4.	How do you access the first element of any array?
    The first element is accessed using index 0 

5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

//For example:

namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array

for (let i = 0; i < namesArray; i++) {
    */

let namesArray = ["Kelly", "Sam", "Kate"];
let nameLengths = namesArray.map(function(element){
    return element.length;
});
console.log(nameLengths);

/*
6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
*/
let lengthSum = 0
for (let i = 0; i < nameLengths.length; i++) {
    
    lengthSum = lengthSum + nameLengths[i];
}
console.log(lengthSum);

/*7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
*/
let word = "Alright";
let n = 3;
console.log("Phrase by Matthew McConaughey");
function wordRepeat(){
for(let i = 0; i < word.repeat; i++){
    wordRepeat = word.repeat, [3]
}
}
//call function
wordRepeat(word, n);

console.log (`${word.repeat(3)}`);

/*
8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
*/

function fullName(firstName, lastName){
    return firstName + " " + lastName;
  }
  
  //calling the function and assigning the return to a variable
  var fullname = fullName("Shannon", "Beebe");
  
  console.log(fullname)

/*
9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
// make a function of numbers */
function addingNumbers(myArrayParameter) {
console.log("This is my function of adding numbers", myArrayParameter);
//return a boolean return true - if sum of all together is more than 100 / else return false i.e. ... if (a + b < c){ console.log("false")}else{console.log(false);} a is the parameter... b is the array... c is the boolean
if(myArrayParameter + myArray > 100) {
    console.log('True');
}else{
console.log('False');
}
} 
//make an array
let myArray = [5, 9, 14, 30, 6];
//referencing the parameter from above
addingNumbers(myArray);

//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.

let avg = myNum => {
    let sum = myNum.reduce((a, b) => a + b);
    let average = sum/myNum.length;
    return average;
  }
  
  console.log(avg([18, 21, 23, 28, 44, 45]));
  

  let myNumbers = [18, 21, 23, 28, 44, 45];
  let newArray = [1,2,3,4]

function calcAverage(array){ //inside paranthesis is a parameter
    let total = 0; //always need a starting number
    let average;
    
    //body of the function - logic - calculate average
    // we know we need to itterate our array to calc average
    for(let i =0; i < array.length; i++) {
        total = total + array[i] //we are adding every number of the array
        //0 = 0 +18
        //18 = 18 + 21
        //etc until the final output
        console.log(array.length)
        average = total / array.length
    }
    console.log(total)
    console.log(average)
}

//call function 
calcAverage(myNumbers); //inside paranthises is called the "argument to the function"

//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

let myNumbers2 = [18, 21, 23, 28, 44, 45];
  let newArray2 = [1,2,3,4]

function calcAverage2(array, array2){ //inside paranthesis is a parameter
    let total2 = 0; //always need a starting number
    let average2;
    console.log("This is my function of averaging two arrays of numbers then finding which array is higher")
    //body of the function - logic - calculate average
    // we know we need to itterate our array to calc average
    for(let i =0; i < array2.length; i++) {
        total2 = total2 + array2[i] //we are adding every number of the array
        //0 = 0 +18
        //18 = 18 + 21
        //etc until the final output
        console.log(array2.length)
        average2 = total2 / array2.length
    }
    let total = 0; //always need a starting number
    let average;
    //body of the function - logic - calculate average
    // we know we need to itterate our array to calc average
    for(let i =0; i < array.length; i++) {
        total = total + array[i] //we are adding every number of the array
        //0 = 0 +18
        //18 = 18 + 21
        //etc until the final output
        console.log(array.length)
        average = total / array.length
}
console.log(average, average2);
if(array > array2){
    console.log ("Array is larger than Array2")
}
else if(array < array2){
    console.log("Array2 is larger than Array")
}
}
//call function 
calcAverage2(myNumbers, newArray); //inside paranthises is called the "argument to the function"



//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
//write a function
let temp = 98;
let moneyInPocket = 15;
console.log("This is my function willBuyDrink if its hot and I have enough money");
function willBuyDrink() {
    
}
//create a boolean isHotOutside and a number moneyInPocket
if((temp > 100) && (moneyInPocket > 10.50)){
    console.log("true")
}
else if ((temp < 100) || (moneyInPocket < 10.50)){ 
    console.log("It is not hot enough to buy a drink")
}
//return true if it is hot outside AND if moneyInPocket is greater than 10.50

//call function
willBuyDrink(temp, moneyInPocket);


//13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

function myDogsNames(a,b){
    console.log("I needed an easier function after this coding Assignment");

return a + ' '+ b;
}
console.log(myDogsNames('Marley',"and"+" " + 'Mina'));

//saving more information to upload to my repo.

//I turned in my assignment not realizing there were 2 videos needed, the intro and for the coding with the explanation of what I did here. I turned in the intro of me but, I honestly can't explain what is going on with the coding since it is all still so confusing and why something works in one spot and not in another, so I will just take the loss of points. :( 