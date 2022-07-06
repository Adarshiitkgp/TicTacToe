console.log("welcome to tic tac toe");
// let music = new Audio("mario.mp3");
let audioTurn = new Audio("Ting.mp3");
// let gameover = new Audio("Gameover.mp3");
let Turn ="X";
/*reset function*/
function reset(){
    count=0;
    Turn='X';
    document.getElementsByClassName('line')[0].style.width="0vw";
    document.getElementsByClassName('info')[0].innerHTML="Current Turn is of"+Turn;
    for(index=0;index<9;index++)
    {
       boxtext=boxes[index].querySelector(".boxtext");
       boxtext.innerHTML="" 
    }
    let imgbox=document.getElementsByClassName('imgbox')
           let img=imgbox[0].getElementsByTagName('img')
           img[0].style.width="0px"
           checkGameover=0
        //    music.pause()
        //    gameover.play()
}
//func for nrext turn
let checkGameover=0
function changeTurn(){
    if(Turn==="X")
        return 0;
    else
    return "X";    
}//we could also have hv declare this as arrow function 
//func to check who won the game
 function checkWin(x){
    if(x.matches){
        let wins=[
            [0,1,2,10,10,0],
            [3,4,5,10,30,0],
            [6,7,8,10,50,0],
            [0,3,6,-10,30,90],
            [1,4,7,10,30,90],/*5,15,90 ye sab transform ke liye he cutting line par also 5 beacuse 1child box 10vw ka he also as we have written */
            [2,5,8,30,30,90],
            [0,4,8,10,30,45],
            [2,4,6,10,30,135]
        ]
        // let element=wins[index]
        let boxtext=document.getElementsByClassName("boxtext")
        for(let index=0;index<9;index++)
        {
            let element=wins[index]
            if((boxtext[element[0]].innerText===boxtext[element[1]].innerText)&&(boxtext[element[1]].innerText===boxtext[element[2]].innerText)&&(boxtext[element[0]].innerText!=="")&&checkGameover===0)
            {
                Turn=changeTurn();
                document.getElementsByClassName("info")[0].innerHTML= Turn +" Won "   
                checkGameover=1;
                let imgbox=document.getElementsByClassName('imgbox')
                let img=imgbox[0].getElementsByTagName('img')
                // document.getElementsByClassName('line')[0].style.transition=`width ${3}s ease-in ${0}s`;
                img[0].style.width="30vw";
                document.getElementsByClassName('line')[0].style.transform=`translate(${wins[index][3]}vw,${wins[index][4]}vw) rotate(${wins[index][5]}deg)`;
                document.getElementsByClassName('line')[0].style.width="40vw";
                if(wins[index][5]===45||wins[index][5]===135)
                {
                    document.getElementsByClassName('line')[0].style.transform=`translate(${5}vw,${30}vw) rotate(${wins[index][5]}deg)`; 
                    document.getElementsByClassName('line')[0].style.width="50vw";
                }
                return 
            }  
        }
    }
    else{
        let wins=[
            [0,1,2,5,5,0],
            [3,4,5,5,15,0],
            [6,7,8,5,25,0],
            [0,3,6,-5,15,90],
            [1,4,7,5,15,90],/*5,15,90 ye sab transform ke liye he cutting line par also 5 beacuse 1child box 10vw ka he also as we have written */
            [2,5,8,15,15,90],
            [0,4,8,5,15,45],
            [2,4,6,5,15,135]
        ]
        // let element=wins[index]
        let boxtext=document.getElementsByClassName("boxtext")
        for(let index=0;index<9;index++)
        {
            let element=wins[index]
            if((boxtext[element[0]].innerText===boxtext[element[1]].innerText)&&(boxtext[element[1]].innerText===boxtext[element[2]].innerText)&&(boxtext[element[0]].innerText!=="")&&checkGameover===0)
            {
                Turn=changeTurn();
                document.getElementsByClassName("info")[0].innerHTML= Turn +" Won "   
                checkGameover=1;
                let imgbox=document.getElementsByClassName('imgbox')
                let img=imgbox[0].getElementsByTagName('img')
                // document.getElementsByClassName('line')[0].style.transition=`width ${3}s ease-in ${0}s`;
                img[0].style.width="30vw";
                document.getElementsByClassName('line')[0].style.transform=`translate(${wins[index][3]}vw,${wins[index][4]}vw) rotate(${wins[index][5]}deg)`;
                document.getElementsByClassName('line')[0].style.width="20vw";
                if(wins[index][5]===45||wins[index][5]===135)
                {
                    document.getElementsByClassName('line')[0].style.transform=`translate(${2.5}vw,${15}vw) rotate(${wins[index][5]}deg)`; 
                    document.getElementsByClassName('line')[0].style.width="25vw";
                }
                return 
            }  
        }
    }    
    
}

//Game logic 

let boxes=document.getElementsByClassName("box");
let index=0;
let boxLength=boxes.length;
let count=0;
for(let index=0;index<boxLength;index++)
{
    // let element=boxes[index]
    let boxtext=boxes[index].querySelector(".boxtext");
    boxes[index].addEventListener('click',function clicking(){

        if(boxtext.innerText === "")
        {
            // music.play()
            if(checkGameover!==1)
            {
                count=count+1;    
                console.log(count)
                audioTurn.play();
                boxtext.innerText=Turn;
                Turn=changeTurn();
                document.getElementsByClassName('info')[0].innerText="Current Turn is of "+Turn;
                checkWin(x);
            }
                
        }       
})
}
//MEDIA QUERY WITH JAVASCRIPT TO CHANGE THE SIZE OF LINE 
var x=window.matchMedia("(max-width:800px)")
