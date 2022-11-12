"use strict";
const ctx = $('#myChart');
const ctx2 = $('#myChart2');

const errorBackgroundColor = 'lightcoral';
const backgroundColor = 'rgb(0, 180, 0)';
//['Starter', 'Extender', 'Bomb', 'Garnet', 'Defensive', 'Anti-stun', 'Draw', 'Search','Stun'],
const targets = [9, 13, 3, 1, 14, 7, 2, 4, 3];
let input = [];
let file;
let arryChart1 = input.slice(3, 6);
let arryChart2 = input.slice(6, input.length);

jQuery(function () {
  clearError();
  /*
  $('#export').on("click", function () {
    saveData(input);
  });

  $('#import').on("change", function () {
    loadData();
    checkDeck();
  });*/

  $('#mainDeck').on("change", function () {
    input[0] = $(this).val();
    checkDeck();
  });

  $('#extraDeck').on("change", function () {
    input[1] = $(this).val();
    checkDeck();
  });

  $('#sideDeck').on("change", function () {
    input[2] = $(this).val();
    checkDeck();
  });

  $('#mainDeckMonster').on("change", function () {
    input[3] = $(this).val();
    checkDeck();
  });

  $('#mainDeckSpell').on("change", function () {
    input[4] = $(this).val();
    checkDeck();
  });

  $('#mainDeckTrap').on("change", function () {
    input[5] = $(this).val();
    checkDeck();
  });

  $('#mainStarter').on("change", function () {
    input[6] = $(this).val();
    checkDeck();
  });

  $('#mainExtenders').on("change", function () {
    input[7] = $(this).val();
    checkDeck();
  });

  $('#mainBom').on("change", function () {
    input[8] = $(this).val();
    checkDeck();
  });

  $('#mainGarnet').on("change", function () {
    input[9] = $(this).val();
    checkDeck();
  });

  $('#mainSearch').on("change", function () {
    input[10] = $(this).val();
    checkDeck();
  });

  $('#mainDefense').on("change", function () {
    input[11] = $(this).val();
    checkDeck();
  });

  $('#mainStun').on("change", function () {
    input[12] = $(this).val();
    checkDeck();
  });

  $('#mainAntiStun').on("change", function () {
    input[13] = $(this).val();
    checkDeck();
  });

  $('#mainDraw').on("change", function () {
    input[14] = $(this).val();
    checkDeck();
  });

}
);

let myChart = new Chart(ctx, {
  type: 'pie',
  plugins: [ChartDataLabels],
  options: {
    plugins: {
      datalabels: {
        formatter: function(value, context) {
          return ((value/input[0])*100).toFixed(2)+" %" ;
        },
        font :{
          size : '15em',
          weight: 'bold',
          
        }
      }
    }
},
  data: {
    labels: ['monster', 'spell', 'trap'],
    datasets: [{
      label: '#',
      data: arryChart1,
      backgroundColor: [
        'rgb(255, 205, 86)',
        'rgb(54, 162, 235)',
        'rgb(255, 99, 132)',
      ],
      borderWidth: 1,
      hoverOffset: 4

    }],
  }
});

let myChart2 = new Chart(ctx2, {
  type: 'radar',
  data: {
    labels: ['Starter', 'Extender', 'Bomb', 'Garnet', 'Search', 'Defensive', 'Stun', 'Anti-stun', 'Draw'],
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
      data: arryChart2,
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

function updateData() {
  input.slice(3, 6).forEach((element, index) => {
    arryChart1[index] = element;
  });
  input.slice(6, input.length).forEach((element, index) => {
    arryChart2[index] = element;
  });
}

function updateView() {
  console.log(input);

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

  if (parseInt(input[0]) < 40) {
    setError('The main deck must have at least 40 cards.');
  } else if (parseInt(input[0]) > 60) {
    setError('The main deck can have a max of 60 cards.');
  } else if (parseInt(input[0]) != (parseInt(input[3]) + parseInt(input[4]) + parseInt(input[5]))) {
    setError('Please check your card inputs again.');
  } else if (parseInt(input[1]) > 15) {
    setError('The extra deck can have a max of 15 cards.');
  } else if (parseInt(input[2]) > 15) {
    setError('The side deck can have a max of 15 cards.');
  } else clearError();

  updateData();
  updateView();
}

/*
function loadData() {
  $.get('DDD.txt', function (dataTemp) {
    //['Starter', 'Extender', 'Bomb', 'Garnet', 'Search', 'Defensive', 'Stun', 'Anti-stun', 'Draw']
    const inputTemp = dataTemp.split(',', 15);
    //todo check values
    $('#mainDeck').val(inputTemp[0]);
    $('#extraDeck').val(inputTemp[1]);
    $('#sideDeck').val(inputTemp[2]);
    $('#mainDeckMonster').val(inputTemp[3]);
    $('#mainDeckSpell').val(inputTemp[4]);
    $('#mainDeckTrap').val(inputTemp[5]);
    $('#mainStarter').val(inputTemp[6]);
    $('#mainExtenders').val(inputTemp[7]);
    $('#mainBom').val(inputTemp[8]);
    $('#mainGarnet').val(inputTemp[9]);
    $('#mainSearch').val(inputTemp[10]);
    $('#mainDefense').val(inputTemp[11]);
    $('#mainStun').val(inputTemp[12]);
    $('#mainAntiStun').val(inputTemp[13]);
    $('#mainDraw').val(inputTemp[14]);
  });

  input[0] = $('#mainDeck').val();
  input[1] = $('#extraDeck').val();
  input[2] = $('#sideDeck').val();
  input[3] = $('#mainDeckMonster').val();
  input[4] = $('#mainDeckSpell').val();
  input[5] = $('#mainDeckTrap').val();
  input[6] = $('#mainStarter').val();
  input[7] = $('#mainExtenders').val();
  input[8] = $('#mainBom').val();
  input[9] = $('#mainGarnet').val();
  input[10] = $('#mainSearch').val();
  input[11] = $('#mainDefense').val();
  input[12] = $('#mainStun').val();
  input[13] = $('#mainAntiStun').val();
  input[14] = $('#mainDraw').val();

}

function saveData() {
  //todo 
  var link = document.createElement('a');
  link.href = 'data:text/plain;charset=UTF-8,' + escape(input);
  link.download = 'output.txt';
  link.click();
}
*/