// Elements Selections 
let dice1 = document.querySelector(".img1");
let dice2 = document.querySelector(".img2");
let heading = document.querySelector("h1");


// Random number generation and changing img accordingly
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let imgSource1 = "images/dice" + randomNumber1 + ".png";
dice1.setAttribute("src" , imgSource1);


let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let imgSource2 = "images/dice" + randomNumber2 + ".png";
dice2.setAttribute("src" , imgSource2);


// Showing Winner
if(randomNumber1 > randomNumber2){
    heading.innerText = "Player1 Won!";
}
else if(randomNumber2 > randomNumber1){
    heading.innerText = "Player2 Won!";
}
else{
    heading.innerText = "Draw!";
}







// function diceTurn(number){
//     if(number === randomNumber1){
//         switch(number){
//             case 1:
//                 dice1.setAttribute("src","images/dice1.png");
//                 break;
//             case 2:
//                 dice1.setAttribute("src","images/dice2.png");
//                 break;
//             case 3:
//                 dice1.setAttribute("src","images/dice3.png");
//                 break;
//             case 4:
//                 dice1.setAttribute("src","images/dice4.png");
//                 break;
//             case 5:
//                 dice1.setAttribute("src","images/dice5.png");
//                 break;
//             case 6:
//                 dice1.setAttribute("src","images/dice6.png");
//                 break;
//         }
//     }
//     // 2 separate if statements to check each case 
//     if(number === randomNumber2){
//         switch(number){
//             case 1:
//                 dice2.setAttribute("src","images/dice1.png");
//                 break;
//             case 2:
//                 dice2.setAttribute("src","images/dice2.png");
//                 break;
//             case 3:
//                 dice2.setAttribute("src","images/dice3.png");
//                 break;
//             case 4:
//                 dice2.setAttribute("src","images/dice4.png");
//                 break;
//             case 5:
//                 dice2.setAttribute("src","images/dice5.png");
//                 break;
//             case 6:
//                 dice2.setAttribute("src","images/dice6.png");
//                 break;
//         }
//     }
    
// }

// diceTurn(randomNumber1);
// diceTurn(randomNumber2);



// function showWinner(num1 , num2){
//     if(num1 > num2){
//         heading.innerText = "Player1 Won!";
//     }
//     else if(num2 > num1){
//         heading.innerText = "Player2 Won!";
//     }
//     else{
//         heading.innerText = "Draw!";
//     }
    
// }
// showWinner(randomNumber1, randomNumber2);

