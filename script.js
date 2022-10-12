/** ========================= Global variables ================================ */

var total_seconds = 1800;
var c_minutes = parseInt(total_seconds / 60);
var c_seconds = parseInt(total_seconds % 60);
var timer;

var score = 0;
var currentQuestionId = 0;
const resultQuestionId = 16;

const questions = [
  {
    id: 1,
    score: [0, 0, 0, 0, 0],
    answer: ["Eiropa", "Āfrika", "Amerika", "Āzija", "Austrālija"],
  },
  { id: 2, score: [0, 0], answer: ["Krikets", "Boulings"] },
  { id: 3, score: [0], answer: ["Filipīnas"] },
  { id: 4, score: [0], answer: ["6"] },
  { id: 5, score: [0], answer: ["Parīzē"] },
  { id: 6, score: [0, 0], answer: ["2006.gadā", "2021.gadā"] },
  { id: 7, score: [0], answer: ["Latvija"] },
  { id: 8, score: [0, 0, 0, 0] },
  { id: 9, score: [0], answer: ["Kanāda"] },
  { id: 10, score: [0], answer: ["Futbola klubs Ventspils"] },
  { id: 11, score: [0, 0, 0, 0] },
  { id: 12, score: [0, 0, 0], answer: ["4", "14", "10"] },
  { id: 13, score: [0], answer: ["Gundars Vētra"] },
  { id: 14, score: [0], answer: ["Patiesi"] },
  { id: 15, score: [0], answer: ["Kopš 1997.gada"] },
];

const resultTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let totalResult = 0;

const correctAnswerBackgroundColor = "rgba(0,200,0,0.3)";
const inCorrectAnswerBackgroundColor = "rgba(255,0,0,0.3)";

const correctAnswerColor = "rgb(0,50,0)";
const inCorrectAnswerColor = "rgb(200,0,0)";

const correctResultBackgroundColor = "rgb(100,200,100)";
const mediumResultBackgroundColor = "rgb(200,200,100)";

/** ========================= Check Answers ================================ */

/** ========  Input type text question form  ======== */
function checkQuestion1() {
  const answerArray = [
    document.getElementById("Question1-1"),
    document.getElementById("Question1-2"),
    document.getElementById("Question1-3"),
    document.getElementById("Question1-4"),
    document.getElementById("Question1-5"),
  ];
  score = 0;
  let index = 0;

  for (item of answerArray) {
    if (item.value === questions[0].answer[index]) {
      item.style.backgroundColor = correctAnswerBackgroundColor;
      item.style.color = correctAnswerColor;
      item.disabled = true;
      score++;
      index++;
    } else {
      item.style.backgroundColor = inCorrectAnswerBackgroundColor;
      item.style.color = inCorrectAnswerColor;
      item.disabled = true;
      index++;
    }
  }

  document.getElementById("result1").innerHTML = score;
  if (score === 5) {
    document.getElementsByClassName("btn-nav")[0].style.backgroundColor =
      correctResultBackgroundColor;
  } else if (score > 0) {
    document.getElementsByClassName("btn-nav")[0].style.backgroundColor =
      mediumResultBackgroundColor;
  } else {
    document.getElementsByClassName("btn-nav")[0].style.backgroundColor =
      inCorrectAnswerColor;
  }
  totalResult += score;
}

