/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
const Game = (() => {
  const _gameboard = [];
  const _field = [...document.querySelectorAll('.board-field')];
  for (const _part of _field) {
    _part.addEventListener('click', () => { console.log(_part.id); });
  }
  const getField = () => Array.from(_field);
  const getBoard = () => Array.from(_gameboard);
  const newBoard = () => {
    _gameboard.splice(0, _gameboard.length);
    for (let i = 0; i < 3; i++) {
      const block = [];
      for (let j = 0; j < 3; j++) {
        block.push('X');
      }
      _gameboard.push(block);
    }
  };
  const renderBoard = () => {
  };

  return {
    getField,
    getBoard,
    newBoard,
    renderBoard,
  };
})();
