// get all the gameCells 
const gameCell = document.querySelectorAll(".button");

const gameCellVal = document.querySelectorAll(".button").values();
console.log(gameCellVal);
// assine first turn for player
let turn = "X";
// create an arry to stort the indes of gameCells
let ArrVal = [];
// to display the content on cells
const display = document.getElementById("header");
// reset function for clearing all the content 
const reset = function () {
    gameCell.forEach(function (clear) {
        clear.innerHTML = '';
        ArrVal = [];
    })
};

// loop through each gameCell 
gameCell.forEach(function (cell) {
    // add onclick function 
    cell.addEventListener('click', function () {
        // return from cell if there is already content 
        if (cell.innerHTML) { return; }
        cell.innerHTML = turn;
        // store content from cell to array 
        ArrVal[cell.classList[1]] = turn;
        // define all the winning combination
        if (true) {
            const winCom = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 4, 8],
                [2, 4, 6],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]
            ]
            for (const com of winCom) {
                const [a, b, c] = com;
                if (ArrVal[a] && (ArrVal[a] === ArrVal[b] && ArrVal[a] === ArrVal[c])) {

                    alert(turn + " won");
                }
            }
        }
    
        turn = turn === "X" ? "O" : "X";
        display.innerHTML = turn+"'s Turn";
    })

});
