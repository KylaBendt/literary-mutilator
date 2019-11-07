window.onload = function () {
	// initPage();
}


function onMouseEnterP1() {
	let paragraph = document.getElementById("p1");
	paragraph.style.color = 'blue';
}

function onMouseLeaveP1() {
	let paragraph = document.getElementById("p1");
	paragraph.style.color = 'black';
}

function onMouseEnterP2() {
	let paragraph = document.getElementById("p2");
	paragraph.style.color = 'green';
}

function onMouseLeaveP2() {
	let paragraph = document.getElementById("p2");
	paragraph.style.color = 'black';
}

function onMouseEnterP3() {
	let paragraph = document.getElementById("p3");
	paragraph.style.color = 'red';
}

function onMouseLeaveP3() {
	let paragraph = document.getElementById("p3");
	paragraph.style.color = 'black';
}

function selectH1() {
	let header = document.getElementById("h1");
	console.log("Here I am");
	header.style.fontFamily = 'cursive';
}