/** ========  Input type checkbox question form  ======== */
function checkQuestion2() {
  const formContainer = document.querySelectorAll(".form__container")[1];
  const answerArray = [
    document.getElementById("Question2-1"),
    document.getElementById("Question2-2"),
    document.getElementById("Question2-3"),
    document.getElementById("Question2-4"),
    document.getElementById("Question2-5"),
  ];
  score = 0;
  let index = 0;

  for (item of answerArray) {
    item.disabled = true;
    let answer = formContainer.children[index];
    if (item.checked) {
      if (questions[1].answer.includes(item)) {
        score++;
        answer.style.backgroundColor = correctAnswerBackgroundColor;
        answer.style.color = correctAnswerColor;
      } else {
        score--;
        answer.style.backgroundColor = inCorrectAnswerBackgroundColor;
        answer.style.color = inCorrectAnswerColor;
      }
    }
    index++;
  }

  if (score <= 0) {
    document.getElementsByClassName("btn-nav")[1].style.backgroundColor =
      inCorrectAnswerColor;
    document.getElementById("result2").innerHTML = "0";
  } else {
    totalResult += score;
    document.getElementById("result2").innerHTML = score;
    if (score == 2) {
      document.getElementsByClassName("btn-nav")[1].style.backgroundColor =
        correctResultBackgroundColor;
    } else {
      document.getElementsByClassName("btn-nav")[1].style.backgroundColor =
        mediumResultBackgroundColor;
    }
  }
}

/** ========  Input type text question form  ======== */
function checkQuestion3() {
  if (document.getElementById("Question3-1").value == questions[2].answer) {
    totalResult++;
    document.getElementById("result3").innerHTML = "1";
    document.getElementsByClassName("btn-nav")[2].style.backgroundColor =
      correctResultBackgroundColor;
    document.getElementById("Question3-1").style.backgroundColor =
      correctAnswerBackgroundColor;
    document.getElementById("Question3-1").style.color = correctAnswerColor;
    document.getElementById("Question3-1").disabled = true;
  } else {
    document.getElementById("result3").innerHTML = "0";
    document.getElementsByClassName("btn-nav")[2].style.backgroundColor =
      inCorrectAnswerColor;
    document.getElementById("Question3-1").style.backgroundColor =
      inCorrectAnswerBackgroundColor;
    document.getElementById("Question3-1").style.color = inCorrectAnswerColor;
    document.getElementById("Question3-1").disabled = true;
  }
}

/** ========  Input type radio question form  ======== */
function checkQuestion4() {
  const formContainer = document.querySelectorAll(".form__container")[3];
  const answerArray = [
    document.getElementById("Question4-1"),
    document.getElementById("Question4-2"),
    document.getElementById("Question4-3"),
    document.getElementById("Question4-4"),
    document.getElementById("Question4-5"),
  ];

  let index = 0;

  for (item of answerArray) {
    item.disabled = true;
    let answer = formContainer.children[index];
    if (item.checked) {
      if(item.value == questions[3].answer) {
        document.getElementById("result4").innerHTML = "1";
        document.getElementsByClassName("btn-nav")[3].style.backgroundColor =
          correctResultBackgroundColor;
        totalResult++;
        answer.style.backgroundColor = correctAnswerBackgroundColor;
        answer.style.color = correctAnswerColor;
      } else {
        document.getElementById("result4").innerHTML = "0";
        document.getElementsByClassName("btn-nav")[3].style.backgroundColor =
          inCorrectAnswerColor;
        answer.style.backgroundColor = inCorrectAnswerBackgroundColor;
        answer.style.color = inCorrectAnswerColor;
      }
    }
    index++;
  }
}

/** ========  Input type radio question form  ======== */
function checkQuestion5() {
  const formContainer = document.querySelectorAll(".form__container")[4];
  const answerArray = [
    document.getElementById("Question5-1"),
    document.getElementById("Question5-2"),
    document.getElementById("Question5-3"),
    document.getElementById("Question5-4"),
  ];

  let index = 0;

  for (item of answerArray) {
    item.disabled = true;
    let answer = formContainer.children[index];
    if (item.checked) {
      if (item.value == questions[4].answer) {
        document.getElementById("result5").innerHTML = "1";
        document.getElementsByClassName("btn-nav")[4].style.backgroundColor =
          correctResultBackgroundColor;
        totalResult++;
        answer.style.backgroundColor = correctAnswerBackgroundColor;
        answer.style.color = correctAnswerColor;
      } else {
        document.getElementById("result5").innerHTML = "0";
        document.getElementsByClassName("btn-nav")[4].style.backgroundColor =
          inCorrectAnswerColor;
        answer.style.backgroundColor = inCorrectAnswerBackgroundColor;
        answer.style.color = inCorrectAnswerColor;
      }
    }
    index++;
  }
}

