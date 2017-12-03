//week 7
console.log("Up and runnning!");
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";*/

//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardThree);

//var cards = ["queen", "queen", "king", "king"];

//week 10
var cards = [
{
  rank : "queen",
  suit : "hearts", 
  cardImage : "images/queen-of-hearts.png"
},
{
  rank : "queen",
  suit : "diamonds",
  cardImage : "images/queen-of-diamonds.png"
},
{
  rank : "king",
  suit : "hearts",
  cardImage : "images/king-of-hearts.png"
},
{
  rank : "king",
  suit : "diamonds",
  cardImage : "images/king-of-diamonds.png"
}
];



//week 8
var cardsInPlay = [];
var clickedOn = document.getElementsByClassName("cardSelected");

/*var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);*/

//week 9

var checkForMatch = function (){
    if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
} else {
    alert("Sorry, try again.");
}
};


var flipCard = function (){
  var cardId = this.getAttribute("data-id");
  console.log("User flipped " + cards[cardId].rank);

  
  console.log(cards.cardImage);
  this.setAttribute("src",cards[cardId].cardImage);
    this.setAttribute("class", "cardSelected");
  cardsInPlay.push(cards[cardId].rank);

   if(cardsInPlay.length == 2){
      checkForMatch();
    }
    



  //console.log(cards[cardId].suit);
  //console.log(cards[cardId].cardImage);

};

var flipBack = function(){
for (var i = 0; i < clickedOn.length; i+=1)
  clickedOn[i].setAttribute("src", "images/back.png");
};

//week 11
var createBoard = function(){
  //const cardTable = document.getElementById('game-board');
  for (var i = 0; i < cards.length; i++){
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    var board = document.getElementById("game-board");
    board.appendChild(cardElement);
    //cardTable.appendChild(cardElement);
  }

};

var resetGame = function(){
  alert("Start Over?");
  flipBack();
};


createBoard();
document.querySelector("button").addEventListener("click", resetGame);




