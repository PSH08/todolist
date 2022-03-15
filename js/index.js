const week = document.getElementById('week')
const today = document.querySelector('.today')

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
