const readline = require("readline");
const fs = require("fs");

function menu() {
  const menu = fs.readFileSync("menu.txt", "utf-8");
  console.log(menu);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Votre choix: ", (choice) => {
    console.log(choice);
    rl.close();
  });
}


exports.menu = menu