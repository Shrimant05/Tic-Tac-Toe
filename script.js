let boxes=document.querySelectorAll(".box")
let resetBtn = document.getElementById("reset-btn");
let newGameBtn = document.getElementById("new-btn");
let msg=document.querySelector(".msg>p")
let msgcontainer=document.querySelector(".msg")
console.log(resetBtn)
let turno=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],  
]

boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turno){
        box.innerHTML="O";
        turno=false;
        }
        else{
        box.innerHTML='X'
        turno=true;
        }
        box.disabled=true;

        checkWinner();

        })
    
});
const disableBox = ()=>{
    for(let box of boxes){
        box.disabled=true
    }
}
const showWinner=(winner)=>
{
    msg.innerHTML=`Winner:${winner}`;
    msgcontainer.classList.remove("hide");
    disableBox();
}
var a=0;
const checkWinner= ()=>{
    for( pattern of winPatterns){
        
           pos1val=boxes[pattern[0]].innerHTML;
           pos2val=boxes[pattern[1]].innerHTML;
           pos3val=boxes[pattern[2]].innerHTML;

           if(pos1val!=""&&pos2val!=""&&pos3val!="")
           {
                if(pos1val==pos2val && pos2val==pos3val){
                    showWinner(pos1val)
                }
                    
           }

        }
    }
const resetGame=()=>{
    turno=true;
    enablebox();
    msgcontainer.classList.add("hide")
}
const enablebox = ()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
    
    
}
console.log(resetBtn)
newGameBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)