/** ========  Input type checkbox question form  ======== */
function checkQuestion6() {
  const formContainer = document.querySelectorAll(".form__container")[5];
  const answerArray = [
    document.getElementById("Question6-1"),
    document.getElementById("Question6-2"),
    document.getElementById("Question6-3"),
    document.getElementById("Question6-4"),
    document.getElementById("Question6-5"),
  ];

  score = 0;
  let index = 0;

  for (item of answerArray) {
    item.disabled = true;
    let answer = formContainer.children[index];
    if (item.checked) {
      if (questions[5].answer.includes(item)) {
        score++;
        answer.style.backgroundColor = correctAnswerBackgroundColor;
        answer.style.color = correctAnswerColor;
      } else {
        score--;
        answer.style.backgroundColor = inCorrectAnswerBackgroundColor;
        answer.style.color = inCorrectAnswerColor;
      }
    }
    index++;
  }

  if (score <= 0) {
    document.getElementsByClassName("btn-nav")[5].style.backgroundColor =
      inCorrectAnswerColor;
    document.getElementById("result6").innerHTML = "0";
  } else {
    totalResult += score;
    document.getElementById("result6").innerHTML = score;
    if (score == 2) {
      document.getElementsByClassName("btn-nav")[5].style.backgroundColor =
        correctResultBackgroundColor;
    } else {
      document.getElementsByClassName("btn-nav")[5].style.backgroundColor =
        mediumResultBackgroundColor;
    }
  }
}

/** ========  Input type text question form  ======== */
function checkQuestion7() {
  document.getElementById("Question7-1").disabled = true;

  if (document.getElementById("Question7-1").value == questions[6].answer) {
    totalResult++;
    document.getElementById("result7").innerHTML = "1";
    document.getElementsByClassName("btn-nav")[6].style.backgroundColor =
      correctResultBackgroundColor;
    document.getElementById("Question7-1").style.backgroundColor =
      correctAnswerBackgroundColor;
    document.getElementById("Question7-1").style.color = correctAnswerColor;
  } else {
    document.getElementById("result7").innerHTML = "0";
    document.getElementsByClassName("btn-nav")[6].style.backgroundColor =
      inCorrectAnswerColor;
    document.getElementById("Question7-1").style.backgroundColor =
      inCorrectAnswerBackgroundColor;
    document.getElementById("Question7-1").style.color = inCorrectAnswerColor;
  }
}

/** ========  DragAndDrop question form  ======== */
function checkQuestion8() {
  score = 0;
  for (let i = 1; i < 5; i++) {
    if (
      document.getElementById("drop8-" + i).hasChildNodes() &&
      document.getElementById("drop8-" + i).children[0].id == "drag8-" + i
    ) {
      score++;
      document.getElementById("drop8-" + i).style.backgroundColor =
        correctAnswerBackgroundColor;
      document.getElementById("drop8-" + i).disabled = true;
    } else {
      document.getElementById("drop8-" + i).style.backgroundColor =
        inCorrectAnswerBackgroundColor;
      document.getElementById("drop8-" + i).disabled = true;
    }
  }
  document.getElementById("result8").innerHTML = score;
  if (score == 4) {
    document.getElementsByClassName("btn-nav")[7].style.backgroundColor =
      correctResultBackgroundColor;
  } else if (score > 0) {
    document.getElementsByClassName("btn-nav")[7].style.backgroundColor =
      mediumResultBackgroundColor;
  } else {
    document.getElementsByClassName("btn-nav")[7].style.backgroundColor =
      inCorrectAnswerColor;
  }
  totalResult += score;
}

