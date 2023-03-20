const textarea=document.querySelector("textarea")
const voiceList=document.querySelector('select')
const speechBtn=document.querySelector('button')

let synth=speechSynthesis,isSpeaking=true;

voices()
function voices(){
    for(let voice of synth.getVoices()){
        let selected=voice .name==='Google US English' ? 'selected':" "
        let option=`<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`
        voiceList.insertAdjacentHTML('beforeend',option)
    }
}

synth.addEventListener('voiceschanged',voices)

function textToSpeech(text){
    let uttterance=new SpeechSynthesisUtterance(text) 
    for(let voice of synth.getVoices()){
        if(voice.name===voiceList.value){
            uttterance.voice=voice
        }
    }
    synth.speak(uttterance)
}

speechBtn.addEventListener('click',e=>{
    e.preventDefault()

    if(textarea.value==="") return 
    if(!synth.speaking){
        textToSpeech(textarea.value)

    }
    
})