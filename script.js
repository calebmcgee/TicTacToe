const boardHTML = document.querySelector(".board");


const game = (function(){
    let turn = 0;
    let movesDone = [];
    let board = [1,2,3,4,5,6,7,8,9];

    const changeTurn = () => {
        if(turn == "x"){
            turn = "o";
        } else if (turn == "o"){
            turn = "x";
        } else if (turn == 0){
            turn = "x";
        }
    }

    const checkWin = () => {
        //Check "x"
        if (movesDone[1] == "x" && movesDone[2] == "x" && movesDone[3] == "x"){
            return true;
        } else if (movesDone[4] == "x" && movesDone[5] == "x" && movesDone[6] == "x"){
            return true;
        } else if (movesDone[7] == "x" && movesDone[8] == "x" && movesDone[9] == "x"){
            return true;
        } else if (movesDone[1] == "x" && movesDone[4] == "x" && movesDone[7] == "x"){
            return true;
        } else if (movesDone[2] == "x" && movesDone[5] == "x" && movesDone[8] == "x"){
            return true;
        } else if (movesDone[3] == "x" && movesDone[6] == "x" && movesDone[9] == "x"){
            return true;
        } else if (movesDone[1] == "x" && movesDone[5] == "x" && movesDone[9] == "x"){
            return true;
        } else if (movesDone[3] == "x" && movesDone[5] == "x" && movesDone[7] == "x"){
            return true;
        }  //Check "o"
        else if (movesDone[1] == "o" && movesDone[2] == "o" && movesDone[3] == "o"){
            return true;
        } else if (movesDone[4] == "o" && movesDone[5] == "o" && movesDone[6] == "o"){
            return true;
        } else if (movesDone[7] == "o" && movesDone[8] == "o" && movesDone[9] == "o"){
            return true;
        } else if (movesDone[1] == "o" && movesDone[4] == "o" && movesDone[7] == "o"){
            return true;
        } else if (movesDone[2] == "o" && movesDone[5] == "o" && movesDone[8] == "o"){
            return true;
        } else if (movesDone[3] == "o" && movesDone[6] == "o" && movesDone[9] == "o"){
            return true;
        } else if (movesDone[1] == "o" && movesDone[5] == "o" && movesDone[9] == "o"){
            return true;
        } else if (movesDone[3] == "o" && movesDone[5] == "o" && movesDone[7] == "o"){
            return true;
        }
        //No winner
         else {
            return false;
        }
    }
        
    const render = () => {
        for (const item in board){
            let tile = document.createElement("button");
            tile.classList.add("board-button");
            tile.textContent = item;
            boardHTML.appendChild(tile);
            
        }
    }

    const play = () => {
        console.log("Game Start");
        render();
    }

    return{play};
});


game.play();

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

