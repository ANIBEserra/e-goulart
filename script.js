let timeLeft = 5;
const countdownElement = document.getElementById('countdown');
const redirectUrl = 'https://typebot.co/typebot-oficial-teste-rastracking-8nlyli6';

// Função para atualizar o contador
function updateCountdown() {
    countdownElement.textContent = timeLeft;

    if (timeLeft === 0) {
        // Redirecionar para o Typebot
        window.location.href = redirectUrl;
    } else {
        timeLeft--;
    }
}

// Iniciar o contador imediatamente
updateCountdown();

// Continuar o contador a cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);

// Limpar o intervalo quando a página for descarregada
window.addEventListener('beforeunload', () => {
    clearInterval(countdownInterval);
});