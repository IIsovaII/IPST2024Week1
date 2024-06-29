function duplication(str) {
  let arr = str.split(" ");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    //currentStr = arr[i][0] * arr[i].length; - don't work
    currentStr = arr[i][0].repeat(arr[i].length);
    newArr.push(currentStr);
  }
  return newArr.join(" ");
}

const inputString = "hello alexandr!";

// first solution
console.log(duplication(inputString));

// second solution
console.log(
  inputString
    .split(" ")
    .map((x) => x[0].repeat(x.length))
    .join(" "),
);
