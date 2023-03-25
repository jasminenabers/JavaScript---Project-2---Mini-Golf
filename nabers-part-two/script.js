// (prompt) Welcome to GC mini golf! What is your name?
// Tiger
// (prompt) Hi, Tiger! Would you like to play 3 or 6 holes?
// 6
// (prompt) How many putts for hole 1? (par: 3) 
// 1
// (prompt) How many putts for hole 2? (par: 3) 
// 1
// (prompt) How many putts for hole 3? (par: 3) 
// 6
// (prompt) How many putts for hole 4? (par: 3) 
// 2
// (prompt) How many putts for hole 5? (par: 3) 
// 4
// (prompt) How many putts for hole 6? (par: 3) 
// 1
// (console) Great job, Tiger! Your total par was: -3.

// Explanation: 
// The course par is 18 (3 for each of the 6 holes) 
// The user’s score starts at 0.
// The user got a hole-in-one on the first hole with just one putt, bringing their score to 1.
// The user also got a hole-in-one on the second hole. Score is now 2.
// The user putted 6 times on the third hole, bringing their score to 8.
// The user putted twice on the fourth hole, bringing their score to 10.
// The user putted four times on the fifth hole, bringing their score to 14.
// The user ended with another hole-in-one on the last and sixth hole, totaling their score at 15.
// The difference between the course par (18) and the user’s score (15) is 3, meaning they hit 3 less putts than
//  expected for the course, so the user’s total par is -3.
let coursepar = 0
let userScore = 0
let username = ""
let playNum = 0
let currNum = 0
let hNumber = 1
let total = 0
username = prompt("Welcome to GC mini gold! What is your name?")
playNum = prompt("Hi, "+username+"! Would you like to play 3 or 6 holes today?")
coursepar = playNum * 3
while(currNum < playNum)
{
    total = prompt("How many putts for hole "+hNumber)
    hNumber++
    coursepar -= total
     
    currNum+=1
}
console.log("Good game, "+username+". Your total par was: "+coursepar+".")