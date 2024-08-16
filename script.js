const Player = function(name, score, moves){
    this.name = name;
    this.score = score;
    this.moves = moves; 
};

let gameboard = {
    round: 0,
    board: [1,2,3,4,5,6,7,8,9]
}



const playGame = () => {
    console.log(gameboard.board);
    let name1 = prompt('Player 1 name');
    let moves1 = [];
    let user1 = new Player(name1, 0, moves1);
    console.log(user1);

    let name2 = prompt('PLayer 2 name');
    let moves2 = [];
    let user2 = new Player(name2, 0, moves2);
    console.log(user2);

    

};

playGame();



/*
123
456
789


horizontal
123
456
789

vertical
147
258
369

diagonal

159
357
*/