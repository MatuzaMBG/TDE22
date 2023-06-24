function soma(){
    const num1 = Number(document.getElementById('num1').value)
    const num2 = Number(document.getElementById('num2').value)
    if (num1 !='' && num2 !=''){
        let resultado = num1 + num2
        document.getElementById('result').innerHTML = 'Resultado:' + resultado
    }else{
        alert('Preencha os dois campos')
    }
}

function subtrair(){
    const num1 = Number(document.getElementById('num1').value)
    const num2 = Number(document.getElementById('num2').value)
    if (num1 !='' && num2 !=''){
        let resultado = num1 - num2
        document.getElementById('result').innerHTML = 'Resultado:' + resultado
    }else{
        alert('Preencha os dois campos')
    }
}

function dividir(){
    const num1 = Number(document.getElementById('num1').value)
    const num2 = Number(document.getElementById('num2').value)
    if (num1 !='' && num2 !=''){
        let resultado = num1 / num2
        document.getElementById('result').innerHTML = 'Resultado:' + resultado
    }else{
        alert('Preencha os dois campos')
    }
}

function multiplicar(){
    const num1 = Number(document.getElementById('num1').value)
    const num2 = Number(document.getElementById('num2').value)
    if (num1 !='' && num2 !=''){
        let resultado = num1 * num2
        document.getElementById('result').innerHTML = 'Resultado:' + resultado
    }else{
        alert('Preencha os dois campos')
    }
}



function limpar(){
    document.getElementById('num1').value = ''
    document.getElementById('num2').value = ''
    document.getElementById('result').innerHTML = 'Resultado:'
}