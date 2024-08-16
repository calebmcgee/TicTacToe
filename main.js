const game = {
    round: 0,
    playRound: function(){
        console.log('hi');
    }
}

const Player = function(name, score, moves){
    this.name = name;
    this.score = score;
    this.moves = moves; 
};

let gameBoard = {
    board: [1,2,3,4,5,6,7,8,9]
}


let name1 = prompt('Player 1 name');
let moves1 = [];
let user1 = new Player(name1, 0, moves1);
console.log(user1);

let name2 = prompt('Player 2 name');
let moves2 = [];
let user2 = new Player(name2, 0, moves2);
console.log(user2);
