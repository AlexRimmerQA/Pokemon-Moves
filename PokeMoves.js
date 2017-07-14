"use strict";

//BREAK IN CASE OF EMERGENCY
/*

/*
let moveDamages = {
	"normal":	{"normal":1.0,"fire":1.0,"water":1.0,"electric":1.0,"grass":1.0,"ice":1.0,"fighting":1.0,"poison":1.0,"ground":1.0,"flying":1.0,"psychic":1.0,"bug":1.0,"rock":0.5,"ghost":0.0,"dragon":1.0,"dark":1.0,"steel":0.5,"fairy":1.0},
	"fire":		{"normal":1.0,"fire":1.0,"water":1.0,"electric":1.0,"grass":1.0,"ice":1.0,"fighting":1.0,"poison":1.0,"ground":1.0,"flying":1.0,"psychic":1.0,"bug":1.0,"rock":0.5,"ghost":0.0,"dragon":1.0,"dark":1.0,"steel":0.5,"fairy":1.0},
	"water":	{"normal":1.0,"fire":1.0,"water":1.0,"electric":1.0,"grass":1.0,"ice":1.0,"fighting":1.0,"poison":1.0,"ground":1.0,"flying":1.0,"psychic":1.0,"bug":1.0,"rock":0.5,"ghost":0.0,"dragon":1.0,"dark":1.0,"steel":0.5,"fairy":1.0},
	"electric":	{"normal":1.0,"fire":1.0,"water":1.0,"electric":1.0,"grass":1.0,"ice":1.0,"fighting":1.0,"poison":1.0,"ground":1.0,"flying":1.0,"psychic":1.0,"bug":1.0,"rock":0.5,"ghost":0.0,"dragon":1.0,"dark":1.0,"steel":0.5,"fairy":1.0},
	"grass":	{"normal":1.0,"fire":1.0,"water":1.0,"electric":1.0,"grass":1.0,"ice":1.0,"fighting":1.0,"poison":1.0,"ground":1.0,"flying":1.0,"psychic":1.0,"bug":1.0,"rock":0.5,"ghost":0.0,"dragon":1.0,"dark":1.0,"steel":0.5,"fairy":1.0},
	"ice":		{"normal":1.0,"fire":1.0,"water":1.0,"electric":1.0,"grass":1.0,"ice":1.0,"fighting":1.0,"poison":1.0,"ground":1.0,"flying":1.0,"psychic":1.0,"bug":1.0,"rock":0.5,"ghost":0.0,"dragon":1.0,"dark":1.0,"steel":0.5,"fairy":1.0},
	"fighting":	{"normal":1.0,"fire":1.0,"water":1.0,"electric":1.0,"grass":1.0,"ice":1.0,"fighting":1.0,"poison":1.0,"ground":1.0,"flying":1.0,"psychic":1.0,"bug":1.0,"rock":0.5,"ghost":0.0,"dragon":1.0,"dark":1.0,"steel":0.5,"fairy":1.0},
	"poison"	{"normal":1.0,"fire":1.0,"water":1.0,"electric":1.0,"grass":1.0,"ice":1.0,"fighting":1.0,"poison":1.0,"ground":1.0,"flying":1.0,"psychic":1.0,"bug":1.0,"rock":0.5,"ghost":0.0,"dragon":1.0,"dark":1.0,"steel":0.5,"fairy":1.0},
	"ground":	{"normal":1.0,"fire":1.0,"water":1.0,"electric":1.0,"grass":1.0,"ice":1.0,"fighting":1.0,"poison":1.0,"ground":1.0,"flying":1.0,"psychic":1.0,"bug":1.0,"rock":0.5,"ghost":0.0,"dragon":1.0,"dark":1.0,"steel":0.5,"fairy":1.0},
	"flying":	{"normal":1.0,"fire":1.0,"water":1.0,"electric":1.0,"grass":1.0,"ice":1.0,"fighting":1.0,"poison":1.0,"ground":1.0,"flying":1.0,"psychic":1.0,"bug":1.0,"rock":0.5,"ghost":0.0,"dragon":1.0,"dark":1.0,"steel":0.5,"fairy":1.0},
	"psychic":	{"normal":1.0,"fire":1.0,"water":1.0,"electric":1.0,"grass":1.0,"ice":1.0,"fighting":1.0,"poison":1.0,"ground":1.0,"flying":1.0,"psychic":1.0,"bug":1.0,"rock":0.5,"ghost":0.0,"dragon":1.0,"dark":1.0,"steel":0.5,"fairy":1.0},
	"bug":		{"normal":1.0,"fire":1.0,"water":1.0,"electric":1.0,"grass":1.0,"ice":1.0,"fighting":1.0,"poison":1.0,"ground":1.0,"flying":1.0,"psychic":1.0,"bug":1.0,"rock":0.5,"ghost":0.0,"dragon":1.0,"dark":1.0,"steel":0.5,"fairy":1.0},
	"rock":		{"normal":1.0,"fire":1.0,"water":1.0,"electric":1.0,"grass":1.0,"ice":1.0,"fighting":1.0,"poison":1.0,"ground":1.0,"flying":1.0,"psychic":1.0,"bug":1.0,"rock":0.5,"ghost":0.0,"dragon":1.0,"dark":1.0,"steel":0.5,"fairy":1.0},
	"ghost":	{"normal":1.0,"fire":1.0,"water":1.0,"electric":1.0,"grass":1.0,"ice":1.0,"fighting":1.0,"poison":1.0,"ground":1.0,"flying":1.0,"psychic":1.0,"bug":1.0,"rock":0.5,"ghost":0.0,"dragon":1.0,"dark":1.0,"steel":0.5,"fairy":1.0},
	"dragon":	{"normal":1.0,"fire":1.0,"water":1.0,"electric":1.0,"grass":1.0,"ice":1.0,"fighting":1.0,"poison":1.0,"ground":1.0,"flying":1.0,"psychic":1.0,"bug":1.0,"rock":0.5,"ghost":0.0,"dragon":1.0,"dark":1.0,"steel":0.5,"fairy":1.0},
	"dark":		{"normal":1.0,"fire":1.0,"water":1.0,"electric":1.0,"grass":1.0,"ice":1.0,"fighting":1.0,"poison":1.0,"ground":1.0,"flying":1.0,"psychic":1.0,"bug":1.0,"rock":0.5,"ghost":0.0,"dragon":1.0,"dark":1.0,"steel":0.5,"fairy":1.0},
	"steel":	{"normal":1.0,"fire":1.0,"water":1.0,"electric":1.0,"grass":1.0,"ice":1.0,"fighting":1.0,"poison":1.0,"ground":1.0,"flying":1.0,"psychic":1.0,"bug":1.0,"rock":0.5,"ghost":0.0,"dragon":1.0,"dark":1.0,"steel":0.5,"fairy":1.0},
	"fairy":	{"normal":1.0,"fire":1.0,"water":1.0,"electric":1.0,"grass":1.0,"ice":1.0,"fighting":1.0,"poison":1.0,"ground":1.0,"flying":1.0,"psychic":1.0,"bug":1.0,"rock":0.5,"ghost":0.0,"dragon":1.0,"dark":1.0,"steel":0.5,"fairy":1.0}
}
*/

