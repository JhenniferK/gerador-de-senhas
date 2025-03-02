const checkboxes = document.querySelectorAll('.parametro');
const asteriscos = document.getElementById('asteriscos');
const senhaGerada = document.getElementById('senhaGerada');
const corpoCadeado = document.querySelector('.corpo');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', atualizarCadeado);
});

function atualizarCadeado() {
    let contador = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) contador++;
    });

    asteriscos.textContent = '*'.repeat(contador) || '*';

    switch (contador) {
        case 0:
            corpoCadeado.style.backgroundColor = '#cccccc';
            corpoCadeado.style.borderColor = '#cccccc';
            break;
        case 1:
            corpoCadeado.style.backgroundColor = '#add8e6';
            corpoCadeado.style.borderColor = '#add8e6';
            break;
        case 2:
            corpoCadeado.style.backgroundColor = '#87ceeb';
            corpoCadeado.style.borderColor = '#87ceeb';
            break;
        case 3:
            corpoCadeado.style.backgroundColor = '#4682b4';
            corpoCadeado.style.borderColor = '#4682b4';
            break;
        case 4:
            corpoCadeado.style.backgroundColor = '#6c63ff';
            corpoCadeado.style.borderColor = '#6c63ff';
            break;
    }
}

function gerarSenha() {
    const caracteresMaiusculos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const caracteresMinusculos = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+[]{}<>?';

    let caracteresPermitidos = '';
    let senha = '';

    if (document.getElementById('maiusculas').checked) {
        caracteresPermitidos += caracteresMaiusculos;
    }
    if (document.getElementById('minusculas').checked) {
        caracteresPermitidos += caracteresMinusculos;
    }
    if (document.getElementById('numeros').checked) {
        caracteresPermitidos += numeros;
    }
    if (document.getElementById('simbolos').checked) {
        caracteresPermitidos += simbolos;
    }

    if (caracteresPermitidos === '') {
        senhaGerada.textContent = 'Selecione pelo menos um parâmetro.';
        return;
    }

    for (let i = 0; i < 12; i++) {
        senha += caracteresPermitidos[Math.floor(Math.random() * caracteresPermitidos.length)];
    }

    senhaGerada.textContent = `Senha gerada: ${senha}`;
}