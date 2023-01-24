var alphabet = "abcdefghijklmnopqrstuvwxyzæøå";
var newalpha = "";


//fandt hjælp på nettet
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
