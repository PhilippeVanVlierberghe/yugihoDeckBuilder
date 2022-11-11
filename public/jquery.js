"use strict";
const ctx = $('#myChart');
const ctx2 = $('#myChart2');

const errorBackgroundColor = 'lightcoral';
const backgroundColor = 'rgb(0, 180, 0)';
//['Starter', 'Extender', 'Bomb', 'Garnet', 'Defensive', 'Anti-stun', 'Draw', 'Search','Stun'],
const targets = [11, 12, 0, 1, 6, 6, 2, 2, 2];

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
let mainStun;
let mainDefense;
let mainDraw;
let mainSearch;

let data = [20, 20, 20];
let data2 = [5, 5, 5, 5, 5, 5, 5, 5];

jQuery(function () {
  clearError();
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
    data[0] = mainDeckMonster;
    checkDeck();
  });

  $('#mainDeckSpell').on("change", function () {
    mainDeckSpell = $(this).val();
    data[1] = mainDeckSpell;
    checkDeck();
  });

  $('#mainDeckTrap').on("change", function () {
    mainDeckTrap = $(this).val();
    data[2] = mainDeckTrap;
    checkDeck();
  });

  $('#mainStarter').on("change", function () {
    mainStarter = $(this).val();
    data2[0] = mainStarter;
    checkDeck();
  });

  $('#mainExtenders').on("change", function () {
    mainExtenders = $(this).val();
    data2[1] = mainExtenders;
    checkDeck();
  });

  $('#mainBom').on("change", function () {
    mainBom = $(this).val();
    data2[2] = mainBom;
    checkDeck();
  });

  $('#mainGarnet').on("change", function () {
    mainGarnet = $(this).val();
    data2[3] = mainGarnet;
    checkDeck();
  });

  $('#mainDefense').on("change", function () {
    mainDefense = $(this).val();
    data2[4] = mainDefense;
    checkDeck();
  });
  
  $('#mainAntiStun').on("change", function () {
    mainAntiStun = $(this).val();
    data2[5] = mainAntiStun;
    checkDeck();
  });

  $('#mainDraw').on("change", function () {
    mainDraw = $(this).val();
    data2[6] = mainDraw;
    checkDeck();
  });

  $('#mainSearch').on("change", function () {
    mainSearch = $(this).val();
    data2[7] = mainSearch;
    checkDeck();
  });

  $('#mainStun').on("change", function () {
    mainStun = $(this).val();
    data2[8] = mainStun;
    checkDeck();
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
  }
});

let myChart2 = new Chart(ctx2, {
  type: 'radar',
  data: {
    labels: ['Starter', 'Extender', 'Bomb', 'Garnet', 'Defensive', 'Anti-stun', 'Draw', 'Search', 'Stun'],
    datasets: [{
      label: 'Targets',
      data: targets,
      fill: true,
      backgroundColor: 'rgba(192,192,192,0.3',
      borderColor: 'rgb(0, 0, 0)',
      pointBackgroundColor: 'rgb(0, 0, 0)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'

    },
    {
      label: 'Input',
      data: data2,
      fill: true,
      backgroundColor: 'rgba(0,0,255,0.3)',
      borderColor: 'rgba(0,0,255,0.3)',
      pointBackgroundColor: 'rgba(0,0,255,0.3)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'

    },
    ]
  },
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    }
  },
});

function updateView() {
  myChart.update();
  myChart2.update();
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
    setError('The main deck must have at least 40 cards.');
  } else if (mainDeck > 60) {
    setError('The main deck can have a max of 60 cards.');
  } else if (parseInt(mainDeck) != (parseInt(mainDeckMonster) + parseInt(mainDeckSpell) + parseInt(mainDeckTrap))) {
    setError('Please check your card inputs again.');
  } else if (extraDeck > 15) {
    setError('The extra deck can have a max of 15 cards.');
  } else if (sideDeck > 15) {
    setError('The side deck can have a max of 15 cards.');
  } else clearError();
  updateView();
}