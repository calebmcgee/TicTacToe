(function (){
    const boardHTML = document.querySelector(".board");
    const playBTN = document.querySelector(".play");

    playBTN.addEventListener("click", (event)=>{
        game.play();
    });

    const game = {
        board : [0,1,2,3,4,5,6,7,8],
        turn : 0,
        movesDone : [],
        changeTurn : function(){
            if(turn == "x"){
                turn = "o";
            } else if (turn == "o"){
                turn = "x";
            } else if (turn == 0){
                turn = "x";
            }
        }, 
        render : function(){      
            this.board.forEach(cell=> {
                let tile = document.createElement("button");
                tile.classList.add("board-button");
                tile.textContent = typeof cell == String ? cell : "";
                boardHTML.appendChild(tile);
            });

            this.assignEvent(boardHTML);
        },
        checkWin : function(){
            //Check "x"
            if (movesDone[0] == "x" && movesDone[1] == "x" && movesDone[2] == "x"){
                return true;
            } else if (movesDone[3] == "x" && movesDone[4] == "x" && movesDone[5] == "x"){
                return true;
            } else if (movesDone[6] == "x" && movesDone[7] == "x" && movesDone[8] == "x"){
                return true;
            } else if (movesDone[0] == "x" && movesDone[3] == "x" && movesDone[6] == "x"){
                return true;
            } else if (movesDone[1] == "x" && movesDone[4] == "x" && movesDone[7] == "x"){
                return true;
            } else if (movesDone[2] == "x" && movesDone[5] == "x" && movesDone[8] == "x"){
                return true;
            } else if (movesDone[0] == "x" && movesDone[4] == "x" && movesDone[8] == "x"){
                return true;
            } else if (movesDone[2] == "x" && movesDone[4] == "x" && movesDone[6] == "x"){
                return true;
            }  //Check "o"
            else if (movesDone[0] == "o" && movesDone[1] == "o" && movesDone[2] == "o"){
                return true;
            } else if (movesDone[3] == "o" && movesDone[4] == "o" && movesDone[5] == "o"){
                return true;
            } else if (movesDone[6] == "o" && movesDone[7] == "o" && movesDone[8] == "o"){
                return true;
            } else if (movesDone[0] == "o" && movesDone[3] == "o" && movesDone[6] == "o"){
                return true;
            } else if (movesDone[1] == "o" && movesDone[4] == "o" && movesDone[7] == "o"){
                return true;
            } else if (movesDone[2] == "o" && movesDone[5] == "o" && movesDone[8] == "o"){
                return true;
            } else if (movesDone[0] == "o" && movesDone[4] == "o" && movesDone[8] == "o"){
                return true;
            } else if (movesDone[2] == "o" && movesDone[4] == "o" && movesDone[6] == "o"){
                return true;
            }
            //No winner
                else {
                return false;
            }
        }, 
        assignEvent : function(e){
            console.log(e);
        },
        playMove : function(){
            console.log("run");
            //board[cell] = symbol;

        },
        play : function(){
            console.log("Game Start");
            this.render();
        },
    }



})();

/*

board
012
345
678

horizontal
012
345
678

vertical
036
147
258

diagonal
048
246
*/