//Types: http://pokeapi.co/api/v2/type/
//Specific Type with damage multipliers: http://pokeapi.co/api/v2/type/1/

//https://stackoverflow.com/questions/22539815/arent-promises-just-callbacks!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let moveDamages = {};
getTypes();


function getTypes() {
	let typeReqURL = "http://pokeapi.co/api/v2/type/";
	let typeReq = new XMLHttpRequest();
	typeReq.open('GET', typeReqURL);
	typeReq.responseType = 'json';
	typeReq.send();
	
	// List of all the types
	typeReq.onload = function() {
		let types = typeReq.response;
		for(let i = 0; i < types.results.length; i++) {
			let typeURL = types.results[i].url;
			moveDamages[types.results[i].name] = {};
			let specificReq = new XMLHttpRequest();
			specificReq.open('GET', typeURL.replace(/\\\//g, "/"));
			specificReq.responseType = 'json';
			specificReq.send();
			
			//List of the attributes of a specific type
			specificReq.onload = function() {
				let damageRelations = specificReq.response.damage_relations;
				for(let j = 0; j < damageRelations.half_damage_to.length; j++) {
					moveDamages[types.results[i].name][damageRelations.half_damage_to[j].name] = 0.5;
				}
				for(let j = 0; j < damageRelations.no_damage_to.length; j++) {
					moveDamages[types.results[i].name][damageRelations.no_damage_to[j].name] = 0.0;
				}
				for(let j = 0; i < damageRelations.double_damage_to.length; j++) {
					moveDamages[types.results[i].name][damageRelations.double_damage_to[j].name] = 2.0;
				}
				document.getElementById("moveType").innerHTML += `<option value="${types.results[i].name}">${types.results[i].name}</option>`;
				document.getElementById("pokeType").innerHTML += `<option value="${types.results[i].name}">${types.results[i].name}</option>`;
			}
		}
	}
}

function calcDamageMult() {
	let moveType = document.getElementById("moveType");
	let pokeType = document.getElementById("pokeType");
	let damageMult = moveDamages[moveType][pokeType];
	document.getElementById("resultsLabel").innerHTML = " does " + damageMult + "x damage";
}