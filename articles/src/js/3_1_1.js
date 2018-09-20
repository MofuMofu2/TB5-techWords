let numeBtn = document.getElementById('button');
let numeElm = document.getElementById('p');

numeBtn.addEventListener('click', () => {
  let numeCalc = 8 * 7 * 6;
  numeElm.innerText = numeCalc;
});