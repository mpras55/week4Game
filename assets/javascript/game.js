
//   Global Variables
var players = [];
var attacker = [];
var enemies = [];
var defender = [];

var playerChosen = false;
var defenderChosen = false;
var winOrLoss = false;
var win = false;
var Loss = false;
var goodOrEvil = true;
var gameOver = false;

// Initialize the game after initial page load
$(document).ready(function () {
	// Clear previously loaded messages 
	initializeGame();
});

// On click events once document is ready after each reload/DOM update

$(document).on("click", "#neo-player", function () {
	console.log("The chosen one!");
	// Clear previously loaded messages 
	$("#message1").html("");
	$("#message2").html("");
	if (!playerChosen) {
		var index = $(this).attr("data-index");
		attacker.push(players[index]);
		goodArmyChosen();
	}
});

$(document).on("click", "#trinity-player", function () {
	console.log("Follow the white rabbit!");
	// Clear previously loaded messages 
	$("#message1").html("");
	$("#message2").html("");
	if (!playerChosen) {
		var index = $(this).attr("data-index");
		attacker.push(players[index]);
		goodArmyChosen();
	}
});

$(document).on("click", "#morpheus-player", function () {
	console.log("I offer you two choices!");
	// Clear previously loaded messages 
	$("#message1").html("");
	$("#message2").html("");
	if (!playerChosen) {
		var index = $(this).attr("data-index");
		attacker.push(players[index]);
		goodArmyChosen();
	}
});

$(document).on("click", "#cypher-player", function () {
	console.log("Who is in the sheep's skin?");
	// Clear previously loaded messages 
	$("#message1").html("");
	$("#message2").html("");
	if (!playerChosen) {
		var index = $(this).attr("data-index");
		attacker.push(players[index]);
		evilArmyChosen();
	}
});

$(document).on("click", "#thompson-player", function () {
	console.log("Agent Thompson!");
	// Clear previously loaded messages 
	$("#message1").html("");
	$("#message2").html("");
	if (!playerChosen) {
		var index = $(this).attr("data-index");
		attacker.push(players[index]);
		evilArmyChosen();
	}
});

$(document).on("click", "#smith-player", function () {
	console.log("Mr. Anderson...");
	// Clear previously loaded messages 
	$("#message1").html("");
	$("#message2").html("");
	if (!playerChosen) {
		var index = $(this).attr("data-index");
		attacker.push(players[index]);
		evilArmyChosen();
	}
});

$(document).on("click", "#neo-defender", function () {
	console.log("The chosen one!");
	// Clear previously loaded messages 
	$("#message1").html("");
	$("#message2").html("");
	if (!defenderChosen) {
		var index = $(this).attr("data-index");
		defender.push(enemies[index]);

		// Populate defender
		populateDefender();
		//Splice Enemies array
		enemies.splice(index, 1);
		//Adjust player indexes after splicing
		adjustEnemiesIndex();

		//Repopulate defending army 
		populateDefendingArmy();

		defenderChosen = true;
	}
	else {
		$("#message1").html("Defender already chosen.");
		$("#message2").html("Click on Attach button, to continue the battle");
	}
});

$(document).on("click", "#trinity-defender", function () {
	console.log("Follow the white rabbit!");
	// Clear previously loaded messages 
	$("#message1").html("");
	$("#message2").html("");
	if (!defenderChosen) {
		var index = $(this).attr("data-index");
		defender.push(enemies[index]);

		// Populate defender
		populateDefender();
		//Splice Enemies array
		enemies.splice(index, 1);
		//Adjust player indexes after splicing
		adjustEnemiesIndex();

		//Repopulate defending army 
		populateDefendingArmy();

		defenderChosen = true;
	}
	else {
		$("#message1").html("Defender already chosen.");
		$("#message2").html("Click on Attach button, to continue the battle");
	}
});

