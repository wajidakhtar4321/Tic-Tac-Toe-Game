let game = document.querySelector(".game");
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

let newbtn = document.querySelector("#new-btn");
let winner = document.querySelector("#winner");
let msg = document.querySelector(".msg");

let turnO = true;

const winningptrn = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
const resetGame = () => {
    turnO = true;
    enable();

}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked ")
        if (turnO) {
            box.innerText = "O"
            box.style.color = "green"
            turnO = false;
        }
        else {
            box.innerText = "X"
            box.style.color = "red"
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})
const disable = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enable = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        winner1.innerText = "";
        msg.classList.add("msg");
    }
}
let showWinner = (winner) => {
    winner1.innerText = `Congratulations, Winner is  ${winner}`;
    msg.classList.remove("msg");
    disable();
};
const checkWinner = () => {
    for (let pattern of winningptrn) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }

    }
}
newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);