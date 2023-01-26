//del 1
var alphabet = "abcdefghijklmnopqrstuvwxyzæøå";
var newalpha = "";

function changeAlphabet(n){
    for (let i = 0; i < alphabet.length; i++){
        let letter = (i + n) % alphabet.length;
        newalpha += alphabet[letter];
    }
}

//kryptering
document.getElementById('runCrypt').addEventListener('click', () => {
    let output = document.getElementById('crypt')
    let word = document.getElementById('wordForCrypt').value
    let result = ""

    changeAlphabet(3)

    word.toLowerCase()

    for (let i = 0; i < word.length; i++) {
        let newLetter = alphabet.indexOf(word[i])
        result += newalpha[newLetter]
    }
    output.innerHTML = result
})

//dekrypter
document.getElementById('runDecrypt').addEventListener('click', () => {
    let word = document.getElementById('crypt').innerHTML
    let output = document.getElementById('decrypt')
    let result = "";

    for (let i = 0; i < word.length; i++) {
        let newLetter = newalpha.indexOf(word[i])
        result += alphabet[newLetter]
    }
    output.innerHTML = result
})

// del 2
document.getElementById('vigCrypt').addEventListener('click', () => {
    let word = document.getElementById('vigCryptWord').value
    let key = document.getElementById('vigCryptKey').value
    let result = document.getElementById('cryptResult')

    for (let i = 0; i < word.length; i++) {
        let newLetter =
    }

})

// del 3
/*
Dekrypter ordet: i u h n y h q v d q d o b v h

Dekrypteret ord: f r e k v e n s a n a l y s e
 */

// del 4
/*
Dekrypter og afslut sætningen:
MQT xv rx nhkobbbxewr pwk...
Key: kitten

Skift:      K:10  I:8  T:19  T:19  E:4  N:13

Chiffer:    M Q T  x v  r x  n h k o b b b x e w r  p w k...
Key:        K I T  T E  N K  I T T E N K I T T E N  K I T

Tekst:      CGA er en forkortelse for...
 */