$(document).on("click", "#morpheus-defender", function () {
	console.log("I offer you two choices!");
	// Clear previously loaded messages 
	$("#message1").html("");
	$("#message2").html("");
	if (!defenderChosen) {
		var index = $(this).attr("data-index");
		defender.push(enemies[index]);

		// Populate defender
		populateDefender();
		//Splice Enemies array
		enemies.splice(index, 1);
		//Adjust player indexes after splicing
		adjustEnemiesIndex();

		//Repopulate defending army 
		populateDefendingArmy();

		defenderChosen = true;
	}
	else {
		$("#message1").html("Defender already chosen.");
		$("#message2").html("Click on Attach button, to continue the battle");
	}
});

$(document).on("click", "#cypher-defender", function () {
	console.log("Who is in the sheep's skin?");
	// Clear previously loaded messages 
	$("#message1").html("");
	$("#message2").html("");
	if (!defenderChosen) {
		var index = $(this).attr("data-index");
		defender.push(enemies[index]);

		// Populate defender
		populateDefender();
		//Splice Enemies array
		enemies.splice(index, 1);
		//Adjust player indexes after splicing
		adjustEnemiesIndex();

		//Repopulate defending army 
		populateDefendingArmy();

		defenderChosen = true;
	}
	else {
		$("#message1").html("Defender already chosen.");
		$("#message2").html("Click on Attach button, to continue the battle");
	}
});

$(document).on("click", "#thompson-defender", function () {
	console.log("Agent Thompson!");
	// Clear previously loaded messages 
	$("#message1").html("");
	$("#message2").html("");
	if (!defenderChosen) {
		var index = $(this).attr("data-index");
		defender.push(enemies[index]);

		// Populate defender
		populateDefender();
		//Splice Enemies array
		enemies.splice(index, 1);
		//Adjust player indexes after splicing
		adjustEnemiesIndex();

		//Repopulate defending army 
		populateDefendingArmy();

		defenderChosen = true;
	}
	else {
		$("#message1").html("Defender already chosen.");
		$("#message2").html("Click on Attach button, to continue the battle");
	}
});

$(document).on("click", "#smith-defender", function () {
	console.log("Mr. Anderson...");
	// Clear previously loaded messages 
	$("#message1").html("");
	$("#message2").html("");
	if (!defenderChosen) {
		var index = $(this).attr("data-index");
		defender.push(enemies[index]);

		// Populate defender
		populateDefender();
		//Splice Enemies array
		enemies.splice(index, 1);

		//Repopulate defending army 
		populateDefendingArmy();

		defenderChosen = true;
	}
	else {
		$("#message1").html("Defender already chosen.");
		$("#message2").html("Click on Attach button, to continue the battle");
	}
});


$(document).on("click", "#attack", function () {
	// Clear previously loaded messages 
	$("#message1").html("");
	$("#message2").html("");
	if (!gameOver) {
		if (!playerChosen) {
			$("#message1").html("Choose your character to fight the battle");
		} else {
			if (!defenderChosen) {
				$("#message1").html("Choose a defender to fight the battle");
			}
		}
		if (playerChosen && defenderChosen) {
			console.log("Attack...!");
			defender[0].healthPoint -= attacker[0].firepower;
			attacker[0].healthPoint -= defender[0].firepower;
			if (defender[0].healthPoint > 0 && attacker[0].healthPoint > 0) {
				$("#message1").html("You attacked " + defender[0].name + " for " + attacker[0].firepower + " damage.");
				$("#message2").html(defender[0].name + " attacked you back for " + defender[0].firepower + " damage.");
				populateAttacker();
				populateDefender();
				if (goodOrEvil) {
					attacker[0].firepower += 8;
				} else {
					defender[0].firepower += 8;
				}
			}
			if (defender[0].healthPoint <= 0 && attacker[0].healthPoint <= 0) {
				$("#message1").html("You have defeated " + defender[0].name + " !");
				$("#message2").html("But Alas! You too are defeated. GAME OVER!!");
				$("#attacker").empty();
				// defender = [];
				$("#defender").empty();
				gameOver = true;
			}
			if (attacker[0].healthPoint <= 0 && defender[0].healthPoint > 0) {
				$("#message1").html("You have been defeated !");
				$("#message2").html("GAME OVER!!");
				$("#attacker").empty();
				populateDefender();
				gameOver = true;

			}
			if (defender[0].healthPoint <= 0 && attacker[0].healthPoint > 0) {
				if (enemies.length > 0) {
					$("#message1").html("You have defeated " + defender[0].name + " !");
					$("#message2").html("Choose another enemy to fight.");
					populateAttacker();
					defender = [];
					$("#defender").empty();
					defenderChosen = false;
					// if (goodOrEvil) {
					// 	attacker[0].firepower += 8;
					// }
				}
				else {
					$("#message1").html("You have defeated all the enemies!");
					$("#message2").html("YOU WON. GAME OVER!!");
					populateAttacker();
					defender = [];
					$("#defender").empty();
					defenderChosen = false;
					gameOver = true;
				}
			}
			if (gameOver) {
				var restartButton = $("<button>");
				restartButton.attr('id', "restart-button");
				restartButton.html("Restart");
				$("#reset").append(restartButton);
			}
		}
	}
	else {
		$("#message1").html("Game Completed.");
		$("#message2").html("Click on Retart button and start the game again.");
	}
});

