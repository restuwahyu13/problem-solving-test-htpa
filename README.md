# Problem Solving Test

## Balance Bracket

- ### Code

  ```js
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
	console.log(balanceBracket(s)) // output -> YES
  ```

- ### Penjelasan

  Disini kita memilki sebuah `balanceBracket` dengan input `s`, dikarenakan kita ingin menemukan setiap element didalam string tersebut, kemudian kita akan melakukang looping sebanyak jumlah karakter input tersebut, ketika kita menggunakan looping untuk mencocokan sebuah string input berarti kompleksitas waktu nya itu `O(n)` yang berarti seiring bertambahnya jumlah string waktu eksekusi juga akan ikut meningkat, dalam hal ini masih terbilang aman dikarenakan kompleksitas waktu masih terbilah efisien karena `O(n)` bukan `O(n^2)`, jadi bisa di simpulkan untuk `balanceBracket` kompleksitas waktu dari kodingan diatas adalah `O(n)`
