const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  const decades = [];
  const exprLength = expr.length;

  for (let i = 0; i < exprLength; i += 10) {
    const decade = expr.slice(i, i + 10);
    decades.push(decade);
  }

  const decodedLetters = decades.map((letter) => {
    const encodedLetter = letter
      .match(/10|11|\*{10}/g)
      .map((item) => {
        if (item.includes('10')) {
          return item.replace(/10/g, '.');
        } else if (item.includes('11')) {
          return item.replace(/11/g, '-');
        } else if (item.includes('**********')) {
          return item.replace(/\*{10}/g, ' ');
        }
      })
      .join('');

      let correspondingLetter;

      if (MORSE_TABLE[encodedLetter]) {
        correspondingLetter = MORSE_TABLE[encodedLetter];
      } else {
        correspondingLetter = ' ';
      }

      return correspondingLetter;
    })

  const output = decodedLetters.join('');

  return output;
}

module.exports = {
    decode
}