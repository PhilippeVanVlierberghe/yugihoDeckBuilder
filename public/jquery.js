"use strict";

//test Jquery
/*
if (window.jQuery) {
  alert("Yeah!");
} else {
  alert("Doesn't Work");
}*/
const ctx = $('#myChart');
const errorBackgroundColor = 'lightcoral';
const backgroundColor = 'darkgrey' ;

let mainDeck;
let extraDeck;
let sideDeck;

let mainDeckMonster;
let mainDeckSpell;
let mainDeckTrap;
let mainStarter;
let mainExtenders;
let mainBom;
let mainAntiStun;

let data = ['20', '15', '5'];

jQuery(function () {
  clearError() ;
  $('#mainDeck').on("change", function () {
    mainDeck = $(this).val();
    checkDeck();
  });

  $('#extraDeck').on("change", function () {
    extraDeck = $(this).val();
    checkDeck();
  });

  $('#sideDeck').on("change", function () {
    sideDeck = $(this).val();
    checkDeck();
  });

  $('#mainDeckMonster').on("change", function () {
    mainDeckMonster = $(this).val();
    console.log(mainDeckMonster);
  });

  $('#mainDeckSpell').on("change", function () {
    mainDeckSpell = $(this).val();
    console.log(mainDeckSpell);
  });

  $('#mainDeckTrap').on("change", function () {
    mainDeckTrap = $(this).val();
    console.log(mainDeckTrap);
    changeDeckChart(mainDeck, mainDeckMonster, mainDeckSpell, mainDeckTrap);
  });

  $('#mainStarter').on("change", function () {
    mainStarter = $(this).val();
    console.log(mainStarter);
  });

  $('#mainExtenders').on("change", function () {
    mainExtenders = $(this).val();
    console.log(mainExtenders);
  });

  $('#mainBom').on("change", function () {
    mainBom = $(this).val();
    console.log(mainBom);
  });

  $('#mainDefense').on("change", function () {
    mainDefense = $(this).val();
    console.log(mainDefense);
  });

  $('#mainAntiStun').on("change", function () {
    mainAntiStun = $(this).val();
    console.log(mainAntiStun);
  });

  $('#mainGarnet').on("change", function () {
    mainGarnet = $(this).val();
    console.log(mainGarnet);
  });

}
);

let myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['monster', 'spell', 'trap'],
    datasets: [{
      label: '# of Votes',
      data: data,
      backgroundColor: [
        'rgb(255, 205, 86)',
        'rgb(54, 162, 235)',
        'rgb(255, 99, 132)',
      ],
      borderWidth: 1,
      hoverOffset: 4

    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function changeDeckChart(mainDeck, mainDeckMonster, mainDeckSpell, mainDeckTrap) {
  myChart.data.datasets.forEach((dataset) => {
    dataset.data = [mainDeckMonster, mainDeckSpell, mainDeckTrap];
  });
  myChart.update();
}

function setError(message) {
  $("body").css('background-color', errorBackgroundColor);
  $('#error').text(message);
}

function clearError() {
  $("body").css('background-color', backgroundColor);
  $('#error').text(null);
}

function checkDeck() {
  if (mainDeck < 40) {
    setError('The main deck must have at least 40 cards.')
  } else if (mainDeck > 60) {
    setError('The main deck can have a max of 60 cards.')
  } else if (extraDeck > 15) {
    setError('The extra deck can have a max of 15 cards.')
  } else if (sideDeck > 15) {
    setError('The side deck can have a max of 15 cards.')
  } else clearError();

}