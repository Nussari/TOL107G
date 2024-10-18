/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
	if (!isString(str)) {
		return [];
	}

	return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
	if (!isString(str)) {
		return null;
	}

	let long = '';
	for (let word of split(str)) {
		if (word.length > long.length) {
		long = word;
		}
	}

	return long;
}

function shortest(str) {
	if (!isString(str)) {
		return null;
	}

	let short = split(str)[0];
	for (let word of split(str)) {
		if (word.length < short.length) {
		short = word;
		}
	}

	return short;
}

function reverse(str) {
	if (!isString(str)) {
		return null;
	}

	return split(str).reverse().join(' '); // hehe
}

function palindrome(str) {
	if (str == ''){
		return false
	}
	const normalizedStr = str.replace(/\s+/g, '').toLowerCase(); // fann /\s+/g partinn á netinu, það á víst að vera besta leiðin til að eyða whitespace
	
	const reversedStr = normalizedStr.split('').reverse().join('');
	
	return normalizedStr === reversedStr;
}

function vowels(str) {
	if (!isString(str)) {
		return null;
	}

	const low = str.toLowerCase(); // VOWELS er bara með lága stafi
	let count = 0;

	for (let letter of low) {
		if (VOWELS.includes(letter)) {
		count++;
		}
	}

	return count;
}

function consonants(str) {
	if (!isString(str)) {
		return null;
	}

	const low = str.toLowerCase();
	let count = 0;

	for (let letter of low) {
		if (CONSONANTS.includes(letter)) {
		count++;
		}
	}

	return count;
}


//------------------------------------------------------------------------------
// Prufanir


console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

console.assert(longest(12) === null, 'longest skilar null ef inntak er ekki strengur')
console.assert(longest("stutt laaangt") === "laaangt", 'longest skilar lengsta orðinu')

console.assert(shortest(12) === null, 'shortest skilar null ef inntak er ekki strengur')
console.assert(shortest("stutt laaangt") === "stutt", 'shortest skilar styðsta orðinu')

console.assert(reverse(12) === null, 'reverse skilar null ef inntak er ekki strengur')
console.assert(reverse("tvö orð") === "orð tvö", 'reverse skilar orðum í öfugri röð')
console.assert(reverse("eitt") === "eitt", 'reverse lætur streng vera ef hann er bara eitt orð')

console.assert(palindrome("") === false, 'palindrome skilar false fyrir tóman streng')
console.assert(palindrome("nana anan") === true, 'palindrome skilar true ef strengur er samhverfur')
console.assert(palindrome("Anna") === true, 'palindrome er sama um stóra og litla stafi')

console.assert(vowels(12) === null, 'vowels skilar null ef inntak er ekki strengur')
console.assert(vowels("abáolsv") === 3, 'vowels telur íslenska sérhljóða')
console.assert(vowels("abÁOLsv") === 3, 'vowels telur stóra og litla stafi')

console.assert(consonants(12) === null, 'consonants skilar null ef inntak er ekki strengur')
console.assert(consonants("abáolsv") === 4, 'consonants telur íslenska samhljóða')
console.assert(consonants("abÁOLsv") === 4, 'consonants telur stóra og litla stafi')


//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
	while (true) {
		alert("Blelli, gefðu mér streng. Hann má innihalda bil, tölur, öfl.");
		const inp = prompt("Strengur: ");

		if (inp==null){
			break
		}
		
		alert("Lengsta orðið: " + longest(inp) + 
		"\nStyðsta orðið: " + shortest(inp) +
		"\nNúmer af sérhljóðum: " + vowels(inp) +
		"\nNúmer af samhljóðum: " + consonants(inp) +
		"\nEr hann samhverfur: " + (palindrome ? "Já" : "Nei") + 
		"\nStrengurinn í öfugri röð: " + reverse(inp)
		);

		const response = prompt("Viltu gera þetta aftur? (J/N)").toLowerCase();
		if (response !== 'j') {
			break
		}
	}
}
