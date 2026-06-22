// Initial scores: -
let userScore = 0;
let computerScore = 0;

let user_Score = document.getElementById("yourScore");
let computer_Score = document.getElementById("systemScore");

user_Score.innerText = 0;
computer_Score.innerText = 0;

let subHeading = document.getElementById("subHeading");

let userColumn = document.getElementById("you");
let computerColumn = document.getElementById("system");

let body = document.getElementById("body");

let mode = document.getElementById("mode");
let lightMode = true;

//adding light and dark mode: -
mode.addEventListener("click", () => {
    if(lightMode === true)    // the website is currently in light mode
    {
        mode.innerText = "🌛";
        lightMode = false;
        subHeading.style.color = "white";
        user_Score.style.color = "white";
        computer_Score.style.color = "white";
        userColumn.style.color = "white";
        computerColumn.style.color = "white";
        body.style.backgroundColor = "#1A1A2E";
    }
    else    // the website is currently in dark mode
    {
        mode.innerText = "🌞";
        lightMode = true;
        subHeading.style.color = "black";
        user_Score.style.color = "black";
        computer_Score.style.color = "black";
        userColumn.style.color = "black";
        computerColumn.style.color = "black";
        body.style.backgroundColor = "#E6E6FA";
    }
});

let moveDescription = document.getElementById("move");

let result;

let stoneClick = document.getElementById("Stone");

// action for clicking on stone
stoneClick.addEventListener("click", () => {

    let computerChoice = computerMove();
    winningRules("Stone", computerChoice);
});

let paperClick = document.getElementById("Paper");

// action for clicking on paper
paperClick.addEventListener("click", () => {

    let computerChoice = computerMove();
    winningRules("Paper", computerChoice);
});

let scissorsClick = document.getElementById("Scissors");

// action for clicking on scissors
scissorsClick.addEventListener("click", () => {

    let computerChoice = computerMove();
    winningRules("Scissors", computerChoice);
});

// Computer's actions: - (logic)
const computerMove = () => {
    const choices = ["Stone", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// winning rules for the game: -
const winningRules = (userClick, computerClick) => {
    if(userClick === computerClick)
    {
        moveDescription.style.background = "#6B7280";
        moveDescription.innerText = "It's a draw!🤝";
    }
    else if((userClick === "Stone" && computerClick === "Scissors") ||
            (userClick === "Paper" && computerClick === "Stone") ||
            (userClick === "Scissors" && computerClick === "Paper"))
            {
                userScore++;
                user_Score.innerText = userScore;
                moveDescription.style.background = "#16A34A";
                moveDescription.innerText = `${userClick} beats ${computerClick}, You win!🎉`;
            }
    else
    {
        computerScore++;
        computer_Score.innerText = computerScore;
        moveDescription.style.background = "#DC2626";
        moveDescription.innerText = `${computerClick} beats ${userClick}, Computer wins!🎉`;
    }
}