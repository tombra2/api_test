import * as d3 from 'd3min.js';

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
var winrate=1;

document.getElementById('win').addEventListener('click', function calculateWinrate() {
  win ++;
  score ++;
  rewardDollar = balance * reward/100;
  balance += rewardDollar;
  winrate = win/score*100;
  console.log(winrate , "$", balance);
 
var winrate_display=document.getElementById('winrate_display')
winrate_display.innerText="Winrate: "+winrate.toFixed(2)+"%"	

var balance_display=document.getElementById('balance_display')
balance_display.innerText="Balance: "+balance.toFixed(2)+"$";


});


document.getElementById('loss').addEventListener('click', function calculateLossrate() {
  loss ++;
  score ++;
  riskDollar = balance * risk/100;
  
  balance -= riskDollar;  
  winrate = win/score*100;
  console.log(winrate, "$", balance);
  
var winrate_display=document.getElementById('winrate_display')
winrate_display.innerText="Winrate: "+winrate.toFixed(2)+"%"	

var balance_display=document.getElementById('balance_display')
balance_display.innerText="Balance: "+balance.toFixed(2)+"$";


 
  
}); 


const margin = {top: 20, right: 20, bottom: 30, left: 50};
const width = 960 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const x= d3.scaleLinear()
  .range([0, width]);

const y= d3.scaleLinear()
  .range([height, 0]);

  const svg = d3.select('#chart-container')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  const dataset = [
    { date: new Date("2022-01-01"), value: 200 },
    { date: new Date("2022-02-01"), value: 250 },
    { date: new Date("2022-03-01"), value: 180 },
    { date: new Date("2022-04-01"), value: 300 },
    { date: new Date("2022-05-01"), value: 280 },
    { date: new Date("2022-06-01"), value: 220 },
    { date: new Date("2022-07-01"), value: 300 },
    { date: new Date("2022-08-01"), value: 450 },
    { date: new Date("2022-09-01"), value: 280 },
    { date: new Date("2022-10-01"), value: 600 },
    { date: new Date("2022-11-01"), value: 780 },
    { date: new Date("2022-12-01"), value: 320 }
  ];
  
x.domain(d3.extent(dataset, d => d.date));
y.domain([0, d3.max(dataset, d => d.value)]);

svg.append('g')
.call(d3.axisBottom(x))
.tick

