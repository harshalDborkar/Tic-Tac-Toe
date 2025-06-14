let turn = "X";

const changeTurn = ()=>{
    return turn === "X" ? "O" : "X";
}

const checkWin = ()=>{

}

const msg = document.querySelector(".msg");
let boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach(box => {
    box.addEventListener("click",()=>{
        if(box.innerText ===""){
            box.innerText = turn;
            turn = changeTurn();
            msg.innerText = `Turn for ${turn}`;
        }
    })    
});