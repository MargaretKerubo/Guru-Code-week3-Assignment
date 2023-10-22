// Question 1
const number = Number("45")
// Added the Number() function to the line above to convert "45" to a number
console.log(number)
console.log(typeof number)



// Question 2
// Converted "20" into a number explicitly using Number() function
const printSum = parseInt("20") + 40.      //let the result print 60. //*hint: 60.*
console.log(printSum)

// Concatenated the variable printSum to create the sentence
const sentence = "I am " + (23 + 4) + " years old"     //*hint: “I am 27 years old”*
console.log(sentence)



// Question 3
// Replaced 'const' with 'let': Using const throws an error since a constant variable cannot be assigned a new value later.
let myValue = "May";
myValue = 86;
console.log(myValue)



// Question 4
// Declaring and initializing variables
const firstName = "Margaret";
const lastName = "Kerubo";
const testScore = 85;
const codingCourse = "Guru Academy JavaScript Course";

let Grade;  //Additional variable for the grade



//Question 5: Switch statement for determining the grade
switch (true) {
    case testScore >= 0 && testScore < 30:
        Grade = "F9";
        break;
                           
    case testScore >= 30 && testScore <= 40:
        Grade = "E";
        break;

    case testScore >= 41 && testScore <= 49:
        Grade = "D";
        break;
                    
    case testScore >= 50 && testScore <= 59:
        Grade = "C";
        break;

    case testScore >= 60 && testScore <= 69:
        Grade = "B";
        break;

    case testScore >= 70 && testScore <= 100:
        Grade = "A";
        break;

    case testScore >= 101:
        Grade = "The test score is out of range";
        break;

    default:
        Grade = ("No test score");
        break;
}

console.log("Congratulations " + firstName + " " + lastName + " for completing the " + codingCourse + " test. Your score is " + testScore + ", grade: " + Grade);



// Question 6
let num = 1;   // Declared a variable num and initialized it to 1, since counting starts from 1

// Using while loop
while (num <= 20)   //condition to be met; while num is <= 20 
{
    console.log(num);  
    num ++;        //Incrementing num
}