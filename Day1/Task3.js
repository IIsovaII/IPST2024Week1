function palindromes(str){
  let res = str;
  for(let i = str.length - 2; i >= 0; i--){
    res += str[i];
  }
  return res;
}

function palindromes2(str){
  return str + str.slice(0,-1).split('').reverse().join('');
}

const inputArr = ["дим", "манек", "рота"]

//first solution
inputArr.forEach(function(str){
  console.log(palindromes(str));
})

//second solution
inputArr.forEach(function(str){
  console.log(palindromes2(str));
})