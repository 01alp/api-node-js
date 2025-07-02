const mixNumbers = [-5, -10, -20, 10, 20, 30];
const positiveNum: number[] = [];
for (let num of mixNumbers) {
  if (num > 0) {
    positiveNum.push(num);
  }
}
console.log(positiveNum);
