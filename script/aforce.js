let win = 1
let loss = 0
let winLoss = winLossRatio(win, loss)
function winLossRatio(win, loss){
  return ((win/(win+loss))*100).toPrecision(3)+"%"
}

document.getElementById("win").innerHTML = win
document.getElementById("loss").innerHTML = loss
document.getElementById("winLoss").innerHTML = winLoss