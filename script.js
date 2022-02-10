const container = document.querySelector(".container")
restartButton.addEventListener('click', () => location.reload());    

function addRow(x) {
    for(let i = 1; i <= x; i++) {
    const row = document.createElement("div");
    row.classList.add("rowStyle");
    container.appendChild(row)
  }
} 


function addDiv(y) {
    let rowCount = document.querySelectorAll(".rowStyle")
    for(let i = 1; i <= y; i++) {
        const divInRow = document.createElement("div");
        divInRow.classList.add("squareStyle");
        let row = rowCount[i - 1]
        for(let j = 1; j <= y; j++){
            const divInRow2 = document.createElement("div");
            divInRow2.classList.add("squareStyle");
            row.appendChild(divInRow2)
        }
        
    }
}

function hover() {
    let square = document.querySelectorAll(".squareStyle");
    square.forEach((square)  => {
        square.addEventListener('mousedown', (event) => {
            event.target.style.background = "black";
        })
    })
}

function createSquares() {
    let n = parseInt(prompt("Tell me a number: "))
    if(n > 64) {
        alert('This number exceeds the limit!')
    } else {
        addRow(n)
        addDiv(n);
        hover();
    }
}

    
