// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    // 1
    // return str.split('').reverse().join('')

    // 2
    return str.split('').reduce((reversed, char) => char + reversed, '')

    // 3
    // let reversed = ''
    // for (char of str) {
    //     reversed = char + reversed
    // }

    // return reversed
}

module.exports = reverse;