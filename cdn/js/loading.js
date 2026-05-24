document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('loading-text');
    const originalText = "Загрузка...";
    const chars = originalText.split('').map(char => {
        return `<span class="char">${char}</span>`;
    });
    textElement.innerHTML = chars.join('');
});