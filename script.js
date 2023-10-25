const textareaEl = document.querySelector('.textarea');
const charactersNumberEl = document.querySelector('.stat__number--characters');
const twitterNumberEl = document.querySelector('.stat__number--twitter');
const facebookNumberEl = document.querySelector('.stat__number--facebook');
const wordsNumberEl = document.querySelector('.stat__number--words');
const daysEl = document.querySelector('.day');

const inputHandler = () => {
	// input validation against script tag
	if (textareaEl.value.includes('<script>')) {
		alert("You can't use <script> in your text.");
		textareaEl.value = textareaEl.value.replace('<script>', '');
	}

	// determine word count
	let numberOfWords = textareaEl.value.trimEnd().split(' ').length;
	if (textareaEl.value.length === 0) {
		numberOfWords = 0;
	}
	const numberOfCharacters = textareaEl.value.length;
	const twitterCharactersLeft = 4000 - numberOfCharacters;
	const facebookCharactersLeft = 63206 - numberOfCharacters;

	// add warning if limit is exceeded
	if (twitterCharactersLeft < 0) {
		twitterNumberEl.classList.add('stat__number--limit');
	} else {
		twitterNumberEl.classList.remove('stat__number--limit');
	}

	if (facebookCharactersLeft < 0) {
		facebookNumberEl.classList.add('stat__number--limit');
	} else {
		facebookNumberEl.classList.remove('stat__number--limit');
	}

	wordsNumberEl.textContent = numberOfWords;
	charactersNumberEl.textContent = numberOfCharacters;
	twitterNumberEl.textContent = twitterCharactersLeft;
	facebookNumberEl.textContent = facebookCharactersLeft;
};

const checkDateLimit = () => {
	const checked = new Date('October 12, 2023 03:24:00');
	const current = new Date();
	const daysAgo = Math.abs(checked.getDate() - current.getDate());

	daysEl.textContent = daysAgo;
};

checkDateLimit();

textareaEl.addEventListener('input', inputHandler);
