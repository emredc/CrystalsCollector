// variables //

//crystals have a random value between 1-12//

var crystalBlue=Math.floor(Math.random()*12+1)             
var crystalGreen=Math.floor(Math.random()*12+1) 
var crystalRed=Math.floor(Math.random()*12+1) 
var crystalYellow=Math.floor(Math.random()*12+1) 

//Random number should be between 19-120//

var goal=Math.floor(Math.random()*120+19)
var wins=0
var losses=0
var totalScore=0

$("#computerScore").append(goal);
$("#wins").append(wins);
$("#losses").append(losses);
console.log(goal);

function WIN(){
		alert("You won");
 		wins++; 
  		$("#wins").text("Wins: " + wins);
  		RESTART();
}

function LOSS(){
		alert ("You lost");
  		losses++;
  		$('#losses').text("Losses: " + losses);
  		RESTART();
}

blue = $("#crystal1").on("click", (function(event) 
 	{counter += 3;
		$("#total").html(counter);
 		console.log(counter);
}));
green= $("#crystal2").on("click", (function(event) 
 	{counter += 4;
	$("#total").html(counter); 		console.log(counter);
 }));
 
red = $("#crystal3").on("click", (function(event) 
   {counter += 5;
        $("#total").html(counter);
        
	console.log(counter);
}));
yellow = $("#crystal4").on("click", (function(event)
     	{counter += 6;
		$("#total").html(counter);
        console.log(counter);
    }));
