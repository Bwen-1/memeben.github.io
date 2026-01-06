const imgs = document.querySelectorAll('img.exmpl');
const fullPg = document.querySelector('#fullpg');

imgs.forEach (img => {
    img.addEventListener('click', function() {
        fullPg.style.backgroundImage = 'url(' + img.src + ')';
        fullPg.style.display = 'block';
    });
});