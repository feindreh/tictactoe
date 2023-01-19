/* eslint-disable guard-for-in */
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
const textbox = document.querySelector('#textbox');

const Game = (() => {
  const _gameboard = ['', '', '', '', '', '', '', '', ''];
  const _possible = {
    1: [0, 3, 6],
    2: [1, 4, 7],
    3: [2, 5, 8],
    4: [0, 1, 2],
    5: [3, 4, 5],
    6: [6, 7, 8],
    7: [0, 4, 8],
    8: [6, 4, 2],
  };
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
  const _check = (c) => {
    for (const part of c) {
      if (_gameboard[part] === '') { return false; }
    }
    if (_gameboard[c[0]] === _gameboard[c[1]] && _gameboard[c[1]] === _gameboard[c[2]]) { return true; }
    return false;
  };
  const _validate = () => {
    for (const combination in _possible) {
      if (_check(_possible[combination])) { textbox.innerHTML = "It's a Win !!!"; }
    }
    for (const thing of _gameboard) {
      if (thing === '') { return; }
    }
    console.log('draw');
    textbox.innerHTML = "It's a Draw ....";
  };
  const _resetBoard = () => {
    for (let i = 0; i < _gameboard.length; i++) {
      _gameboard[i] = '';
    }
    _player1 = true;
  };

  for (let i = 0; i < boardField.length; i++) {
    boardField[i].addEventListener('click', () => { _fill(i); _renderBoard(); _validate(); });
  }
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
