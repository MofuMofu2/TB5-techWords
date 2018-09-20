let denoBtn = document.getElementById('denominator');
let denoElm = document.getElementById('denominatorPTag');

denoBtn.addEventListener('click', () => {
  let denoCalc = 3 * 2 * 1;
  denoElm.innerText = denoCalc;
});