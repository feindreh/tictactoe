/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
const Game = (() => {
  const _gameboard = ['', '', '', '', '', '', '', '', ''];
  const _field = [...document.querySelectorAll('.board-field')];

  for (const _part of _field) {
    _part.addEventListener('click', () => {
      _gameboard[+_part.id - 1] = 'X';
      renderBoard();
    });
  }

  const resetBoard = () => {
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
    resetBoard,
  };
})();
