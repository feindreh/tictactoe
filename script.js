/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
const createGame = document.querySelector('#createGame');
const blackbox = document.querySelector('#blackbox');
const prompt = document.querySelector('#prompt');
const boardField = [...document.querySelectorAll('.board-field')];
const text = [...document.querySelectorAll('.field-text')];
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');

const Game = (() => {
  const _gameboard = ['', '', '', '', '', '', '', '', ''];
  let _player1 = true;
  const _fill = (choice) => {
    if (_gameboard[choice] !== '') { return; }
    if (_player1) { _gameboard[choice] = 'X'; } else { _gameboard[choice] = 'O'; }
    _changePlayer(_player1);
  };
  const _renderBoard = () => {
    for (let i = 0; i < boardField.length; i++) {
      text[i].innerHTML = _gameboard[i];
    }
  };
  const _changePlayer = (boolean) => {
    if (boolean) { player2.style.border = 'solid 15px green'; player1.style.border = 'solid 15px white'; }
    if (boolean !== true) { player1.style.border = 'solid 15px green'; player2.style.border = 'solid 15px white'; }
    _player1 = (boolean !== true);
  };
  const resetBoard = () => {
    for (let i = 0; i < _gameboard.length; i++) {
      _gameboard[i] = '';
    }
    _player1 = true;
  };
  const _validate = () => {
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
  for (let i = 0; i < boardField.length; i++) {
    boardField[i].addEventListener('click', () => { _fill(i); _renderBoard(); _validate(); });
  }
  return {
    resetBoard,
  };
})();

const Prompt = (() => {
  createGame.addEventListener('click', () => {
    _setNames(Player1.name(), Player2.name());
    player1.style.visibility = 'visible';
    player2.style.visibility = 'visible';
    _hidePrompt();
  });
  const _hidePrompt = () => {
    blackbox.style.visibility = 'hidden';
    prompt.style.visibility = 'hidden';
  };
  const _setNames = (name1, name2) => {
    player1.innerHTML = name1;
    player2.innerHTML = name2;
  };
})();

const personFactory = (selector) => {
  const name = () => selector.value;

  return { name };
};

const Player1 = personFactory(document.querySelector('#Player1'));
const Player2 = personFactory(document.querySelector('#Player2'));
