process.stdin.resume();
process.stdin.setEncoding("utf-8");
let stdin_input = "";

process.stdin.on("data", function (input) {
  stdin_input += input; // read input from stdin
});

process.stdin.on("end", function () {
  main(stdin_input);
});

function main(input) {
  let len = input.length;
  let x = 0;
  let y = 0;
  let result = "";
  for (let i = 0; i < len; i++) {
    if (input.charAt(i) === "z") {
      x++;
    } else {
      y++;
    }
    if (x * 2 === y) {
      result = "Yes";
    } else {
      result = "No";
    }
  }
  console.log(result);
}
