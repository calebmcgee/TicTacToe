(function (){
    //DOM
    const boardHTML = document.querySelector(".board");
    const statusBar = document.querySelector(".statusBar");
    const playBTN = document.querySelector(".play");
    const submitBTN = document.querySelector("#submit");
    const playerModal = document.querySelector(".modal");
    const p1Input = document.querySelector("#player1");
    const p2Input = document.querySelector("#player2");

    //Buttons
    playBTN.addEventListener("click", (event)=>{
        playerModal.show();
    });

    submitBTN.addEventListener("click", (event)=>{
        game.setPlayers(p1Input.value, p2Input.value);
        playerModal.close();
        event.preventDefault();

    });

    //Game
    const game = {
        players:[{name: "tom",sign: "x"},{name:"jerry", sign: "o"}],
        board : [0,1,2,3,4,5,6,7,8],
        turn : 0,
        movesDone : [],
        gameLive : false,
        setPlayers : function(p1,p2){
            this.players[0].name = p1;
            this.players[1].name = p2;
            this.startGame();
        },
        startGame : function(){
            this.resetGame();
            this.render();
        },
        endGame : function(){
            this.gameLive = false;
        },
        resetGame : function(){
            this.board = [0,1,2,3,4,5,6,7,8];
            this.turn = "0";
            this.movesDone = [];
            this.gameLive = true;
        },
        render : function(){
            //Render Status
            this.renderStatus();
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
            });

        },
        renderStatus : function (){
            statusBar.textContent = this.getStatus();
        },
        getStatus : function(){
            
            //Check "x"
            if (this.board[0] == "x" && this.board[1] == "x" && this.board[2] == "x" ||
                this.board[3] == "x" && this.board[4] == "x" && this.board[5] == "x" ||
                this.board[6] == "x" && this.board[7] == "x" && this.board[8] == "x" ||
                this.board[0] == "x" && this.board[3] == "x" && this.board[6] == "x" ||
                this.board[1] == "x" && this.board[4] == "x" && this.board[7] == "x" ||
                this.board[2] == "x" && this.board[5] == "x" && this.board[8] == "x" ||
                this.board[0] == "x" && this.board[4] == "x" && this.board[8] == "x" ||
                this.board[2] == "x" && this.board[4] == "x" && this.board[6] == "x"){

                this.endGame();
                return (this.players[0].name + " Wins !");
                
            } else if (this.board[0] == "o" && this.board[1] == "o" && this.board[2] == "o" ||
                this.board[3] == "o" && this.board[4] == "o" && this.board[5] == "o" ||
                this.board[6] == "o" && this.board[7] == "o" && this.board[8] == "o" ||
                this.board[0] == "o" && this.board[3] == "o" && this.board[6] == "o" ||
                this.board[1] == "o" && this.board[4] == "o" && this.board[7] == "o" ||
                this.board[2] == "o" && this.board[5] == "o" && this.board[8] == "o" ||
                this.board[0] == "o" && this.board[4] == "o" && this.board[8] == "o" ||
                this.board[2] == "o" && this.board[4] == "o" && this.board[6] == "o"){

                this.endGame();
                return (this.players[1].name + " Wins !");
                
            } else {
                return (this.players[this.turn].name + "'s Turn (" + this.players[this.turn].sign + ")");
            }
        }, 
        assignEvent : function(cell){
            cell.addEventListener("click", (e) => {
                this.clickCell(e.target.id.split("cell-")[1]);
            });
        },
        clickCell : function(currentCell){
            this.board[currentCell] = this.players[this.turn].sign;
            this.changeTurn();
        },
        changeTurn : function(){
            if(this.turn == "0"){
                this.turn = "1";
            } else if (this.turn == "1"){
                this.turn = "0";
            }
            this.render();
        }, 
    }
})();

/*
Game End Conditions

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

