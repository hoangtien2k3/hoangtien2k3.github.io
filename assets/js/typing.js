let part = 0;
let partIndex = 0;
const content = [$('meta[name=author]').prop('content'), "@" + $('meta[name=github]').prop('content')];
const typingObj = document.querySelector("#typing");
let interval = setInterval(Typing, 100);

function Typing() {
	const text = content[part].substring(0, partIndex + 1);
	typingObj.innerHTML = text;
	partIndex++;

	if(text === content[part]) {
		clearInterval(interval);
		setTimeout(function() {
			interval = setInterval(Delete, 50);
		}, 1000);
	}
}

function Delete() {
	const text = content[part].substring(0, partIndex - 1);
	typingObj.innerHTML = text;
	partIndex--;

	if (text === '') {
		clearInterval(interval);

		if(part === (content.length - 1))
			part = 0;
		else
			part++;
		
		partIndex = 0;

		setTimeout(function() {
			interval = setInterval(Typing, 100);
		}, 200);
	}
}
