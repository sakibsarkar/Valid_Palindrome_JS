function isPalindrome(string) {
    const clearString = string.replace(/[^a-zA-Z0-9]/g, '')

    const string_lowerCase = clearString.toLowerCase()

    const string_reverse = string_lowerCase.split('').reverse().join('');

    if (clearString === string_reverse) return true

    else return false
}
