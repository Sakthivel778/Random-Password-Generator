let caps = document.getElementById('cap')
let small = document.getElementById('small')
let num = document.getElementById('num')
let sym = document.getElementById('sym')
let display = document.getElementById('displayPassword')

let passwordLength = 10 ;
let includeUppercase = false
let includeLowercase = false
let includeNumbers = false
let includesymbols = false
let password = ""

function passwordGenerator(lengthS,lowercase,uppercase,numbers,symbols){
    const capitalLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const smallLetter = 'abcdefghijklmnopqrstuvwxyz'
    const number ='1234567890'
    const symbol = '!@#$%^&*()_+/~'

    let getPass = ''
    password = ""

    getPass += includeLowercase ? smallLetter : ''
    getPass += includeUppercase ? capitalLetter : ''
    getPass += includeNumbers ? number : ''
    getPass += includesymbols ? symbol : ''

    for(let i = 0 ; i < lengthS; i++){
        const randomPass = Math.floor(Math.random() * getPass.length)
        password += getPass[randomPass]
    }

    return password; 

}

caps.addEventListener('change',()=>{
    includeUppercase = caps.checked
})
small.addEventListener('change',()=>{
    includeLowercase = small.checked
})
num.addEventListener('change',()=>{
    includeNumbers = num.checked
})
sym.addEventListener('change',()=>{
    includesymbols = sym.checked
})


function generatepass(){
    let genPassword = passwordGenerator(passwordLength,
                                    includeLowercase,
                                    includeUppercase,
                                    includeNumbers,
                                    includesymbols)

    display.textContent = `Your Password : ${password}`
}
