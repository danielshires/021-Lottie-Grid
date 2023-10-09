import './style.css'
import lottie from 'lottie-web';
import "@lottiefiles/lottie-player";

const lottiePath01 = '/lotties/01/dotty-lottie-01.json'
const lottiePath02 = '/lotties/02/dotty-lottie-02.json'

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


let lottie_1 = document.querySelector("._1");
let lottie_2 = document.querySelector("._2");

const lottieAnimation_1 = lottie.loadAnimation({
    container: lottie_1,
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: lottiePath01,
});
const lottieAnimation_2 = lottie.loadAnimation({
    container: lottie_2,
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: lottiePath02,
});

lottie_1.addEventListener('click', function () {
    lottieAnimation_1.play()
});

lottie_2.addEventListener('click', function () {
    lottieAnimation_2.play()
});



//   Cursor


const moveCursor = (e) => {
    const mouseY = e.pageY;
    const mouseX = e.pageX;
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

window.addEventListener('mousemove', moveCursor)
window.addEventListener("scroll", moveCursor);
