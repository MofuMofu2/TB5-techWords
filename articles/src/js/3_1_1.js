let btn = document.querySelector ('button');

let elem = document.querySelector('p');
btn.addEventListener('click', () => {
  let calc = 8 * 7 * 6;
  elem.innerText = calc;
});