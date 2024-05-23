function maximumPalindrome(s, k, left = 0, right = s.length - 1) {
	if (left >= right) return s

	if (s[left] !== s[right]) {
		if (k <= 0) return -1
		const maxChar = Math.max(s[left], s[right]).toString()
		s = s.substring(0, left) + maxChar + s.substring(left + 1, right) + maxChar + s.substring(right + 1)
		k--
	}

	return maximumPalindrome(s, k, left + 1, right - 1)
}

const s = '3493'
const k = 1
console.log(maximumPalindrome(s, k))
