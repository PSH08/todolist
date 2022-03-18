const week = document.getElementById('week');
const today = document.getElementById('today');
const btn = document.getElementById('plus');
const cont = document.querySelector('.container');
const form = document.querySelector('#form_cont');
const formInput = document.querySelector('#form_cont input');
const list = document.getElementById('list');

function days() {
  let date = new Date();
  let years = date.getFullYear();
  let months = date.getMonth();
  let dates = date.getDate();
  today.innerText = `${years} ${months+1} ${dates}`
}
days()

function weeks() {
  let date = new Date();
  let weeks = ['일', '월', '화', '수', '목', '금', '토'];
  let days = date.getDay();
  week.innerText = `${weeks[days]}요일`
}
weeks()

function deleteLi(e) {
  let li = e.target.parentElement;
  li.remove()
}

function lists() {
  let value = formInput.value;
  let li = document.createElement('li');
  let span = document.createElement('span');
  let button = document.createElement('button');
  list.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
  button.innerText = 'X'
  button.className = 'x_btn'
  span.innerText = value;
  button.addEventListener('click',deleteLi)
}
form.addEventListener('submit', lists);

function formValue(e) {
  e.preventDefault();
  // let value = formInput.value;
  formInput.value = '';
}
form.addEventListener('submit', formValue);

function minus() {
  if(btn.className === '') {
    btn.innerText = '-';
    btn.classList.add('minus');
    form.classList.remove('hidden');
  }else {
    btn.innerText = '+';
    btn.classList.remove('minus');
    form.classList.add('hidden');
  }
}
btn.addEventListener('click', minus);


