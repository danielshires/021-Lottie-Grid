import './style.css'
import lottie from 'lottie-web';
import "@lottiefiles/lottie-player";
import lottieOne from '/lotties/01/dotty-lottie-01.json?url'
import lottieTwo from '/lotties/02/dotty-lottie-02.json?url'
import lottieThree from '/lotties/03/dotty-lottie-03.json?url'
import lottieFour from '/lotties/04/dottie-lottie-04.json?url'
import lottieSeven from '/lotties/07/dottie-lottie-07.json?url'


const containerGrid = document.querySelector('.lottie-grid')
const header = document.querySelector('header')

const cursor = document.createElement('div')

cursor.className = "cursor"
// document.body.appendChild(cursor)

document.body.insertBefore(cursor, header);


const createDivs = ((num) => {
    for (let i = 1; i < num; i++) {
        let gridItem = document.createElement('div')
        gridItem.className = `_${i}`
        containerGrid.append(gridItem)
    }
})

createDivs(32)


// Lotties
function setupLottieAnimation(className, path) {
    const lottieElement = document.querySelector('.' + className);

    const lottieAnimation = lottie.loadAnimation({
        container: lottieElement,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: path,
    });

    lottieElement.addEventListener('click', function () {
        lottieAnimation.play();
    });
}

// Usage
setupLottieAnimation('_1', lottieOne);
setupLottieAnimation('_2', lottieTwo);
setupLottieAnimation('_3', lottieThree);
setupLottieAnimation('_4', lottieFour);
setupLottieAnimation('_5', lottieSeven);


//   Cursor

const moveCursor = (e) => {

    const mouseY = e.clientY;
    const mouseX = e.clientX;
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

window.addEventListener('mousemove', moveCursor)
window.addEventListener("scroll", moveCursor);
