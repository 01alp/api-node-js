//1️⃣Create an array with three integers.
const array3integers = [1, 2, 3];
console.log(array3integers, `Array Length: ${array3integers.length}`);

//2️⃣Create an array with two strings.
const array2strings = ["one", "two"];
array2strings.push("three");
console.log(array2strings, `Array Length: ${array2strings.length}`);

//3️⃣Create an array with three strings.
const array3strings = ["one", "two", "three"];
array3strings.pop();
console.log(array3strings, `Array Length: ${array3strings.length}`);

//4️⃣Create an empty array of numbers.
const emptyArray: number[] = [];
emptyArray.push(1, 2);
console.log(emptyArray, `Array Length: ${emptyArray.length}`);

//Loops
//1️⃣Create an array of five numbers.
const array5Numbers = [1, 2, 3, 4, 5];
for (const num of array5Numbers) {
  console.log(num);
}
//2️⃣Create an array of five numbers.
let sum = 0;
for (const num of array5Numbers) {
  sum += num;
}
console.log(sum);

//3️⃣Create an array of three numbers.
const array3numbers = [1, 2, 3];
const newArray: number[] = [];
for (const num of array3numbers) {
  newArray.push(num * 2);
}
console.log(newArray);

//4️⃣Create an array of three numbers.
const reverseArray: number[] = [];
for (let num = array3numbers.length - 1; num >= 0; num--) {
  reverseArray.push(array3numbers[num]);
}
console.log(reverseArray);

//TYPICAL INTERVIEW TASKS

//1️⃣Find the maximum number in an array
const givenArray = [5, 10, 15, 20, 25];
let maxNumber = givenArray[0];
for (let num of givenArray) {
  if (num > maxNumber) {
    maxNumber = num;
  }
}
console.log(maxNumber);

//2️⃣Find the minimum number in an array
let minNumber = givenArray[0];
for (let num of givenArray) {
  if (num < maxNumber) {
    maxNumber = num;
  }
}
console.log(minNumber);

//3️⃣Count the number of even numbers in an array
let count = 0;
for (let num of givenArray) {
  if (num % 2 == 0) {
    count += 1;
  }
}
console.log(count);

//4️⃣Create a new array from positive numbers
const mixNumbers = [-5, -10, -20, 10, 20, 30];
const positiveNum: number[] = [];
for (let num of mixNumbers) {
  if (num > 0) {
    positiveNum.push(num);
  }
}
console.log(positiveNum);
