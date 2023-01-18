/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
const Game = (() => {
  const _gameboard = ['', 'X', 'O', 'X', '', '', '', '', ''];
  const _field = [...document.querySelectorAll('.board-field')];

  for (const _part of _field) {
    _part.addEventListener('click', () => {
    });
  }

  const getField = () => Array.from(_field);
  const getBoard = () => Array.from(_gameboard);
  const newBoard = () => {
    for (let i = 0; i < _gameboard.length; i++) {
      _gameboard[i] = '';
    }
  };
  const renderBoard = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        console.log(_gameboard[i][j]);
        console.log(_field[i][j]);
      }
    }
  };

  return {
    getField,
    renderBoard,
    getBoard,
    newBoard,
  };
})();
