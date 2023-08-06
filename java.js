// const year= 2016;
// const year= new Date().getFullYear();
//  
// 
// if (year % 4===0 && year % 100!==0 || year % 400===0){
    // alert ("It's a leap year")
    // 
// }else{
    // alert ("It's not a leap year")
// }

// const integer=9;
// 
// if(integer % 3===0 && integer % 5===0){
    // alert ("FizzBuzz")
// } else if (integer % 3===0){
    // alert ("Buzz")
// }else if (integer % 5===0) {
    // alert ("Fizz")
// }else {
    // alert ("not divisible by both 5 and 3")
// }

// Print even numbers from 1 to 20 in the console using the for loop
// for (let i=2; i<=20; i+=2){
    // console.log(i);
// }

//Calculate the sum of numbers between 1 and 10 using the for loop
// let sum=0
// for (let i=1; i<=10; i++) {
//     sum += i   
// }
// console.log(i);

//Write a script that prints the multiplication table of a number 2  in the following format:
// for (let i=1; i<= 10; i++) {
    // let result= 2*i;
    // console.log(`${2} * ${i} =${result}`)
// }

//Create an array of numbers with the values [1,3,5,7,9]
const myNumber= [1,3,5,7,9]
//1. Add the value 11 to the end of the array

// myNumber.push(11) 
    // console.log(myNumber);

//2. Remove the first element from the array

// myNumber.shift(1)
// console.log(myNumber)

//3. Replace the value at index 2 with 6

// myNumber.splice(2,1,6)
// console.log(myNumber);

//4. Check if the array contains the value 5. Print "value found!" if it does, otherwise, print "value not found!"

// if(myNumber.includes(5)) {
    // alert ("value found")
// }else{
    // alert ("value not found")
// }

//5. use loop to print all the elements of the array
// for(let i=1;i<=10;i+=2) {
    // console.log(i);
// }

//Create an array of students with two objects representing two students. Each object should have properties like name, age, and grade.
const students = [
    { name: "Temi", age: 18, grade: "A" },
    { name: "Jude", age: 17, grade: "B" }
  ];
  for(let i=0; i<students.length;i++) {
    const student= students [i];
    const upperCase= student.name.toUpperCase();
    const age= student.age;
    const gradeStu= student.grade;
    console.log(`Student ${i + 1}: Name: ${upperCase}, Age: ${age},Grade:${gradeStu}`)
  }



