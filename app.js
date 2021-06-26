const userScore = document.getElementById("user-score");
const comptScore = document.getElementById("comp-score");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let result = document.getElementById("result");
const img = document.querySelectorAll("img");
var scoreHuman = 0;
var scoreRobot = 0;

let wordsListe = ["R", "P", "S"];
// let compChoice = Math.floor(Math.random() * 3);
// console.log(compChoice)

function game(userChoice, compChoice = wordsListe[Math.floor(Math.random() * 3)]) {
  let choices = userChoice + compChoice;
  switch (choices) {
    case "RS":
      scoreHuman++;
      userScore.innerHTML = scoreHuman;
      result.innerHTML = " Rock beats Scissors You Win 🔥🔥🔥 ";
      setTimeout(function () {
        result.innerHTML = "👨 PICK ONE 🤖 ";
      }, 2000);
      img[0].classList.add("win");
      setTimeout(function () {
        img[0].classList.remove("win");
      }, 2000);
      end();
      break;
    case "PR":
      scoreHuman++;
      userScore.innerHTML = scoreHuman;
      result.innerHTML = " Paper beats Rock You Win 🔥🔥🔥 ";
      setTimeout(function () {
        result.innerHTML = "👨 PICK ONE 🤖 ";
      }, 2000);
      img[1].classList.add("win");
      setTimeout(function () {
        img[1].classList.remove("win");
      }, 2000);
      end();
      break;
    case "SP":
      scoreHuman++;
      userScore.innerHTML = scoreHuman;
      result.innerHTML = " Scissors beats Paper You Win 🔥🔥🔥 ";
      setTimeout(function () {
        result.innerHTML = "👨 PICK ONE 🤖 ";
      }, 2000);
      img[2].classList.add("win");
      setTimeout(function () {
        img[2].classList.remove("win");
      }, 2000);
      end();
      break;
    case "PS":
      scoreRobot++;
      comptScore.innerHTML = scoreRobot;
      result.innerHTML = "Scissors beats Paper§ You lose 😢😢😢 ";
      setTimeout(function () {
        result.innerHTML = "👨 PICK ONE 🤖 ";
      }, 2000);
      img[2].classList.add("loose");
      setTimeout(function () {
        img[2].classList.remove("loose");
      }, 2000);
      end();
      break;
    case "RP":
      scoreRobot++;
      comptScore.innerHTML = scoreRobot;
      result.innerHTML = "Paper beats Rock You lose 😢😢😢 ";
      setTimeout(function () {
        result.innerHTML = "👨 PICK ONE 🤖 ";
      }, 2000);
      img[0].classList.add("loose");
      setTimeout(function () {
        img[0].classList.remove("loose");
      }, 2000);
      end();
      break;
    case "SR":
      scoreRobot++;
      comptScore.innerHTML = scoreRobot;
      result.innerHTML = "Rock beats Scissors You lose 😢😢😢 ";
      setTimeout(function () {
        result.innerHTML = "👨 PICK ONE 🤖 ";
      }, 2000);
      img[2].classList.add("loose");
      setTimeout(function () {
        img[2].classList.remove("loose");
      }, 2000);
      end();
      break;
    case "RR":
      result.innerHTML = "This is Draw 🤝  ";
      setTimeout(function () {
        result.innerHTML = "👨 PICK ONE 🤖 ";
      }, 2000);
      img[0].classList.add("draw");
      setTimeout(function () {
        img[0].classList.remove("draw");
      }, 2000);
      end();
      break;
    case "SS":
      result.innerHTML = "This is Draw 🤝  ";
      setTimeout(function () {
        result.innerHTML = "👨 PICK ONE 🤖 ";
      }, 2000);
      img[2].classList.add("draw");
      setTimeout(function () {
        img[2].classList.remove("draw");
      }, 2000);
      end();
      break;
    case "PP":
      result.innerHTML = "This is Draw 🤝   ";
      setTimeout(function () {
        result.innerHTML = "👨 PICK ONE 🤖 ";
      }, 2000);
      img[1].classList.add("draw");
      setTimeout(function () {
        img[1].classList.remove("draw");
      }, 2000);
      end();
      break;
  }
}

rock.addEventListener("click", function () {
  game("R");
});
paper.addEventListener("click", function () {
  game("P");
});
scissors.addEventListener("click", function () {
  game("S");
});

function end() {
  if (scoreHuman == 5 || scoreRobot == 5) {
    alert('⚠ End of the game ⛔  Press "F5" to reload!!  🔂 ');
    scoreRobot = 0;
    scoreHuman = 0;
    comptScore.innerHTML = scoreRobot;z
    userScore.innerHTML = scoreHuman;
  }
}
