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
        gameLive : false,
        changeTurn : function(){
            if(this.turn == "x"){
                this.turn = "o";
            } else if (this.turn == "o"){
                this.turn = "x";
            } else if (this.turn == 0){
                this.turn = "x";
            }
        }, 
        render : function(){ 
            boardHTML.innerHTML = "";
            //create board cells
            this.board.map((cellContent, cellInd) => {
                let cell = document.createElement("button");
                cell.id = ("cell-" + cellInd);
                if(typeof cellContent == "string"){
                    cell.textContent = cellContent;
                } else {
                    cell.textContent = "";
                    this.assignEvent(cell);
                }
                boardHTML.appendChild(cell);
                

            });
        },
        reset : function(){
            this.turn = 0;
            this.board = [0,1,2,3,4,5,6,7,8];
            this.movesDone = [];
            this.gameLive = true;
        },
        checkWin : function(){
            //Check "x"
            if (this.movesDone[0] == "x" && this.movesDone[1] == "x" && this.movesDone[2] == "x"){
                return true;
            } else if (this.movesDone[3] == "x" && this.movesDone[4] == "x" && this.movesDone[5] == "x"){
                return true;
            } else if (this.movesDone[6] == "x" && this.movesDone[7] == "x" && this.movesDone[8] == "x"){
                return true;
            } else if (this.movesDone[0] == "x" && this.movesDone[3] == "x" && this.movesDone[6] == "x"){
                return true;
            } else if (this.movesDone[1] == "x" && this.movesDone[4] == "x" && this.movesDone[7] == "x"){
                return true;
            } else if (this.movesDone[2] == "x" && this.movesDone[5] == "x" && this.movesDone[8] == "x"){
                return true;
            } else if (this.movesDone[0] == "x" && this.movesDone[4] == "x" && this.movesDone[8] == "x"){
                return true;
            } else if (this.movesDone[2] == "x" && this.movesDone[4] == "x" && this.movesDone[6] == "x"){
                return true;
            }  //Check "o"
            else if (this.movesDone[0] == "o" && this.movesDone[1] == "o" && this.movesDone[2] == "o"){
                return true;
            } else if (this.movesDone[3] == "o" && this.movesDone[4] == "o" && this.movesDone[5] == "o"){
                return true;
            } else if (this.movesDone[6] == "o" && this.movesDone[7] == "o" && this.movesDone[8] == "o"){
                return true;
            } else if (this.movesDone[0] == "o" && this.movesDone[3] == "o" && this.movesDone[6] == "o"){
                return true;
            } else if (this.movesDone[1] == "o" && this.movesDone[4] == "o" && this.movesDone[7] == "o"){
                return true;
            } else if (this.movesDone[2] == "o" && this.movesDone[5] == "o" && this.movesDone[8] == "o"){
                return true;
            } else if (this.movesDone[0] == "o" && this.movesDone[4] == "o" && this.movesDone[8] == "o"){
                return true;
            } else if (this.movesDone[2] == "o" && this.movesDone[4] == "o" && this.movesDone[6] == "o"){
                return true;
            }
            //No winner
                else {
                return false;
            }
        }, 
        assignEvent : function(cell){
            cell.addEventListener("click", (e) => {
                this.changeTurn();
                this.changeCell(e.target.id.split("cell-")[1]);
            });
        },
        changeCell : function(currentCell){
            this.board[currentCell] = this.turn;
            this.render();
           
        },
        play : function(){
            this.reset();
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

