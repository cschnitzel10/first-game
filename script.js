

// document.querySelector("body").style.backgroundImage = "url('images/background.jpg')";
// document.querySelector("body").style.backgroundSize = "cover";


const pigeon = document.querySelector("#pigeon");

let counterIsRunning = false;

pigeon.addEventListener("click", () => {
    increaseScore();
    movePigeon();
   if (!counterIsRunning) {
        decreaseCounter() }
        // addScoreSpan();
});



const decreaseCounter = () => {
counterIsRunning = true;
    let counter = 10;
   let interval = setInterval(() => { 
        document.querySelector("#timeCounter").innerHTML = counter;
        counter -- ;
        
    if (counter === -1) { 
        document.location.reload();
        alert("GAME OVER")
        clearInterval (interval);
        }
        
    }, 1000)    
};

// make setInterval stopp and display message


const increaseScore = () => {

    const score = document.querySelector("#score-counter").innerHTML;
    const scoreHTML = document.querySelector("#score-counter");
    let count = Number(score);
    scoreHTML.innerHTML = count + 1;
};



const getRandomNum = (num) => {
    return Math.floor(Math.random() * Math.floor(num));
};

// const calculatePigeonPosition = (num) => {
//     let widthContainer = document.querySelector('#pigeonContainer').clientWidth;
//     let randomWidthContainer = getRandomNum(widthContainer);
//     if (randomWidthContainer < 50) {
//         randomWidthContainer + 50;    
//     }
// if (condition) {
    
// }
        
//     }
// }

const movePigeon = () => {
    const width = document.querySelector('#pigeonContainer').clientWidth;
    const height = document.querySelector('#pigeonContainer').clientHeight ;
    console.log(pigeon.style.top);
    pigeon.style.top = getRandomNum(height) + "px" ;
    pigeon.style.left = getRandomNum(width) + "px" ;
    console.log();
    console.log(height);
};

// solve width & height. Maybe just put background in div and use css.
// I added style.right to it but it didn't do anything

// const addScoreSpan = (score, this) => {
//     const newSpan = document.createElement('span');
//     if(score === 5) {
//         newSpan.textContent = 'Yupiii!';   
//     }
//     else if (score === 10)
//  {
//      newSpan.textContent  = 'You are killing it';
//  }
// target.appendChild(newSpan)
// }