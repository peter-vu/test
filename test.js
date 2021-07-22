process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
  stdin_input += input; // Reading input from STDIN
});

process.stdin.on("end", function () {
  main(stdin_input);
});

function main(input) {
  var len = input.length;
  var x = 0;
  var y = 0;
  var result = "";
  for (var i = 0; i < len; i++) {
    if (input.charAt(i) === "z") {
      x++;
    } else {
      y++;
    }
  }
  if (x * 2 == y) {
    result = "Yes";
  } else {
    result = "No";
  }
  console.log(result);
}
