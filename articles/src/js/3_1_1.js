let numeBtn = document.getElementById('numerator');
let numeElm = document.getElementById('numeratorPtag');

numeBtn.addEventListener('click', () => {
  let numeCalc = 8 * 7 * 6;
  numeElm.innerText = numeCalc;
});