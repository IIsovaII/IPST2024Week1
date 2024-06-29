// 1
function unique(str) {
  let result = "";
  for (let i = 0; i < str.length; i++)
    if (!result.includes(str[i])) result += str[i];
  return result;
}

const inputString = "DDADSADASDAAADS";

// first solution
console.log(unique(inputString));

// second solution
let result = inputString.forEach(function (char) {
  if (!result.includes(char)) result += char;
});
console.log(result);

// more efficient solution
console.log([...new Set(inputString)].join(""));
