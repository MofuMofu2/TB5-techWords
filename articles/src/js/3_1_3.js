let resultBtn = document.getElementById('result');
let resultElm = document.getElementById('resultPtag');

resultBtn.addEventListener('click', () => {
  let numeCalc = 8 * 7 * 6;
  let denoCalc = 3 * 2 * 1;
  let resultCalc = numeCalc / denoCalc;
  resultElm.innerText = resultCalc;
});