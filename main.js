var balance = 0;
var risk=0;
var reward=0;
var riskDollar=0;
var rewardDollar=0;
var riskReward=0;


function inital () {
  balance = parseInt(document.getElementById('balance').value);
  risk = parseFloat(document.getElementById('risk').value);
  reward = parseFloat(document.getElementById('reward').value);
  
}



riskDollar = balance * risk/100;
rewardDollar = balance * reward/100;
riskReward = riskDollar/rewardDollar;
console.log(riskDollar, rewardDollar, riskReward);
  

// Calculate winrate and lossrate and update
balance


var score = 0;
var win=0;
var loss=0;

document.getElementById('win').addEventListener('click', function calculateWinrate() {
  win ++;
  score ++;
  balance += rewardDollar;
  console.log(win/score*100 , "$", balance);
});


document.getElementById('loss').addEventListener('click', function calculateLossrate() {
  loss ++;
  score ++;
  
  balance -= riskDollar;  
  console.log(win/score*100, "$", balance);
  
}); 