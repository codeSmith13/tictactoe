let cells = document.querySelectorAll(".row > div");
let info = document.getElementsByClassName("info");
let restart = document.getElementById('restart')
let X_TEXT = "👽";
let cellCount = 0;
let win = [
  [cells[0], cells[1], cells[2]],
  [cells[3], cells[4], cells[5]],
  [cells[6], cells[7], cells[8]],
  [cells[0], cells[3], cells[6]],
  [cells[1], cells[4], cells[7]],
  [cells[2], cells[5], cells[8]],
  [cells[2], cells[4], cells[6]],
  [cells[0], cells[4], cells[8]],
];  

for (i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", clickedCell);
}

function clickedCell(cell) {
  if (cell.target.textContent == "") {
    cell.target.textContent = X_TEXT;
    checkWinner();
    if (X_TEXT == "👽") {
      X_TEXT = "🤠";
    } else {
      X_TEXT = "👽";
    }
  }
}
function checkWinner() {
  cellCount++;
  for (i = 0; i < win.length; i++) {
   
    let X_TEXTCount = 0;
   
    for (j = 0; j < win[i].length; j++) {
      if (win[i][j].innerHTML == X_TEXT) {
        X_TEXTCount++;
        
      }
      if (X_TEXTCount == 3 ) {
        console.log(X_TEXT + " wins!");
        info.innerText = "new_value";
        break;
        
      }
      if (cellCount == 9 && X_TEXTCount == 3) {
        console.log(X_TEXT + " wins!");
        info.innerText = "new_value";
        break;
        
      } else if (X_TEXTCount == !3 && cellCount == 9) {
        console.log("Draw");
       info.innerText = "new_value";

        
        break;
        
      }
    }
   if ( X_TEXTCount == 3 || X_TEXTCount == !3 && cellCount == 9 ) {
       console.log("Game Over"); 
       cells.forEach(cell => cell.removeEventListener("click",clickedCell))
      break;
     
   }
  
  
 
  

}
}