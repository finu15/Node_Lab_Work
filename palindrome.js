function paliCheck(string) {

    const len = string.length;

    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            return 'Not a palindrome';
        }
    }
    return 'Palindrome';
}

const string = ("madam");

const value = paliCheck(string);

console.log(value);