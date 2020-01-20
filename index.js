const fs = require('fs')
const words = fs.readFileSync('espanol.txt').toString().split('\n')

function findByLengthHintsStartWith(length, hints, startWith){
    let filter = words.filter(word => word.length===length)
    if(startWith) filter = filter.filter(word => word.startsWith(startWith))
    filter.forEach(word => {
        let wordChars = wordToCharsStruct(word)
        let hintsChars = wordToCharsStruct(hints)

        if(validateStructs(wordChars, hintsChars)) console.log(word)
    })
}

function validateStructs(wordChars, hintsChars){
    for (const char in wordChars) {
        if(hintsChars[char]){
            if(hintsChars[char] < wordChars[char]) return false
        } else {
            return false
        }
    }
    return true
}

function wordToCharsStruct(word) {
    let wordChars = {}
    word.split('').forEach(char => wordChars[char]?wordChars[char]++:(wordChars[char]=1))
    return wordChars
}

if(process.argv.length === 4) findByLengthHintsStartWith(parseInt(process.argv[2]), process.argv[3])
if(process.argv.length === 5) findByLengthHintsStartWith(parseInt(process.argv[2]), process.argv[3], process.argv[4])