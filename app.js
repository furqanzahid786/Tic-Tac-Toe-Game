let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#resetbtn");
let new_game_btn=document.querySelector("#new-btn");
let msg_container=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");


let turn0=true; // playerX or playerO

const winpatterns=[
    
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

]

boxes.forEach((box)=>{

    box.addEventListener("click", ()=>{

         if(turn0)
         {
            box.innerText="O"   //playerO
            turn0=false
         }
         else
         {
            box.innerText="X"  //PlayerX
            turn0=true
         }

    box.disabled=true
    checkwinner();

    })

})

const reset_game=()=>{
    turn0=true
    enableboxes()
    msg_container.classList.add("hide")

}

const enableboxes=()=>{
    for(let box of boxes)
     {
        box.disabled=false;
        box.innerText="";
     }

}

const disabled_boxes=()=>{
    for(let box of boxes)
     {
        box.disabled=true;
     }

}

const show_winner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msg_container.classList.remove("hide");
    disabled_boxes()
   
 }; 


const checkwinner=()=>{

    for(let pattern of winpatterns)
    {
        let pos1=boxes[pattern[0]].innerText
        let pos2=boxes[pattern[1]].innerText
        let pos3=boxes[pattern[2]].innerText


        if(pos1!="" && pos2!="" && pos3!="")
        {
             if(pos1==pos2 && pos2==pos3)
             {
                show_winner(pos1);
             }
      
            }
    }


};



new_game_btn.addEventListener("click",reset_game)
reset_btn.addEventListener("click",reset_game)