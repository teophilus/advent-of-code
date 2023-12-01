const fs = require("fs");
const file: string = 'input.txt';
const input: string = fs.readFileSync(file, 'utf8');

function main(input: string) {
  let array: string[] = input.split('\n');
  let list: number[] = [];

  for (let i = 0; i < array.length; i++) {
    let arr: string = array[i];


    let numbers = arr.match(/\d+(\.\d+)?/g);
    let nums = numbers ? numbers.map(Number).join('') : '';

    if (nums) {
      let first: string = nums[0];
      let last: string = nums[nums.length - 1];
      list.push(Number(first + last));
    }
  }

  const add = (acc: number, a: number) => {
    return acc + a;
  };

  const sum: number = list.reduce(add, 0);
  console.log(sum);
}

main(input);
