/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
const Game = (() => {
  const _gameboard = ['', '', '', '', '', '', '', '', ''];
  const _field = [...document.querySelectorAll('.board-field')];
  const _text = [...document.querySelectorAll('.field-text')];

  for (let i = 0; i < _field.length; i++) {
    _field[i].addEventListener('click', () => { _gameboard[i] = 'X'; renderBoard(); });
  }

  const resetBoard = () => {
    for (let i = 0; i < _gameboard.length; i++) {
      _gameboard[i] = '';
    }
  };
  const renderBoard = () => {
    for (let i = 0; i < _field.length; i++) {
      _text[i].innerHTML = _gameboard[i];
    }
  };

  return {
    resetBoard,
  };
})();
