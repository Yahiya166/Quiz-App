// go to top

mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

// scroll function
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// top function
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//   check values function
function check() {
  var score = 0;

  // Q # 1
var right_answer_1 = document.getElementById("q1-a1");
var q1_answer_2 = document.getElementById("q1-a2");
var q1_answer_3 = document.getElementById("q1-a3");
var q1_answer_4 = document.getElementById("q1-a4");
if (right_answer_1.checked == true) {
  score++
  alert("Q1 answer right");
}
else {
  alert("Q1 answer wrong");
}




// Q # 2
var q2_answer_2 = document.getElementById("q2-a1");
var right_answer_2 = document.getElementById("q2-a2");
var q2_answer_2 = document.getElementById("q2-a3");
var q2_answer_2 = document.getElementById("q2-a4");
if (right_answer_2.checked == true) {
  score++
  alert("Q2 answer right");
}
else {
  alert("Q2 answer wrong");
}


// Q # 3
var q2_answer_3 = document.getElementById("q3-a1");
var q2_answer_3 = document.getElementById("q3-a2");
var q2_answer_3 = document.getElementById("q3-a3");
var right_answer_3 = document.getElementById("q3-a4");
if (right_answer_3.checked == true) {
  score++
  alert("Q3 answer right");
}
else {
  alert("Q3 answer wrong");
}

// Q # 4
var q2_answer_4 = document.getElementById("q4-a1");
var q2_answer_4 = document.getElementById("q4-a2");
var right_answer_4 = document.getElementById("q4-a3");
var q2_answer_4 = document.getElementById("q4-a4");
if (right_answer_4.checked == true) {
  score++
  alert("Q4 answer right");
}
else {
  alert("Q4 answer wrong");
}


// Q # 5
var right_answer_5 = document.getElementById("q5-a1");
var q2_answer_5 = document.getElementById("q5-a2");
var q2_answer_5 = document.getElementById("q5-a3");
var q2_answer_5 = document.getElementById("q5-a4");
if (right_answer_5.checked == true) {
  score++
  alert("Q5 answer right");
}
else {
  alert("Q5 answer wrong");
}


// Q # 6
var q2_answer_6 = document.getElementById("q6-a1");
var q2_answer_6 = document.getElementById("q6-a2");
var q2_answer_6 = document.getElementById("q6-a3");
var right_answer_6 = document.getElementById("q6-a4");
if (right_answer_6.checked == true) {
  score++
  alert("Q6 answer right");
}
else {
  alert("Q6 answer wrong");
}


}