/** ========  Input type radio question form  ======== */
function checkQuestion9() {
  const formContainer = document.querySelectorAll(".form__container")[8];
  const answerArray = [
    document.getElementById("Question9-1"),
    document.getElementById("Question9-2"),
    document.getElementById("Question9-3"),
  ];

  let index = 0;

  for (item of answerArray) {
    item.disabled = true;
    let answer = formContainer.children[index];
    if (item.checked) {
      if(item.value == questions[8].answer) {
        document.getElementById("result9").innerHTML = "1";
        document.getElementsByClassName("btn-nav")[8].style.backgroundColor =
          correctResultBackgroundColor;
        totalResult++;
        answer.style.backgroundColor = correctAnswerBackgroundColor;
        answer.style.color = correctAnswerColor;
      } else {
        document.getElementById("result9").innerHTML = "0";
        document.getElementsByClassName("btn-nav")[8].style.backgroundColor =
          inCorrectAnswerColor;
        answer.style.backgroundColor = inCorrectAnswerBackgroundColor;
        answer.style.color = inCorrectAnswerColor;
      }
    }
    index++;
  }
}

/** ========  Input type text question form  ======== */
function checkQuestion10() {
  document.getElementById("Question10-1").disabled = true;

  if (document.getElementById("Question10-1").value == questions[9].answer) {
    totalResult++;
    document.getElementById("result10").innerHTML = "1";
    document.getElementsByClassName("btn-nav")[9].style.backgroundColor =
      correctResultBackgroundColor;
    document.getElementById("Question10-1").style.backgroundColor =
      correctAnswerBackgroundColor;
    document.getElementById("Question10-1").style.color = correctAnswerColor;
  } else {
    document.getElementById("result10").innerHTML = "0";
    document.getElementsByClassName("btn-nav")[9].style.backgroundColor =
      inCorrectAnswerColor;
    document.getElementById("Question10-1").style.backgroundColor =
      inCorrectAnswerBackgroundColor;
    document.getElementById("Question10-1").style.color = inCorrectAnswerColor;
  }
}

/** ========  DragAndDrop question form  ======== */
function checkQuestion11() {
  score = 0;

  for (let i = 1; i < 5; i++) {
    if (
      document.getElementById("drop11-" + i).hasChildNodes() &&
      document.getElementById("drop11-" + i).children[0].id == "drag11-" + i
    ) {
      score++;
      document.getElementById("drop11-" + i).style.backgroundColor =
        correctAnswerBackgroundColor;
      document.getElementById("drop11-" + i).disabled = true;
    } else {
      document.getElementById("drop11-" + i).style.backgroundColor =
        inCorrectAnswerBackgroundColor;
      document.getElementById("drop11-" + i).disabled = true;
    }
  }

  document.getElementById("result11").innerHTML = score;

  if (score == 4) {
    document.getElementsByClassName("btn-nav")[10].style.backgroundColor =
      correctResultBackgroundColor;
  } else if (score > 0) {
    document.getElementsByClassName("btn-nav")[10].style.backgroundColor =
      mediumResultBackgroundColor;
  } else {
    document.getElementsByClassName("btn-nav")[10].style.backgroundColor =
      inCorrectAnswerColor;
  }

  totalResult += score;
}