$(document).on("click", "#restart-button", function () {
	console.log("Restarting");
	$("#reset").empty();
	initializeGame();
});


/******************************************************************/
//   Start of functions
/******************************************************************/

function initializeGame() {
	/******************************************************************/
	//   Initialization/Reset code
	/******************************************************************/
	players = [];
	/******************************************************************/
	//   Object for player list and properties
	/******************************************************************/
	players = [
		{
			name: "Neo"
			, healthPoint: 180
			, image: "assets/images/Neo.jpg"
			, firepower: 12
			, playerIndex: 0
			, id1: "neo-player"
			, id2: "neo-attacker"
			, id3: "neo-defender"
		}
		, {
			name: "Trinity"
			, healthPoint: 120
			, image: "assets/images/Trinity.jpg"
			, firepower: 10
			, playerIndex: 1
			, id1: "trinity-player"
			, id2: "trinity-attacker"
			, id3: "trinity-defender"
		}
		, {
			name: "Morpheus"
			, healthPoint: 150
			, image: "assets/images/Morpheus.jpg"
			, firepower: 11
			, playerIndex: 2
			, id1: "morpheus-player"
			, id2: "morpheus-attacker"
			, id3: "morpheus-defender"
		}
		, {
			name: "Cypher"
			, healthPoint: 100
			, image: "assets/images/Cypher.jpg"
			, firepower: 5
			, playerIndex: 3
			, id1: "cypher-player"
			, id2: "cypher-attacker"
			, id3: "cypher-defender"
		}
		, {
			name: "Agent Thompson"
			, healthPoint: 150
			, image: "assets/images/Agent_Thompson.jpg"
			, firepower: 20
			, playerIndex: 4
			, id1: "thompson-player"
			, id2: "thompson-attacker"
			, id3: "thompson-defender"
		}
		, {
			name: "Agent Smith"
			, healthPoint: 180
			, image: "assets/images/Agent_Smith.jpg"
			, firepower: 25
			, playerIndex: 5
			, id1: "smith-player"
			, id2: "smith-attacker"
			, id3: "smith-defender"
		}
	];

	attacker = [];
	enemies = [];
	defender = [];

	playerChosen = false;
	defenderChosen = false;
	winOrLoss = false;
	win = false;
	Loss = false;
	goodOrEvil = true;
	gameOver = false;


	var instructionDiv = $("<div>");
	instructionDiv.html("<h2>Choose a player....  Whose side are you on...?!</h2>");
	$("#player-list").append(instructionDiv);

	for (var i = 0; i < players.length; i++) {
		// console.log(players[i].name);

		// Create Divs to display player information
		innerDivFunc($("#player-list"), "players", players[i].id1, "");

		// Add additional attribute for player index
		$("#" + players[i].id1).attr("data-index", players[i].playerIndex);

		// Create 3 inner divs for the div created above - for name, image and health point
		innerDivFunc($("#" + players[i].id1), "innerDiv", "", players[i].name);
		innerDivFunc($("#" + players[i].id1), "innerDiv", "", "<img src='" + players[i].image + "' width='150px' height='150px'>");
		innerDivFunc($("#" + players[i].id1), "innerDiv", "", players[i].healthPoint);

	}
	$("#message1").html("");
	$("#message2").html("");
	$("#attacker").empty();
	$("#defending-army").empty();
	$("#defender").empty();
}

