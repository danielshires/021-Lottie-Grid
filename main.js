import './style.css'
import lottie from 'lottie-web';
import "@lottiefiles/lottie-player";
import lottieOne from '/lotties/01/dotty-lottie-01.json?url'
import lottieTwo from '/lotties/02/dotty-lottie-02.json?url'
import lottieThree from '/lotties/03/dotty-lottie-03.json?url'


const containerGrid = document.querySelector('.lottie-grid')
const header = document.querySelector('.flex')

const cursor = document.createElement('div')

cursor.className = "cursor"
// document.body.appendChild(cursor)

document.body.insertBefore(cursor, header);


const createDivs = ((num) => {
    console.log("Create Divs running")
    for (let i = 1; i < num; i++) {
        let gridItem = document.createElement('div')
        gridItem.className = `_${i}`
        containerGrid.append(gridItem)
    }
})

createDivs(60)


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


//   Cursor

const moveCursor = (e) => {
    console.log(e.clientX)
    console.log(e.clientY)
    console.log(window)
    const mouseY = e.clientY;
    const mouseX = e.clientX;
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

window.addEventListener('mousemove', moveCursor)
window.addEventListener("scroll", moveCursor);