/** ========  Input type number question form  ======== */
function checkQuestion12() {
  score = 0;
  document.getElementById("Question12-1").style.disabled = true;
  document.getElementById("Question12-2").style.disabled = true;
  document.getElementById("Question12-3").style.disabled = true;

  if (
    document.getElementById("Question12-1").value == questions[11].answer[0]
  ) {
    score++;
    document.getElementById("Question12-1").style.backgroundColor =
      correctAnswerBackgroundColor;
    document.getElementById("Question12-1").style.color = correctAnswerColor;
  } else {
    document.getElementById("Question12-1").style.backgroundColor =
      inCorrectAnswerBackgroundColor;
    document.getElementById("Question12-1").style.color = inCorrectAnswerColor;
  }

  if (
    document.getElementById("Question12-2").value == questions[11].answer[1]
  ) {
    score++;
    document.getElementById("Question12-2").style.backgroundColor =
      correctAnswerBackgroundColor;
    document.getElementById("Question12-2").style.color = correctAnswerColor;
  } else {
    document.getElementById("Question12-2").style.backgroundColor =
      inCorrectAnswerBackgroundColor;
    document.getElementById("Question12-2").style.color = inCorrectAnswerColor;
  }

  if (
    document.getElementById("Question12-3").value == questions[11].answer[2]
  ) {
    score++;
    document.getElementById("Question12-3").style.backgroundColor =
      correctAnswerBackgroundColor;
    document.getElementById("Question12-3").style.color = correctAnswerColor;
  } else {
    document.getElementById("Question12-3").style.backgroundColor =
      inCorrectAnswerBackgroundColor;
    document.getElementById("Question12-3").style.color = inCorrectAnswerColor;
  }

  if (score == 3) {
    document.getElementsByClassName("btn-nav")[11].style.backgroundColor =
      correctResultBackgroundColor;
    document.getElementById("result12").innerHTML = "3";
  } else if (score > 0) {
    document.getElementsByClassName("btn-nav")[11].style.backgroundColor =
      mediumResultBackgroundColor;
    document.getElementById("result12").innerHTML = result;
  } else {
    document.getElementsByClassName("btn-nav")[11].style.backgroundColor =
      inCorrectAnswerColor;
    document.getElementById("result12").innerHTML = "0";
  }

  totalResult += score;
}

/** ========  Input type text question form  ======== */
function checkQuestion13() {
  document.getElementById("Question13-1").disabled = true;

  if (document.getElementById("Question13-1").value == questions[12].answer) {
    document.getElementsByClassName("btn-nav")[12].style.backgroundColor =
      correctResultBackgroundColor;
    document.getElementById("result13").innerHTML = "1";
    totalResult++;
    document.getElementById("Question13-1").style.backgroundColor =
      correctAnswerBackgroundColor;
    document.getElementById("Question13-1").style.color = correctAnswerColor;
  } else {
    document.getElementsByClassName("btn-nav")[12].style.backgroundColor =
      inCorrectAnswerColor;
    document.getElementById("result13").innerHTML = "0";
    document.getElementById("Question13-1").style.backgroundColor =
      inCorrectAnswerBackgroundColor;
    document.getElementById("Question13-1").style.color = inCorrectAnswerColor;
  }
}

/** ========  Input type radio question form  ======== */
function checkQuestion14() {
  const formContainer = document.querySelectorAll(".form__container")[13];
  const answerArray = [
    document.getElementById("Question14-1"),
    document.getElementById("Question14-2"),
  ];

  let index = 0;

  for (item of answerArray) {
    item.disabled = true;
    let answer = formContainer.children[index];
    if (item.checked && item.value == questions[13].answer) {
      document.getElementById("result14").innerHTML = "1";
      document.getElementsByClassName("btn-nav")[13].style.backgroundColor =
        correctResultBackgroundColor;
      totalResult++;
      answer.style.backgroundColor = correctAnswerBackgroundColor;
      answer.style.color = correctAnswerColor;
    } else {
      document.getElementById("result14").innerHTML = "0";
      document.getElementsByClassName("btn-nav")[13].style.backgroundColor =
        inCorrectAnswerColor;
      answer.style.backgroundColor = inCorrectAnswerBackgroundColor;
      answer.style.color = inCorrectAnswerBackgroundColor;
    }
    index++;
  }
}

