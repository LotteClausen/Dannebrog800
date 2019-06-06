// JavaScript Document


function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var question11 = document.quiz.question11.value;
	var question12 = document.quiz.question12.value;
	var question13 = document.quiz.question13.value;
	
	var correct = 0;



	if (question1 == "1219") {
		correct++;
}
	
	if (question2 == "Krig (De estiske korstoge)") {
		correct++;
		
}
	
	if (question3 == "Estland") {
		correct++;
	}
	
	if (question4 == "Gud og Kongen") {
		correct++;
	}
	
	if (question5 == "6") {
		correct++;
}
	
	if (question6 == "4") {
		correct++;
		
}
	
	if (question7 == "Slaget ved Lyndanisse") {
		correct++;
	}
	
	if (question8 == "24. December") {
		correct++;
	}
	
	if (question9 == "Gud") {
		correct++;
	}
	
	if (question10 == "Ja") {
		correct++;
}
	
	if (question11 == "Valdemar Sejr") {
		correct++;
		
}
	
	if (question12 == "kl. 08.00") {
		correct++;
	}
	
	if (question13 == "Danernes fane eller rødfarvet fane") {
		correct++;
	}
	
	
	
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	
	document.getElementById("number_correct").innerHTML = "Tillykke! Du fik " + correct + " rigtige.";
	
	}