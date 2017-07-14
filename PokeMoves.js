"use strict";

let moveDamages = {};

function getTypes() {
	let typeReqURL = "http://pokeapi.co/api/v2/type/";
	let typeReq = new XMLHttpRequest();
	typeReq.open("GET", typeReqURL);
	typeReq.responseType = "json";
	typeReq.send();
	
	// List of all the types
	typeReq.onload = function() {
		let types = typeReq.response;
		for(let i = 0; i < types.results.length; i++) {
			let typeURL = types.results[i].url;
			moveDamages[types.results[i].name] = {};
			let specificReq = new XMLHttpRequest();
			specificReq.open("GET", typeURL.replace(/\\\//g, "/"));
			specificReq.responseType = "json";
			specificReq.send();
			
			//List of the attributes of a specific type
			specificReq.onload = function() {
				
				let damageRelations = specificReq.response.damage_relations;
				
				console.log(types.results[i].name);
				for(let j = 0; j < damageRelations.half_damage_to.length; j++) {
					moveDamages[types.results[i].name][damageRelations.half_damage_to[j].name] = "0.5";
				}
				for(let j = 0; j < damageRelations.no_damage_to.length; j++) {
					moveDamages[types.results[i].name][damageRelations.no_damage_to[j].name] = "0.0";
				}
				for(let j = 0; j < damageRelations.double_damage_to.length; j++) {
					moveDamages[types.results[i].name][damageRelations.double_damage_to[j].name] = "2.0";
				}
				document.getElementById("moveType").innerHTML += `<option value="${types.results[i].name}">${types.results[i].name}</option>`;
				document.getElementById("pokeType").innerHTML += `<option value="${types.results[i].name}">${types.results[i].name}</option>`;
			};
		}
	}
}

function calcDamageMult() {
	let moveType = document.getElementById("moveType").value;
	let pokeType = document.getElementById("pokeType").value;
	let damageMult = moveDamages[moveType][pokeType];
	if(moveDamages[moveType][pokeType]) {
		document.getElementById("resultsLabel").innerHTML = " does " + damageMult + "x damage";
	}
	else {
		document.getElementById("resultsLabel").innerHTML = " does 1x damage";
	}
}

getTypes();