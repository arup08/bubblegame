var score=0;
var ran=0;
var tm=60;

function makeBubble(){
    var temp="";
    for(var i=0;i<220;i++){
        var rand=Math.floor(Math.random()*10)
       temp+=`<div id="bubble">${rand}</div>`;
    }
    document.querySelector("#bottompannel").innerHTML=temp;
}
function timer(){
   
    var check=setInterval(function(){
        if(tm>0){
            tm--;
            document.querySelector(".time").textContent=tm;
        }
        else{
            var tempscore=score;
            document.querySelector("#bottompannel").innerHTML= `<div id="done"><h1 id="game">Game Over</h1> <h1 id="game1">Score:${tempscore}</h1> </div>`
            
            document.querySelector("#toppanel").innerHTML= `<button id="play">Play Again</button>`;
            clearInterval(check);
            document.querySelector("#play").addEventListener("click", function(){
                
                document.querySelector("#toppanel").innerHTML=`            <div id="toppanel">
                <div id="elem">
                 <h5>Hit</h5>
                 <div class="hitval" id="box">5</div>
                 </div>
                <div id="elem">
                 <h5>Timer</h5>
                 <div class="time" id="box">60</div>
                </div>
                <div id="elem">
                 <h5>Score</h5>
                 <div class="scorecng" id="box">0</div>
                </div>
                 
                 
                 
             </div>`;
             
                
                makeBubble();
               
                hitnum();
                tm=60;
                score=0;
                timer();
                

            })
        }
        
    },1000);
}
function hitnum(){
    ran=Math.floor(Math.random()*10);
    document.querySelector(".hitval").textContent=ran;
}

function increaseScore(){
    score+=10;
    document.querySelector(".scorecng").textContent=score;
}

makeBubble();
hitnum();
timer();

document.querySelector("#bottompannel").addEventListener("click",function(dets){
   if(ran===Number(dets.target.textContent)){
    increaseScore();
    makeBubble();
    hitnum();
   } //dets.target.textContent is a string
})

