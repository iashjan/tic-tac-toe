


function myCreateFunction() {
    for (let i = 0; i <9;  i++){
        var table = document.querySelector(".table-container");

        var box = document.createElement("div");
        box.classList.add("box");

        table.appendChild(box);

    }
  }


  myCreateFunction()