function innerDivFunc(parentDivParm, classNameParm, idParm, htmlParm) {
	/******************************************************************/
	//   Function to append a child <div>
	/******************************************************************/
	//  Input parameters 
	// parentDivParm  -->  Parent Div 
	// classNameParm  -->  Child Div class name
	// idParm         -->  Child Div id
	// htmlParm       -->  HTML to be added

	var innerDivVar = $("<div>");
	innerDivVar.addClass(classNameParm);
	innerDivVar.attr('id', idParm);
	innerDivVar.html(htmlParm);
	parentDivParm.append(innerDivVar);

}

function goodArmyChosen() {
	// Populate enemies object array
	machineArmyToEnemies();

	// Populate Attacker
	populateAttacker();

	// Populate Defending Army
	populateDefendingArmy();

	goodOrEvil = true;
	playerChosen = true;
	$("#player-list").empty();
}

function evilArmyChosen() {
	// Populate enemies object array
	neoArmyToEnemies();

	// Populate Attacker
	populateAttacker();

	// Populate Defending Army
	populateDefendingArmy();

	goodOrEvil = false;
	playerChosen = true;
	$("#player-list").empty();
}

function machineArmyToEnemies() {
	for (var i = 3; i < 6; i++) {
		enemies.push(players[i]);
	}
	// Adjust enemies object array player index
	adjustEnemiesIndex();
}

function neoArmyToEnemies() {
	for (var i = 0; i < 3; i++) {
		enemies.push(players[i]);
	}
}

function populateAttacker() {
	$("#attacker").empty();
	innerDivFunc($("#attacker"), "attacker", attacker[0].id2, "");
	innerDivFunc($("#" + attacker[0].id2), "innerDiv", "", attacker[0].name);
	innerDivFunc($("#" + attacker[0].id2), "innerDiv", "", "<img src='" + attacker[0].image + "' width='150px' height='150px'>");
	innerDivFunc($("#" + attacker[0].id2), "innerDiv", "", attacker[0].healthPoint);
}

function populateDefendingArmy() {
	$("#defending-army").empty();

	for (var i = 0; i < enemies.length; i++) {
		innerDivFunc($("#defending-army"), "defending-army", enemies[i].id3, "");

		$("#" + enemies[i].id3).attr("data-index", enemies[i].playerIndex);

		innerDivFunc($("#" + enemies[i].id3), "innerDiv", "", enemies[i].name);
		innerDivFunc($("#" + enemies[i].id3), "innerDiv", "", "<img src='" + enemies[i].image + "' width='150px' height='150px'>");
		innerDivFunc($("#" + enemies[i].id3), "innerDiv", "", enemies[i].healthPoint);
	}
}

function populateDefender() {
	$("#defender").empty();
	innerDivFunc($("#defender"), "defender2", defender[0].id2, "");
	innerDivFunc($("#" + defender[0].id2), "innerDiv", "", defender[0].name);
	innerDivFunc($("#" + defender[0].id2), "innerDiv", "", "<img src='" + defender[0].image + "' width='150px' height='150px'>");
	innerDivFunc($("#" + defender[0].id2), "innerDiv", "", defender[0].healthPoint);
}

function adjustEnemiesIndex() {
	// Adjust enemies object array player index
	for (var i = 0; i < enemies.length; i++) {
		enemies[i].playerIndex = i;
	}
}
