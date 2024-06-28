var balance = 0;
var risk=0;
var reward=0;
var riskDollar=0;
var rewardDollar=0;
var riskReward=0;



function inital () {
  balance = parseFloat(document.getElementById('balance').value);
  risk = parseFloat(document.getElementById('risk').value);
  reward = parseFloat(document.getElementById('reward').value);
  
}







var score = 0;
var win=0;
var loss=0;

document.getElementById('win').addEventListener('click', function calculateWinrate() {
  win ++;
  score ++;
  rewardDollar = balance * reward/100;
  balance += rewardDollar;
  console.log(win/score*100 , "$", balance);
});


document.getElementById('loss').addEventListener('click', function calculateLossrate() {
  loss ++;
  score ++;
  riskDollar = balance * risk/100;
  
  balance -= riskDollar;  
  console.log(win/score*100, "$", balance);
  
}); 