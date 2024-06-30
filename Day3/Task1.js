function selection(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
  return arr;
}

function binarySearch(arr, item) {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] == item) {
      return mid;
    } else if (arr[mid] < item) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

let inputArr = [6, 1, 7, 3, 5, 8, 0, -1, 3, 2, 4, 5];

console.log(selection(inputArr));

console.log(binarySearch(selection(inputArr), 0));
