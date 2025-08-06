const myInput = document.getElementById('myInput');
const goButton = document.getElementById('goButton');
const myTaskBoard = document.getElementById('myTaskBoard');
goButton.addEventListener('click', insertTask);
myInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') insertTask();
});
function insertTask(){
    const taskText = myInput.value.trim();
    if (taskText === '') return;
const taskItem = document.createElement('li');
  taskItem.className = 'itemBox';
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button onclick="eraseTask(this)">🗑</button>
  `;
  taskItem.addEventListener('click', function (e) {
    if (e.target.tagName !== 'BUTTON') {
      taskItem.classList.toggle('checked');
    }
  });
  myTaskBoard.appendChild(taskItem);
  myInput.value = '';
}
function eraseTask(button) {
  const item = button.closest('li');
  item.remove();

}

