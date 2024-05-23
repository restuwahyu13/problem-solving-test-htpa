function balanceBracket(s) {
	const data = []
	const brackets = s.split(' ')
	const hashmapBracket = {
		'}': '{',
		']': '[',
		')': '('
	}

	for (let bracket of brackets) {
		if (hashmapBracket[bracket] && hashmapBracket[bracket] === data[data.length - 1]) {
			data.length = data.length - 1
			continue
		} else {
			data.push(bracket)
		}
	}

	return !data.length ? 'YES' : 'NO'
}

const s = '{ ( ( [ ] ) [ ] ) [ ] }'
// const s = '{ [ ( ] ) }'
// const s = '{ [ ( ) ] }'
console.log(balanceBracket(s))
