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

function onClickP1() {
	console.log("onclickp1");
	let p1 = document.getElementById("p1");
	let cipher = ['A':'N', 'B':'O', 'C':'P', 'D':'Q', 'E':'R', 'F':'S', 'G':'T', 'H':'U', 'I':'V', 'J':'W', 'K':'X', 'L':'Y', 'M':'Z', 'N':'A', 'O':'B', 'P':'C', 'Q':'D', 'R':'E', 'S':'F', 'T':'G', 'U':'H', 'V':'I', 'W':'J', 'X':'K', 'Y':'L', 'Z':'M', 'a':'n', 'b':'o', 'c':'p', 'd':'q', 'e':'r', 'f':'s', 'g':'t', 'h':'u', 'i':'v', 'j':'w', 'k':'x', 'l':'y', 'm':'z', 'n':'a', 'o':'b', 'p':'c', 'q':'d', 'r':'e', 's':'f', 't':'g', 'u':'h', 'v':'i', 'w':'j', 'x':'k', 'y':'l', 'z':'m'];
	//let textArray = paragraph.textContent.split('');
	let paragraph = p1.textContent;
	for (let i =0; i < paragraph.length; ++i) {
		let a = paragraph[i];
		paragraph[i] = cipher[a];
	}
	p1.textContent = paragraph;
}