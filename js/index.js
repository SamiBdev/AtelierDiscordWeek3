const nextButton = document.querySelector('#next');
const backButton = document.querySelector('#back');
const firstPart = document.querySelector('#part1');
const secondPart = document.querySelector('#part2');
const thirdPart = document.querySelector('#part3');
const fourPart = document.querySelector('#part4');
const fivePart = document.querySelector('#part5');
const buttonBot = document.querySelector('#button-bot');
const formElm = document.querySelector('#form');
let pageCounter = 0;

nextButton.addEventListener('click', ()=>{
    addHidden();
    switch (pageCounter){
        case 0:
            secondPart.classList.remove('hidden');
            iconColor('add','icon2');
            break;
        case 1:
            thirdPart.classList.remove('hidden');
            iconColor('add','icon3');
            break;
        case 2:
            fourPart.classList.remove('hidden');
            nextButton.innerHTML="Envoyer";
            iconColor('add','icon4');
            break;
        case 3:
            formElm.classList.remove('form-ds');
            formElm.classList.add('h-full');
            fivePart.classList.remove('hidden');
            buttonBot.classList.add('hidden');
            document.getElementById('wampusthanks').classList.remove('hidden');
            document.getElementById('wampus').classList.add('hidden');
            iconColor('add','icon5');
            break;
    }
    pageCounter+=1;
    manageButton();
});

backButton.addEventListener('click', ()=>{
    addHidden();
    switch (pageCounter){
        case 1:
            firstPart.classList.remove('hidden');
            iconColor('remove','icon2');
            break;
        case 2:
            secondPart.classList.remove('hidden');
            iconColor('remove','icon3');
            break;
        case 3:
            thirdPart.classList.remove('hidden');
            iconColor('remove','icon4');
            break;
        case 4:
            fourPart.classList.remove('hidden');
            iconColor('remove','icon5');
            document.getElementById('wampusthanks').classList.add('hidden');
            document.getElementById('wampus').classList.remove('hidden');
            break;
    }
    pageCounter-=1;
    manageButton();
});

function addHidden(){
    formElm.classList.add('form-ds');
    formElm.classList.remove('h-full');
    nextButton.innerHTML="Suivant";
    buttonBot.classList.remove('hidden');
    firstPart.classList.add('hidden');
    secondPart.classList.add('hidden');
    thirdPart.classList.add('hidden');
    fourPart.classList.add('hidden');
    fivePart.classList.add('hidden');
}

function manageButton(){
    if (pageCounter>0){
        backButton.classList.remove('hidden');
    }else{
        backButton.classList.add('hidden');
    }
}

function iconColor(type,icon){
    if(type=="add"){
        document.getElementById(icon+'-li').classList.add('step-sb');
        document.getElementById(icon+'-li').classList.remove('step-ab');
        document.getElementById(icon+'-span').classList.add('step-span-sb');
        document.getElementById(icon+'-span').classList.remove('step-span-ab');
        document.getElementById(icon+'-white').classList.add('hidden');
        document.getElementById(icon+'-color').classList.remove('hidden');
    }else{
        document.getElementById(icon+'-white').classList.remove('hidden');
        document.getElementById(icon+'-color').classList.add('hidden');
        document.getElementById(icon+'-li').classList.add('step-ab');
        document.getElementById(icon+'-li').classList.remove('step-sb');
        document.getElementById(icon+'-span').classList.add('step-span-ab');
        document.getElementById(icon+'-span').classList.remove('step-span-sb');
    }
}