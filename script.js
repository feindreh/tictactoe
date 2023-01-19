/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
const Game = (() => {
  const _gameboard = ['', '', '', '', '', '', '', '', ''];
  const _field = [...document.querySelectorAll('.board-field')];
  const _text = [...document.querySelectorAll('.field-text')];
  let _player1 = true;
  const _fill = (choice) => {
    if (_gameboard[choice] !== '') { return; }
    if (_player1) { _gameboard[choice] = 'X'; _player1 = false; } else { _gameboard[choice] = 'O'; _player1 = true; }
  };
  const _renderBoard = () => {
    for (let i = 0; i < _field.length; i++) {
      _text[i].innerHTML = _gameboard[i];
    }
  };
  const resetBoard = () => {
    for (let i = 0; i < _gameboard.length; i++) {
      _gameboard[i] = '';
    }
    _player1 = true;
  };
  for (let i = 0; i < _field.length; i++) {
    _field[i].addEventListener('click', () => { _fill(i); _renderBoard(); validate(); });
  }
  const validate = () => {
    if (_gameboard[0] === _gameboard[1] && _gameboard[0] === _gameboard[2]) { if (_gameboard[0] !== '' && _gameboard[1] !== '' && _gameboard[2] !== '') { alert('win'); } }
    if (_gameboard[3] === _gameboard[4] && _gameboard[3] === _gameboard[5]) { if (_gameboard[3] !== '' && _gameboard[4] !== '' && _gameboard[5] !== '') { alert('win'); } }
    if (_gameboard[6] === _gameboard[7] && _gameboard[6] === _gameboard[8]) { if (_gameboard[6] !== '' && _gameboard[7] !== '' && _gameboard[8] !== '') { alert('win'); } }
    if (_gameboard[0] === _gameboard[3] && _gameboard[0] === _gameboard[6]) { if (_gameboard[0] !== '' && _gameboard[3] !== '' && _gameboard[6] !== '') { alert('win'); } }
    if (_gameboard[1] === _gameboard[4] && _gameboard[1] === _gameboard[7]) { if (_gameboard[1] !== '' && _gameboard[4] !== '' && _gameboard[7] !== '') { alert('win'); } }
    if (_gameboard[2] === _gameboard[5] && _gameboard[2] === _gameboard[8]) { if (_gameboard[2] !== '' && _gameboard[5] !== '' && _gameboard[8] !== '') { alert('win'); } }
    if (_gameboard[0] === _gameboard[4] && _gameboard[0] === _gameboard[8]) { if (_gameboard[0] !== '' && _gameboard[4] !== '' && _gameboard[8] !== '') { alert('win'); } }
    if (_gameboard[6] === _gameboard[4] && _gameboard[6] === _gameboard[2]) { if (_gameboard[6] !== '' && _gameboard[4] !== '' && _gameboard[2] !== '') { alert('win'); } }
    for (const part of _gameboard) {
      if (part === '') { return; }
    }
    alert('draw');
  };
  return {
    validate,
    resetBoard,
  };
})();
