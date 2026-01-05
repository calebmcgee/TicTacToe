(function (){
    const boardHTML = document.querySelector(".board");
    const statusBar = document.querySelector(".statusBar");
    const playBTN = document.querySelector(".play");

    playBTN.addEventListener("click", (event)=>{
        game.startGame();
    });
    // link assignPLayers



    const game = {
        board : [0,1,2,3,4,5,6,7,8],
        turn : "x",
        movesDone : [],
        gameLive : false,
        changeTurn : function(){
            if(this.turn == "x"){
                this.turn = "o";
            } else if (this.turn == "o"){
                this.turn = "x";
            }
        }, 
        assignPlayers : function(p1,p2){
            this.p1 = p1;
            this.p2 = p2;
            return {p1,p2}
        },
        render : function(){
            //Clear board
            boardHTML.innerHTML = "";
            //Render Board
            this.board.map((cellContent, cellInd) => {
                let cell = document.createElement("button");
                cell.id = ("cell-" + cellInd);
                if(typeof cellContent == "string"){
                    cell.textContent = cellContent;
                } else {
                    cell.textContent = "";
                    if(this.gameLive){
                        this.assignEvent(cell);
                    }
                }
                boardHTML.appendChild(cell);
            //Render Status Bar
            statusBar.textContent = this.checkWin();

            });
        },
        endGame : function(){
            this.turn = "x";
            this.board = [0,1,2,3,4,5,6,7,8];
            this.gameLive = false;
        },
        setMessage : function (message){
            this.message = message;
            return {message};
        },
        checkWin : function(){
            //Check "x"
            if (this.board[0] == "x" && this.board[1] == "x" && this.board[2] == "x"){
                return true;
            } else if (this.board[3] == "x" && this.board[4] == "x" && this.board[5] == "x"){
                return "Player 1 Wins !";
            } else if (this.board[6] == "x" && this.board[7] == "x" && this.board[8] == "x"){
                return "Player 1 Wins !";
            } else if (this.board[0] == "x" && this.board[3] == "x" && this.board[6] == "x"){
                return "Player 1 Wins !";
            } else if (this.board[1] == "x" && this.board[4] == "x" && this.board[7] == "x"){
                return "Player 1 Wins !";
            } else if (this.board[2] == "x" && this.board[5] == "x" && this.board[8] == "x"){
                return "Player 1 Wins !";
            } else if (this.board[0] == "x" && this.board[4] == "x" && this.board[8] == "x"){
                return "Player 1 Wins !";
            } else if (this.board[2] == "x" && this.board[4] == "x" && this.board[6] == "x"){
                return "Player 1 Wins !";
            }  //Check "o"
            else if (this.board[0] == "o" && this.board[1] == "o" && this.board[2] == "o"){
                return "Player 2 Wins !";
            } else if (this.board[3] == "o" && this.board[4] == "o" && this.board[5] == "o"){
                return "Player 2 Wins !";
            } else if (this.board[6] == "o" && this.board[7] == "o" && this.board[8] == "o"){
                return "Player 2 Wins !";
            } else if (this.board[0] == "o" && this.board[3] == "o" && this.board[6] == "o"){
                return "Player 2 Wins !";
            } else if (this.board[1] == "o" && this.board[4] == "o" && this.board[7] == "o"){
                return "Player 2 Wins !";
            } else if (this.board[2] == "o" && this.board[5] == "o" && this.board[8] == "o"){
                return "Player 2 Wins !";
            } else if (this.board[0] == "o" && this.board[4] == "o" && this.board[8] == "o"){
                return "Player 2 Wins !";
            } else if (this.board[2] == "o" && this.board[4] == "o" && this.board[6] == "o"){
                return "Player 2 Wins !";
            } else if (!this.board.some(isNaN)){
                return "Draw !";
            }
            //No winner
                else {
                return "It is " + this.turn + "'s turn.";
            }
        }, 
        updateStatus : function(){
            
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
        startGame : function(){
            this.endGame();
            this.gameLive = true;
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

