const form = document.getElementById('contactForm');
const messageDisplay = document.getElementById('message');

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => data[key] = value);

    messageDisplay.classList.remove('success', 'error');
    messageDisplay.textContent = 'Enviando...';

    try {
        const response = await fetch('/submit-form', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const errorData = await response.json(); 
            const errorMessage = errorData.message || `Erro ao enviar mensagem. Código de status: ${response.status}`;
            throw new Error(errorMessage);
        }

        messageDisplay.textContent = 'Mensagem enviada com sucesso!';
        messageDisplay.classList.add('success');
    } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        messageDisplay.textContent = `Erro: ${error.message}`;
        messageDisplay.classList.add('error');
    }
});