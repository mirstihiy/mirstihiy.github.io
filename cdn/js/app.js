let el;

document.addEventListener('DOMContentLoaded', function() {
    el = document.getElementById('root');
});

setTimeout(function() {
    app();
}, 2000);

function app() {
    el.innerHTML = '<header><img class="logo" src="cdn/logo/64.png"><h1>Мир Стихий</h1></header>';
}