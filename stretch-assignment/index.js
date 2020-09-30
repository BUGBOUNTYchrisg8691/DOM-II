// Adjust block stack
const blocks = document.querySelector(".blocks")

Array.from(blocks.children).forEach(el => {
    el.addEventListener("click", moveToTop)
})

function moveToTop(e) {
    blocks.prepend(e.target)
}

const redBlock = document.querySelector(".block--red")
redBlock.addEventListener("mousedown mouseup", moveRight)

function moveRight(e) {
    while (e.type === "mousedown") {
        let count = 0
        const toRight = setInterval(function() {
            if (count === 100000000) {
            }
            count += 10
            return count
        }, 10)
        e.target.style.margin = `0 0 0 ${toRight}px`
    }
}


// const blockRed = document.querySelector(".block--red")
// blockRed.addEventListener("mousedown", movingBlock)
// blockRed.addEventListener("mouseup", stopMove)
// function movingBlock(e) {
//     if (e.type === "mousedown") {
//         e.preventDefault()
//         let count = 0
//         const toRight = setInterval(function() {
//             if (count === 100000000) {
//             }
//             count += 10
//             return count
//         }, 10)
//         e.target.style.margin = `0 0 0 ${toRight}px`
//     }
// }

// function stopMove(e) {
//     e.clearInterval()
// }