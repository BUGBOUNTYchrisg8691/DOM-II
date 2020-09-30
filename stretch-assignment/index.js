// Adjust block stack
const blocks = document.querySelector(".blocks")

Array.from(blocks.children).forEach(el => {
    el.addEventListener("click", moveToTop)
})

function moveToTop(e) {
    blocks.prepend(e.target)
}

const blockRed = document.querySelector(".block--red")
blockRed.addEventListener("mousedown", movingBlock)
function movingBlock(e) {
    let count = 0
    const toRight = setInterval(function() {
        if (count === 100000000) {
            clearInterval()
        }
        count += 10
        return count
    }, 10)
    e.target.style.margin = `0 0 0 ${toRight}px`
}