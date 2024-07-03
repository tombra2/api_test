

var balance = 0;
var risk=0;
var reward=0;
var riskDollar=0;
var rewardDollar=0;
var riskReward=0;
var commision=0;
var sumCommision=0;


function inital() {
  balance = parseFloat(document.getElementById('balance').value);
  risk = parseFloat(document.getElementById('risk').value);
  reward = parseFloat(document.getElementById('reward').value);
  commision = parseFloat(document.getElementById('commision').value);
  
  var balance_display=document.getElementById('balance_display')
balance_display.innerText="Balance: "+balance.toFixed(2)+"$";

  
}



function update() {
var winrate_display=document.getElementById('winrate_display')
winrate_display.innerText="Winrate: "+winrate.toFixed(2)+"%"	

var balance_display=document.getElementById('balance_display')
balance_display.innerText="Balance: "+balance.toFixed(2)+"$";

var score_display=document.getElementById('score_display')
score_display.innerText="Score: "+score.toFixed(0);

var commision_display=document.getElementById('commision_display')
commision_display.innerText="Commision: "+sumCommision.toFixed(2)+"$";
}




var score = 0;
var win=0;
var loss=0;
var winrate=0;



document.getElementById('win').addEventListener('click', function calculateWinrate() {
  win ++;
  score ++;
  sumCommision= sumCommision+commision;

  rewardDollar = balance * reward/100;
  balance += rewardDollar;
  winrate = win/score*100;
  console.log(winrate , "$", balance);
 
update();


});


document.getElementById('loss').addEventListener('click', function calculateLossrate() {
  loss ++;
  score ++;
  sumCommision= sumCommision+commision
  riskDollar = balance * risk/100;
  
  balance -= riskDollar;  
  winrate = win/score*100;
  console.log(winrate, "$", balance);
  
update ()


 
  
}); 

document.getElementById('reset').addEventListener('click', function reset() {

balance = 0;
winrate = 0;
score = 0;
sumCommision = 0;
update();
  
});
