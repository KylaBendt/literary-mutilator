window.onload = function () {
	initRegex();
}

function initRegex() {
	let p3 = document.getElementById("p3");
	p3.addEventListener("click", (event) => {
		handleP3(event, p3);

	})
}

function handleP3(event, paragraphRef) {
	if (event.preventDefault) {
		event.preventDefault();
	}
	let text = paragraphRef.textContent;
	//3 letter words that have white space on either side and are not preceded by another 3 letter word
	let expression = /\s\w\w\w\s/gi;
	//replace w/ cat
	newText = text.replace(expression, ' cat ');
	paragraphRef.textContent = newText;
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
	header.style.fontFamily = 'cursive';
}

function onClickP1() {
	let p1 = document.getElementById("p1");
	//Rot13 cipher
	let cipher = {' ':' ', 'A':'N', 'B':'O', 'C':'P', 'D':'Q', 'E':'R', 'F':'S', 'G':'T', 'H':'U', 'I':'V', 'J':'W', 'K':'X', 'L':'Y', 'M':'Z', 'N':'A', 'O':'B', 'P':'C', 'Q':'D', 'R':'E', 'S':'F', 'T':'G', 'U':'H', 'V':'I', 'W':'J', 'X':'K', 'Y':'L', 'Z':'M', 'a':'n', 'b':'o', 'c':'p', 'd':'q', 'e':'r', 'f':'s', 'g':'t', 'h':'u', 'i':'v', 'j':'w', 'k':'x', 'l':'y', 'm':'z', 'n':'a', 'o':'b', 'p':'c', 'q':'d', 'r':'e', 's':'f', 't':'g', 'u':'h', 'v':'i', 'w':'j', 'x':'k', 'y':'l', 'z':'m'};
	//put text into array since strings are immutable
	let textArray = p1.textContent.split('');
	for (let i =0; i < textArray.length; ++i) {
		//replace each element with it's corresponding cipher value
		textArray[i] = cipher[textArray[i]];
	}
	//make the array back into a string
	let paragraph = textArray.join('');
	p1.textContent = paragraph;
}
