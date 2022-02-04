const readline = require("readline");
const fs = require("fs");

class Presentation {
  menu() {
    const menu = fs.readFileSync("menu.txt", "utf-8");
    console.log(menu);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Votre choix: ", (choice) => {
      rl.close();
      switch (choice) {
        case "1":
        case "2":
        case "3":
        case "4":
          console.log("choix:", choice);
          break;
        case "99":
          console.log("Au revoir !");
          process.exit(0);
          break;
        default:
          console.log("Erreur de choix");
      }
    });
  }
}

exports.Presentation = Presentation;
