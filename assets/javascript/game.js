/******************************************************************/
//   Object for player list and properties
/******************************************************************/
var players = [
	{
		name: "Neo"
		, healthPoint: 120
		, image: "assets/images/Neo.jpg"
		, firepower: 8
		, playerIndex: 0
		, id1: "neo-player"
		, id2: "neo-attacker"
		, id3: "neo-defender"
	}
	, {
		name: "Trinity"
		, healthPoint: 120
		, image: "assets/images/Trinity.jpg"
		, firepower: 8
		, playerIndex: 1
		, id1: "trinity-player"
		, id2: "trinity-attacker"
		, id3: "trinity-defender"
	}
	, {
		name: "Morpheus"
		, healthPoint: 120
		, image: "assets/images/Morpheus.jpg"
		, firepower: 8
		, playerIndex: 2
		, id1: "morpheus-player"
		, id2: "morpheus-attacker"
		, id3: "morpheus-defender"
	}
	, {
		name: "Cypher"
		, healthPoint: 100
		, image: "assets/images/Cypher.jpg"
		, firepower: 8
		, playerIndex: 3
		, id1: "cypher-player"
		, id2: "cypher-attacker"
		, id3: "cypher-defender"
	}
	, {
		name: "Agent Thompson"
		, healthPoint: 150
		, image: "assets/images/Agent_Thompson.jpg"
		, firepower: 8
		, playerIndex: 4
		, id1: "thompson-player"
		, id2: "thompson-attacker"
		, id3: "thompson-defender"
	}
	, {
		name: "Agent Smith"
		, healthPoint: 180
		, image: "assets/images/Agent_Smith.jpg"
		, firepower: 8
		, playerIndex: 5
		, id1: "smith-player"
		, id2: "smith-attacker"
		, id3: "smith-defender"
	}
];

//   Global Variables
var attacker = [];
var enemies = [];
var defender = [];

var playerChosen = false;
var defenderChosen = false;
var winOrLoss = false;
var win = false;
var Loss = false;
var goodOrEvil = true;

// Initialize the game after initial page load
$(document).ready(function () {
	initializeGame();
});

// On click events once document is ready after each reload/DOM update

$(document).on("click", "#neo-player", function () {
	console.log("The chosen one!");
	if (!playerChosen) {
		var index = $(this).attr("data-index");
		attacker.push(players[index]);
		goodArmyChosen();
	}
});

$(document).on("click", "#trinity-player", function () {
	console.log("Follow the white rabbit!");
	if (!playerChosen) {
		var index = $(this).attr("data-index");
		attacker.push(players[index]);
		goodArmyChosen();
	}
});

$(document).on("click", "#morpheus-player", function () {
	console.log("I offer you two choices!");
	if (!playerChosen) {
		var index = $(this).attr("data-index");
		attacker.push(players[index]);
		goodArmyChosen();
	}
});

$(document).on("click", "#cypher-player", function () {
	console.log("Who is in the sheep's skin?");
	if (!playerChosen) {
		var index = $(this).attr("data-index");
		attacker.push(players[index]);
		evilArmyChosen();
	}
});

$(document).on("click", "#thompson-player", function () {
	console.log("Agent Thompson!");
	if (!playerChosen) {
		var index = $(this).attr("data-index");
		attacker.push(players[index]);
		evilArmyChosen();
	}
});

$(document).on("click", "#smith-player", function () {
	console.log("Mr. Anderson...");
	if (!playerChosen) {
		var index = $(this).attr("data-index");
		attacker.push(players[index]);
		evilArmyChosen();
	}
});

$(document).on("click", "#neo-defender", function () {
	console.log("The chosen one!");
	if (!defenderChosen) {
		var index = $(this).attr("data-index");
		defender.push(enemies[index]);

		// Populate defender
		populateDefender();
		//Splice Enemies array
		enemies.splice(index,1);

		//Repopulate defending army 
		populateDefendingArmy();

		defenderChosen = true;
	}
});

$(document).on("click", "#trinity-defender", function () {
	console.log("Follow the white rabbit!");
	if (!defenderChosen) {
		var index = $(this).attr("data-index");
		defender.push(enemies[index]);

		// Populate defender
		populateDefender();
		//Splice Enemies array
		enemies.splice(index,1);

		//Repopulate defending army 
		populateDefendingArmy();

		defenderChosen = true;
	}
});

$(document).on("click", "#morpheus-defender", function () {
	console.log("I offer you two choices!");
	if (!defenderChosen) {
		var index = $(this).attr("data-index");
		defender.push(enemies[index]);

		// Populate defender
		populateDefender();
		//Splice Enemies array
		enemies.splice(index,1);

		//Repopulate defending army 
		populateDefendingArmy();

		defenderChosen = true;
	}
});

$(document).on("click", "#cypher-defender", function () {
	console.log("Who is in the sheep's skin?");
	if (!defenderChosen) {
		var index = $(this).attr("data-index");
		defender.push(enemies[index]);

		// Populate defender
		populateDefender();
		//Splice Enemies array
		enemies.splice(index,1);

		//Repopulate defending army 
		populateDefendingArmy();

		defenderChosen = true;
	}
});

$(document).on("click", "#thompson-defender", function () {
	console.log("Agent Thompson!");
	if (!defenderChosen) {
		var index = $(this).attr("data-index");
		defender.push(enemies[index]);

		// Populate defender
		populateDefender();
		//Splice Enemies array
		enemies.splice(index,1);

		//Repopulate defending army 
		populateDefendingArmy();

		defenderChosen = true;
	}
});

$(document).on("click", "#smith-defender", function () {
	console.log("Mr. Anderson...");
	if (!defenderChosen) {
		var index = $(this).attr("data-index");
		defender.push(enemies[index]);

		// Populate defender
		populateDefender();
		//Splice Enemies array
		enemies.splice(index,1);

		//Repopulate defending army 
		populateDefendingArmy();

		defenderChosen = true;
	}
});


$(document).on("click", "#smith-defender", function () {
	console.log("Mr. Anderson...");
});

/******************************************************************/
//   Start of functions
/******************************************************************/

function initializeGame() {
	/******************************************************************/
	//   Initialization/Reset code
	/******************************************************************/
	attacker = [];
	enemies = [];
	defender = [];

	playerChosen = false;
	defenderChosen = false;
	winOrLoss = false;
	win = false;
	Loss = false;
	goodOrEvil = true;


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
	for (var i = 0; i < enemies.length; i++) {
		enemies[i].playerIndex = i;
	}
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

