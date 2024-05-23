function weightedString(s, queries) {
	const weight = {}
	const hashmapWeight = {}
	let currentChar = ''
	let currentWeight = 0

	for (let i = 0; i < 26; i++) {
		hashmapWeight[String.fromCharCode(i + 97)] = i + 1
	}

	for (const char of s) {
		if (char === currentChar) {
			currentWeight += hashmapWeight[char]
		} else {
			currentChar = char
			currentWeight = hashmapWeight[char]
		}

		weight[currentWeight] = true
	}

	return queries.map((querie) => (weight[querie] ? 'YES' : 'NO'))
}

const s = 'abbcccdee'
const queries = [1, 3, 9, 8]
console.log(weightedString(s, queries))
