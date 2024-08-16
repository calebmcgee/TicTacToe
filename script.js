const Player = function(name, score, moves){
    this.name = name;
    this.score = score;
    this.moves = moves; 
};

let gameBoard = {
    round: 0,
    board: [1,2,3,4,5,6,7,8,9]
}

let game = {
    round: 0,
    createPlayers: function(){ 
        let name1 = prompt('Player 1 name');
        let user1 = new Player(name1, 0, []);
    
        let name2 = prompt('Player 2 name');
        let user2 = new Player(name2, 0, []);

        console.log(user1);
        console.log(user2);
        return [user1, user2];
    },
    playRound: function(players){
        let user1 = players[0];
        let user2 = players[1];
        let win = false;
        while (win === false){
            let move1 = prompt(`${user1.name}'s move`);
            user1.moves.push(parseInt(move1));
            gameBoard.board.splice(gameBoard.board.indexOf(parseInt(move1)), 1,'x');

            console.log(user1.moves);
            console.log(gameBoard.board);

            //win = checkWin(user1.moves);
            if (user1.moves.includes(1) && user1.moves.includes(2) && user1.moves.includes(3)){
                return true;
            }
        }
    }

}

game.playRound(game.createPlayers());

//playRound(game.createPlayers());

const checkWin = () => {
    if (arr.moves.includes(1) && arr.moves.includes(2) && arr.moves.includes(3)){
        return true;
    } else if (arr.moves.includes(4) && arr.moves.includes(5) && arr.moves.includes(6)){
        return true;
    } else if (arr.moves.includes(7) && arr.moves.includes(8) && arr.moves.includes(9)){
        return true;
    } else if (arr.moves.includes(1) && arr.moves.includes(4) && arr.moves.includes(7)){
        return true;
    } else if (arr.moves.includes(2) && arr.moves.includes(5) && arr.moves.includes(8)){
        return true;
    } else if (arr.moves.includes(3) && arr.moves.includes(6) && arr.moves.includes(9)){
        return true;
    } else if (arr.moves.includes(1) && arr.moves.includes(5) && arr.moves.includes(9)){
        return true;
    } else if (arr.moves.includes(3) && arr.moves.includes(5) && arr.moves.includes(7)){
        return true;
    } else {
        return false;
    }
/*

board
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

};


