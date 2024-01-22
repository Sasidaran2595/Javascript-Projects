let boxes = document.querySelectorAll(".box");
let resetBttn = document.querySelector(".reset")
let newGameBttn = document.querySelector("#newBttn")
let mssgContainer = document.querySelector(".mssg-container")
let mssg = document.querySelector("#mssg")

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const X_pattern = "X"
const O_pattern = "O"
let currentPlayer = X_pattern
let spaces = Array(9).fill(null)
let playerText;
const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))

}
function boxClicked(e) {
    const id = e.target.id
    if (!spaces[id]) {
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer
        if (playerWon() !== false) {
            playerText = `${currentPlayer} won the game, Pl reset to play again!`
            console.log(playerText)
            mssgContainer.classList.remove('hide')
            mssgContainer.innerHTML = playerText
            disableBttn()
        }else{
            currentPlayer = currentPlayer == X_pattern ? O_pattern : X_pattern
        }
    }
}

const disableBttn = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

function playerWon() {
    for (space of winPattern) {
        let [a, b, c] = space
        if (spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a, b, c]
        }
    }
    return false
}
resetBtn.addEventListener("click", resetGame);

function resetGame() {
    spaces.fill(null)
    boxes.forEach(box => box.innerHTML = '' )
    currentPlayer = X_pattern
}
startGame()