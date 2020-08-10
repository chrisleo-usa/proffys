const button = document.querySelector('#add-time');
const scheduleBlock = document.querySelector('#schedule-items');

button.addEventListener('click', cloneField);

function cloneField() {
  //cloneNode requer que você coloque como 1º parâmetro true ou false. Se for true, ele irá pegar todos os elementos que estão dentro do scheduleField. Se false, pegará a div vazia do .schedule-item.
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

  //limpar os campos.
  const fields = newFieldContainer.querySelectorAll('input');
  fields.forEach(function(field) {
    field.value = "";
  });

  scheduleBlock.appendChild(newFieldContainer);
}