let input = document.querySelector('input'),
    btn = document.querySelector('button'),
    paragraph = document.querySelector('#zalupa');

console.dir(input);

btn.addEventListener('click', () => {
   paragraph.innerHTML = input.value;
})