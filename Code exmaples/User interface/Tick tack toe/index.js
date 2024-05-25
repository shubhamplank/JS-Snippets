class Model {
  constructor() {
    this.board = Array(9).fill('')
    this.currentPlayer = 'X'
    this.gameOver = false
  }

  checkWin() {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ]

    return winConditions.some((combination) => {
      const [a, b, c] = combination
      return (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      )
    })
  }

  checkDraw() {
    return this.board.every((cell) => cell !== '')
  }
}

const model = new Model()

// Function to render the game board
function renderBoard() {
  const boardElement = document.getElementById('board')
  boardElement.innerHTML = ''
  model.board.forEach((cell, index) => {
    const cellElement = document.createElement('div')
    cellElement.classList.add('cell')
    cellElement.textContent = cell
    cellElement.addEventListener('click', () => handleCellClick(index))
    boardElement.appendChild(cellElement)
  })
}

// Function to handle cell clicks
function handleCellClick(index) {
  if (model.board[index] !== '' || model.gameOver) return

  model.board[index] = model.currentPlayer
  renderBoard()

  if (model.checkWin()) {
    model.gameOver = true
    setTimeout(() => {
      alert(`${model.currentPlayer} wins!`)
    }, 100)
    return
  }

  if (model.checkDraw()) {
    model.gameOver = true
    setTimeout(() => {
      alert("It's a draw!")
    }, 100)
    return
  }

  model.currentPlayer = model.currentPlayer === 'X' ? 'O' : 'X'
}

// Function to handle restart button click
document.getElementById('restartBtn').addEventListener('click', () => {
  model.board = Array(9).fill('')
  model.currentPlayer = 'X'
  model.gameOver = false
  renderBoard()
})

// Initial rendering of the board
renderBoard()
