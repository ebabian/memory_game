
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
]
let cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		//console.log("There are 2 cards");
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
	} else {
  		console.log("Sorry, try again.");
}
}
function flipCard() {
	
	let cardId = this.getAttribute('data-id');
	this.setAtrribute('src', cards[cardId].cardImage);

// if (cardsInPlay.length === 2) {
// 	console.log("There are 2 cards");
// } else if (cardsInPlay[0] === cardsInPlay[1]) {
// 	alert("You found a match!");
// } else {
// 	alert("Sorry, try again.");
	
// } 
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	
	checkForMatch();
}


function createBoard() 

{	
	for (let i = 0; i < cards.length; i++) 
{
	let cardElement = document.createElement('img');
	cardElement.setAtrribute('src', "images/back.png");
	cardElement.setAtrribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
} 
} 
createBoard();