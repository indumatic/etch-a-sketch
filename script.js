
const frame = document.querySelector('.frame')
const n = 100

for (i = 0; i < n; i++ ) {

    let row = document.createElement('div')
    row.classList = "row"

    for(j = 0; j < n; j++) {

        let square = document.createElement('div')
        square.classList = "square"
        square.id = i * 4 + j
        square.addEventListener('mouseover', function(e) {
            e.target.classList.toggle("on")
            e.target.style.background = randomColor()
        })
        row.appendChild(square)
    }

    frame.appendChild(row)
}

const randomColor = function() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return '#' + r.toString(16) + g.toString(16) + b.toString(16)
}