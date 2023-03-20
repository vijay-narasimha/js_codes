const lengthSlider=document.querySelector('.pass-length input')
const options=document.querySelectorAll('.option input')
const copyIcon=document.querySelector('.input-box span')
const passwordInput=document.querySelector('.input-box input')
const passIndicator=document.querySelector('.pass-indicator')
const generateBtn=document.querySelector('.generate-btn')

const characters={
    lowercase:'abcdefghijklmnopqrstuvwxyz',
    uppercase:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers:'0123456789',
    symbols:'!@#$(){}',
}

const generatePassword=()=>{
    let staticpassword='';
    randompassword=''
    excludeDuplicate=false;
    passLength=lengthSlider.value;
    options.forEach(option=>{
        if(option.checked){
            if(option.id!=='exc-duplicate' && option.id!=='spaces'){
            staticpassword+=characters[option.id]
            }else if(option.id==='spaces'){
                staticpassword+=` ${staticpassword} `

            }
            else{
                excludeDuplicate=true;
            }

        }
    })

for(let i=0;i<passLength;i++){
    let randomChar=staticpassword[Math.floor(Math.random()*staticpassword.length)]
    if(excludeDuplicate){
         !randompassword.includes(randomChar) || randomChar==" " ? randompassword+=randomChar : i--
    }else{
        randompassword+=randomChar
    }
}
passwordInput.value=randompassword

}

const updatePassIndicator=()=>{
    passIndicator.id=lengthSlider.value<=8 ?"weak" : lengthSlider.value<=16?"medium":"strong"
}
const updateSlider=()=>{
    document.querySelector('.pass-length span').innerText=lengthSlider.value;
    generatePassword()
    updatePassIndicator()
}
updateSlider()

const copypassword=()=>{
    navigator.clipboard.writeText(passwordInput.value)
    copyIcon.innerText='check'
    copyIcon.style.color='#4285f4';
    setTimeout(()=>{
        copyIcon.innerText='copy_all';
        copyIcon.style.color='#707070'
    },1500)
}
copyIcon.addEventListener('click',copypassword)
lengthSlider.addEventListener('click',updateSlider)
generateBtn.addEventListener('click',generatePassword)