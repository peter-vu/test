function fibonacci(input) {
  let n = parseInt(input);
  let f = new Array(n + 1);
  f[0] = 0;
  f[1] = 1;
  for (let i = 2; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  console.log(f[n]);
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let std_input = "";

process.stdin.on("data", (input) => {
  std_input += input;
});

process.stdin.on("end", () => fibonacci(std_input));
