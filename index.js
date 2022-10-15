let divs = [...document.querySelectorAll('div')];

console.log(divs);


divs.forEach(div => {
    div.addEventListener('click', (e) => {
        console.log(e.target)
    });
})