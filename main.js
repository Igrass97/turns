let turns = ['Pablo', 'Ignacio', 'Gaby', 'Fede', 'JuancitoBlanco'];
let currentTurn = 0;

const renderPendingTurns = () => {
  const turnList = document.getElementById('list');
  turnList.innerHTML = null;

  const pendingTurns = turns.slice(currentTurn + 1);

  pendingTurns.forEach(turn => {
    const listItem = document.createElement('li');
    listItem.textContent = turn;
    listItem.className = 'list-item';
    turnList.append(listItem);
  });
};

const renderCurrent = () => {
  const currentPersonContainer = document.getElementById('current-person');

  currentPersonContainer.textContent = turns[currentTurn];
};

const updateUI = () => {
  renderPendingTurns();
  renderCurrent();
};

const addCallbacks = () => {
  const next = () => {
    if (currentTurn < turns.length - 1) currentTurn++;

    updateUI();
  };

  const previous = () => {
    if (currentTurn > 0) currentTurn--;

    updateUI();
  };

  const sendBackToQueue = () => {
    const person = turns[currentTurn];

    turns = [...turns.slice(0, currentTurn), ...turns.slice(currentTurn)];

    turns.push(person);

    next();
  };

  const btnNext = document.getElementById('btn-next');
  const btnPrevious = document.getElementById('btn-previous');
  const btnBack = document.getElementById('btn-back');

  btnNext.addEventListener('click', next);
  btnPrevious.addEventListener('click', previous);
  btnBack.addEventListener('click', sendBackToQueue);
};

addCallbacks();
updateUI();
