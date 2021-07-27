function pangram(sentence) {

    let alphabets = 'abcdefghijklmnopqrstuvwxyz'
    let string = sentence.toLowerCase()
    for (let i = 0; i < alphabets.length; i++){
        if (string.indexOf(alphabets.charAt(i)) === -1){
            return console.log('FALSE')
        }
    }
return console.log('Pangram')
}

//pangram('The quick brown fox jumps over the lazy dog')
console.log(pangram('The quick brown fox jumps over the lazy dog'))
console.log(pangram('The quick brown fox jumps'))