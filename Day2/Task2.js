function fib(a, b) {
  console.log(a);
  if (b < 200) fib(b, a + b);
}

fib(1, 1);
