
var currentState=[];
var winnerInex=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6],
  [0,3,6],
  [1,4,7],
  [2,5,8]
]
var table = document.querySelector(".table-container");



  function myCreateFunction() {
    for (let i = 0; i <9;  i++){
      var box = document.createElement("div");
        box.classList.add("box");
        table.appendChild(box);
        box.setAttribute("id", i)
        box.addEventListener("click",player);
        currentState.push('');


    }
  }

  myCreateFunction()


  function player(){
  if(this.innerText ===''){
    this.innerText="x";
    currentState[this.getAttribute("id")]="x";
    if( checkForWinner()){
      Swal.fire('you win!')
      location.reload();

}
else if(checkForDraw()){
  Swal.fire("it's a tie")
  location.reload();

}
  else{
      computer();
    }
  }
  }


  function computer(){
    let randomIndex=Math.floor(Math.random()*9);
    while(currentState[randomIndex]!=''){
      randomIndex=Math.floor(Math.random()*9);
    }
    document.getElementById(randomIndex).innerText="o";
    currentState[randomIndex]="o"
    if(checkForWinner()){
      Swal.fire('you lose!')
       location.reload();

    } 
    else if(checkForDraw()){
      alert("it's a tie")
    }

  }

  function checkForWinner(){
    for(let i=0;i<winnerInex.length;i++){
      if(currentState[winnerInex[i][0]]!=''&&currentState[winnerInex[i][0]]==currentState[winnerInex[i][1]]&&currentState[winnerInex[i][1]]  == currentState[winnerInex[i][2]]  ){

        return true;

      }
    }

  return false;
        
}

function checkForDraw(){
  for(let i=0;i<currentState.length;i++){
    if(currentState[i]==''){
    
      return false;

    }
  }
 return true;
}


