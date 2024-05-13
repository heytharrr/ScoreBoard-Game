let homeScore = document.getElementById("home-score-el");
let awayScore = document.getElementById("away-score-el");

let countHome = 0;
let countAway = 0;

function onePointHome() {
  countHome += 1;
  homeScore.textContent = countHome;
}

function twoPointHome() {
  countHome += 2;
  homeScore.textContent = countHome;
}

function threePointHome() {
  countHome += 3;
  homeScore.textContent = countHome;
}


function onePointAway() {
  countAway += 1;
  awayScore.textContent = countAway;
}

function twoPointAway() {
  countAway += 2;
  awayScore.textContent = countAway;
}

function threePointAway() {
  countAway += 3;
  awayScore.textContent = countAway;
}