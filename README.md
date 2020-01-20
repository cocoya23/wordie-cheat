# Word guesser for the mobile game "Wordie"


## How to use it

`node index.js [numberOfLetters] [lettersHints] [startsWith]`

[numberOfLetters] Required: the number of letters of the word to guess

[lettersHints] Required: the letters shown as hints

[startsWith] Optional: any hint of the beginning of the word

### Examples

`node index.js 9 rqonkcijualxdb`

`node index.js 9 rqonkcijualxdb b`

`node index.js 9 rqonkcijualxdb bin`


## Other languages
You can download other dictionaries from [here](http://www.gwicks.net/dictionaries.htm)

Load your the desire laguage word list and change the file name in the following line:

```javascript
const words = fs.readFileSync('wordListFile.txt').toString().split('\n')
```
