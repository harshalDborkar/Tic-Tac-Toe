let turn = "X";

const msg = document.querySelector(".msg");
let boxes = document.querySelectorAll(".box");

const changeTurn = ()=>{
    return turn === "X" ? "O" : "X";
}

const checkWin = ()=>{
    let boxes = document.getElementsByClassName("box");
    const win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    win.forEach(e => {
        // console.log(boxes[e[0]].innerText);
        if(boxes[e[0]].innerText != "" && (boxes[e[0]].innerText === boxes[e[1]].innerText && boxes[e[1]].innerText === boxes[e[2]].innerText)){
            msg.innerText = `${boxes[e[0]].innerText} won the game`;
            turn = "";
        }
    })
}

console.log(boxes);

boxes.forEach(box => {
    box.addEventListener("click",()=>{
        if(turn === ""){
            alert("Game over \nReset to start new game");
            
        }
        if(box.innerText ===""){
            box.innerText = turn;
            turn = changeTurn();
            msg.innerText = `Turn for ${turn}`;
            checkWin();
        }

    })   

});

const reset = document.querySelector(".reset");

reset.addEventListener("click",()=>{
    boxes.forEach(box =>{
        box.innerText = "";
        turn = "X";
        msg.innerText = "Turn of X";
    });
});