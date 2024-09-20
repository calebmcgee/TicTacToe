const Player = function(name, score, moves){
    this.name = name;
    this.score = score;
    this.moves = moves; 
};

const boardHTML = document.querySelector(".board");

let gameBoard = {
    round: 0,
    board: [1,2,3,4,5,6,7,8,9],
    render: function (){
        this.board.map((elem, ind) => {
            let tile = document.createElement("button");
            tile.classList.add(ind + 1);
            tile.addEventListener('click', (event) =>{
                if(game.turn === 1){
                    game.player1move(event.target.classList);
                    tile.textContent = 'X';
                } else if(game.turn === 2){
                    game.player2move(event.target.classList);
                    tile.textContent = 'O';
                }      
            });
            boardHTML.appendChild(tile);
            
        });
    }
}

let game = {
    round: 0,
    turn: 0,
    playRound: function(){
        game.turn = 1;
        gameBoard.render();
        game.round += 1;

    },
    player1move: function(x){
        let move1 = x;
        players[0].moves.push(parseInt(move1));

        gameBoard.board.splice(gameBoard.board.indexOf(parseInt(move1)), 1,'X');
        
        if (game.checkWin(players[0])){
            players[0].score += 1;
            console.log(`${players[0].name} wins round`);
            game.turn = 0;
        }else {
            game.turn = 2;
        }
       
    },
    player2move: function(x){
        let move2 = x;
        players[1].moves.push(parseInt(move2));
        gameBoard.board.splice(gameBoard.board.indexOf(parseInt(move2)), 1,'O');

        if (game.checkWin(players[1])){
            players[1].score += 1;
            console.log(`${players[1].name} wins round`);
            game.turn = 0;
        } else {
            game.turn = 1;
        }
    },
    checkWin: function(arr){
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
    }

}


let players = [];
function createPlayers(p1, p2){
    let player1 = new Player (p1, 0, [])
    let player2 = new Player (p2, 0, [])
    return [player1, player2];
};

const p1html = document.querySelector('.p1');
const p2html = document.querySelector('.p2');
function playGame (form){
    players = createPlayers(form.player1.value, form.player2.value);
    game.playRound();
    p1html.textContent = players[0].name;
    p2html.textContent = players[1].name;
};



const modal = document.querySelector(".modal");

const playBtn = document.querySelector(".play");

playBtn.addEventListener("click", (event) => {
    modal.showModal();
});
const submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  modal.close();
});


//playRound(game.createPlayers());




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

