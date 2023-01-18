/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
const Game = (() => {
  const _gameboard = ['', 'X', 'O', 'X', '', '', '', '', ''];
  const _field = [...document.querySelectorAll('.board-field')];

  for (const _part of _field) {
    _part.addEventListener('click', () => {
      _gameboard[+_part.id - 1] = 'X';
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
    for (const _part of _field) {
      _field[+_part.id - 1].innerHTML = _gameboard[+_part.id - 1];
    }
  };

  return {
    getField,
    renderBoard,
    getBoard,
    newBoard,
  };
})();
