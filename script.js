const range = document.getElementById('myRange');
const rangeValue = document.getElementById('rangeValue');

range.addEventListener('input', () => {

    // Calcula a porcentagem do valor em relação ao intervalo
    const percent = (range.value - range.min) / (range.max - range.min) * 100;

    // Atualiza a propriedade background para preencher a barra com uma cor gradiente
    range.style.background = `linear-gradient(to right, hsl(6, 100%, 80%) 0%, hsl(335, 100%, 65%) ${percent}%, hsl(229, 57%, 11%) ${percent}%, hsl(229, 57%, 11%) 100%)`;
    range.style.border = "2px solid hsl(229, 57%, 11%)"
});