function playgame(round)
{
    var round = round+1;
    console.log("Round number "+round);
    const inputs = ["rock","paper","scissors"];
    const compchoice = inputs[Math.floor(Math.random()*inputs.length)];
    var userchoice = prompt("Enter your choice");
    userchoice = userchoice.toLowerCase();
    if (inputs.includes(userchoice))
    console.log("Computer's choice is " + compchoice + " and you choice is " + userchoice);
    else
    {
        console.log("Enter a proper input");
        playgame(round-1);
    }
    if ((userchoice === "rock" && compchoice === "scissors" ) || (userchoice === "paper" && compchoice === "rock") || (userchoice === "scissors" && compchoice === "paper"))
    {
        userscore++;
    }
    else if (userchoice===compchoice)
    {
        userscore = userscore;
        compscore = compscore;
    }
    else
    {
        compscore++;
    }
}

function play()
{
    var gamecount = prompt("Enter the number of games you want to play");
    for (var i=0;i<gamecount;i++)
    {
        playgame(i);
    }
}

console.log("Hey-lo!, let's play rock paper scissors!");
var userscore = 0;
var compscore = 0;
play();
if (userscore<compscore)
    console.log("The game is over! Comp wins with a score of " + compscore);
else if (userscore>compscore)
    console.log("The game is over! You win with a score of "+userscore);
else
    console.log("The game was a tie");
