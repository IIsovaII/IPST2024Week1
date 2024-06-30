function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

function oneDim(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i].forEach((el) => {
      console.log(el);
      res.push(el);
    });
  }
  return res;
}

const inputArr = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];

// first solution
let oneDimArr = oneDim(inputArr);

console.log(oneDimArr);
console.log(quickSort(oneDimArr));

// second solution
let oneDimArr2 = [].concat(...inputArr).sort();
console.log(oneDimArr2);
