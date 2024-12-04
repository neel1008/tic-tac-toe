//access by id,classes,tagname

let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset")
let newgame = document.querySelector("#new")
let hide = document.querySelector(".hide")
let msg = document.querySelector(".msg")

//select first player
let turnO = true;

//winning pattern
const winpattern = [
    [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


//add event listener to each box for 'X' and 'O'
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnO){
            box.innerText = "X";
            turnO =false;
        }else{
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true  //box disable so no change further

        checkWinner(); //check winner after each step
    })
})



// make function for winner checking
const checkWinner = () => {
    for(let pattern of winpattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val)
                winnermsg(pos1val); 
            }
        }
    }
}

//make winning message 
const winnermsg = (winner) => {
    msg.innerText = `winner is ${winner}`
    hide.classList.remove("hide")
    disablebox();
}


//make reset function 
const resetgame = () => {
        turnO = true;
        enablebox();
        hide.classList.add("hide")
}

//make function for disabling the box
const disablebox = () => {
     for(box of boxes){
        box.disabled = true;
     }
}

//make function for enabling the box
const enablebox = () => {
    for(box of boxes){
       box.disabled = false;
       box.innerText = "";
    }
}

//add event listner for newgame and reset button
newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
