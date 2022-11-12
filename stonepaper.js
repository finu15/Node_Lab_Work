var user1 = "paper";
var user2 = "paper";

if (user1 == "stone" & user2 == "paper") {
    console.log("User 2 Wins")
}
else if (user1 == "stone" & user2 == "scissors") {
    console.log("User 1 Wins")
}
else if (user1 == "paper" & user2 == "stone") {
    console.log("User 1 Wins")
}
else if (user1 == "paper" & user2 == "scissors") {
    console.log("User 2 Wins")
}
else if (user1 == "scissors" & user2 == "paper") {
    console.log("User 1 Wins")
}
else if (user1 =="scissors" & user2 == "stone") {
    console.log("User 2 Wins")
}
else {
    console.log("No One Wins")
}
