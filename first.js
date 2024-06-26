let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

const winptn = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count = 0;
} ;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO === true){
            box.innerText = "X";
            turnO = false;
        }
        else {
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();
        if(count == 9 && !isWinner){
            drawGame();
        }
        
    });
});

const drawGame = () => {
    msg.innerText = `Game is Drawn`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    count = 0;
};

const disableBoxes = () => {
    for(let box of boxes)  {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes)  {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = () =>{
    for(let ptn of winptn) {

    let pos1 = boxes[ptn[0]].innerText;
    let pos2 = boxes[ptn[1]].innerText;
    let pos3 = boxes[ptn[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
            showWinner( pos1 );
            return true;
            }
            
            
        }
        
    }
    
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);