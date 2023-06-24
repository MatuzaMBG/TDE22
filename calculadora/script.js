function somar() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);

    if (nun1 !='' && num2 !='') {
        let soma = num1 + num2;
        document.getElementById('result').innerHTML = 'Resultado: ' + soma;
    } else {
        alert('Preencha os dois campos');
    }
}

function limpar() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').innerHTML = 'Resultado:';
}