/** ========  Input type text question form  ======== */
function checkQuestion15() {
  document.getElementById("Question15-1").disabled = true;

  if (document.getElementById("Question15-1").value == questions[14].answer) {
    document.getElementsByClassName("btn-nav")[14].style.backgroundColor =
      correctResultBackgroundColor;
    document.getElementById("result15").innerHTML = "1";
    totalResult++;
    document.getElementById("Question15").style.backgroundColor =
      correctAnswerBackgroundColor;
    document.getElementById("Question15").style.color = correctAnswerColor;
  } else {
    document.getElementsByClassName("btn-nav")[14].style.backgroundColor =
      inCorrectAnswerColor;
    document.getElementById("result15").innerHTML = "0";
    document.getElementById("Question15").style.backgroundColor =
      inCorrectAnswerBackgroundColor;
    document.getElementById("Question15").style.color = inCorrectAnswerColor;
  }
}

/** ========================= Timer Setup ================================ */

function startTimer() {
  if (c_seconds < 10) {
    c_seconds = "0" + c_seconds;
  }

  document.getElementsByClassName(
    "nav__timer"
  )[0].innerHTML = `${c_minutes} : ${c_seconds}`;

  if (total_seconds <= 0) {
    finishTest();
  } else {
    total_seconds = total_seconds - 1;
    c_minutes = parseInt(total_seconds / 60);
    c_seconds = parseInt(total_seconds % 60);
    timer = setTimeout(startTimer, 1000);
  }
}

/** ========================= Navigation ================================ */

function Question(questionId) {
  if (questionId === resultQuestionId) {
    document.getElementById("Question" + currentQuestionId).style.display =
      "none";
    document.getElementById("results").style.display = "block";
  } else {
    document.getElementById("results").style.display = "none";
    document.getElementById("Question" + currentQuestionId).style.display =
      "none";

    const nextQuestion = "Question" + questionId;
    document.getElementById(nextQuestion).style.display = "flex";
    currentQuestionId = questionId;
  }
}

function nextQuestion(questionId) {
  document.getElementById("Question" + questionId).style.display = "none";

  currentQuestionId = questionId;
  const nextQuestionId = ++currentQuestionId;
  const nextQuestion = "Question" + nextQuestionId;

  document.getElementById(nextQuestion).style.display = "flex";
}

function prevQuestion(questionId) {
  document.getElementById("Question" + questionId).style.display = "none";

  currentQuestionId = questionId;
  const prevQuestionId = --currentQuestionId;
  const prevQuestion = "Question" + prevQuestionId;

  document.getElementById(prevQuestion).style.display = "flex";
}

/** ======================= Begin Test Button ============================== */

function beginTest() {
  currentQuestionId = 1;
  document.getElementsByClassName("article__intro")[0].style.display = "none";
  document.getElementById("Question1").style.display = "flex";
  document.getElementsByClassName("nav")[0].style.display = "flex";
  startTimer();
}

/** ========================= DragAndDrop ================================ */

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");

  if (window.event.target.nodeName !== "IMG") {
    ev.target.appendChild(document.getElementById(data));
  }
}

/** ============================ End Test button ======================================= */

function finishTest() {
  checkQuestion1();
  checkQuestion2();
  checkQuestion3();
  checkQuestion4();
  checkQuestion5();
  checkQuestion6();
  checkQuestion7();
  checkQuestion8();
  checkQuestion9();
  checkQuestion10();
  checkQuestion11();
  checkQuestion12();
  checkQuestion13();
  checkQuestion14();
  checkQuestion15();

  clearInterval(timer);
  for (var i = 1; i <= 15; i++) {
    let question = "Question" + i;
    document.getElementById(question).style.display = "none";
  }
  document.getElementById("results").style.display = "block";
  document.getElementsByClassName("btn-finish")[0].style.display = "none";
  document.getElementById(
    "results__label"
  ).innerHTML = `You scored ${totalResult} out of 29 points or ${
    Math.round(((totalResult * 100) / 29) * 100) / 100
  }%`;
}
