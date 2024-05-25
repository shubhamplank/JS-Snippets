// Model Functions
function createModel() {
  return {
    board: Array(9).fill(''),
    currentPlayer: 'X',
    gameOver: false,
  }
}

function checkWin(board) {
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
    return board[a] && board[a] === board[b] && board[a] === board[c]
  })
}

function checkDraw(board) {
  return board.every((cell) => cell !== '')
}

// Controller Functions
function handleCellClick(index, model) {
  if (model.board[index] !== '' || model.gameOver) return

  const newBoard = [...model.board]
  newBoard[index] = model.currentPlayer

  const gameOver = checkWin(newBoard) || checkDraw(newBoard)

  const currentPlayer = model.currentPlayer === 'X' ? 'O' : 'X'

  return {
    ...model,
    board: newBoard,
    currentPlayer,
    gameOver,
  }
}

function restartGame() {
  return createModel()
}

// View Function
function renderBoard(board, handleCellClick) {
  const boardElement = document.getElementById('board')
  boardElement.innerHTML = ''
  board.forEach((cell, index) => {
    const cellElement = document.createElement('div')
    cellElement.classList.add('cell')
    cellElement.textContent = cell
    cellElement.addEventListener('click', () => {
      const updatedModel = handleCellClick(index, model)
      if (updatedModel) {
        renderBoard(updatedModel.board, handleCellClick)
      }
    })
    boardElement.appendChild(cellElement)
  })
}

// Initial setup
let model = createModel()
renderBoard(model.board, handleCellClick)
document.getElementById('restartBtn').addEventListener('click', () => {
  model = restartGame()
  renderBoard(model.board, handleCellClick)
})
