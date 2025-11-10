document.addEventListener('DOMContentLoaded', () => {

    const checkForm = document.getElementById('check-form');
    const numberInput = document.getElementById('number-input');
    const resultMessage = document.getElementById('result-message');

    checkForm.addEventListener('submit', (event) => {

        event.preventDefault();

        const inputValue = numberInput.value;
        const number = parseFloat(inputValue);

        if (isNaN(number) || !Number.isInteger(number) || number <= 0) {
            
            resultMessage.textContent = 'Zadejte prosím platné celé kladné číslo.';
            resultMessage.className = 'error';
            
            return;
        }

        if (number % 2 === 0) {
            
            resultMessage.textContent = `Číslo ${number} je SUDÉ.`;
            resultMessage.className = 'success';
            
        } else {
            
            resultMessage.textContent = `Číslo ${number} je LICHÉ.`;
            resultMessage.className = 'success';
        }
        
    });

});