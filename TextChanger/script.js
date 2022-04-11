const upBtn = document.getElementById("upper-case");
const lwBtn = document.getElementById("lower-case");
const ppBtn = document.getElementById("proper-case");
const stBtn = document.getElementById("sentence-case");
const saveBtn = document.getElementById("save-text-file");

let text = document.getElementById("text");

upBtn.addEventListener("click", function () {
	text.value = text.value.toUpperCase();
});

lwBtn.addEventListener("click", function () {
	text.value = text.value.toLowerCase();
});
ppBtn.addEventListener("click", function () {
	let str;
	str = text.value.toLowerCase().split(" ");
	for (let i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	text.value = str.join(' ');
});

stBtn.addEventListener("click", function () {
	let str;
	let j = 0;
	str = text.value.toLowerCase().split(". ");

	for (let i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	text.value = str.join('. '); //&
});

saveBtn.addEventListener("click", function () {
	let element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text.value));
	element.setAttribute('download', "text");
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
});