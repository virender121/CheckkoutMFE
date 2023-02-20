// import chalk from "chalk"
module.exports = {
    minimumCharacters(charCount, value) {
        if (value.length < charCount) {
            return `You have not met the minimum characters requirement for a description, You still have ${(charCount - value.length)} characters that are required.`
        }
        return true;
    },
    firstLetterCaps(value) {
        if (!/^[A-Z]/.test(value)) {
            return `The component name must be capitalized!`
        }
        return true
    },
    upperaseandonlyunderscore(value) {
        if (!/^[a-z]+(?:_+[a-z]+)*$/.test(value)) {
            return 'The package name can only contain lower case letters and underscores';
        }

        return true;
    }
}