
//let cardOne = "queen";
//let cardTwo = "queen";
//let cardThree = "king";
//let cardFour = "king";


//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardThree);

/*let cardOne;
let cardTwo;*/

const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-diamonds.png"
}
];
const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

/*cards[0] = cardOne;
cardsInPlay.push('cardOne');
console.log("User flipped queen");

cards[2] = cardTwo;
cardsInPlay.push('cardTwo');
console.log("User flipped king");*/

function flipCard(cardId) {
if (cardsInPlay.length === 2) {
	console.log("There are 2 cards");
} else if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
	
} 
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}
flipCard(0);
flipCard(2);
checkForMatch();

