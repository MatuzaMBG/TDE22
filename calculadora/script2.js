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


function media(){
    const nt1 = Number(document.getElementById('nt1').value)
    const nt2 = Number(document.getElementById('nt2').value)
    const nt3 = Number(document.getElementById('nt3').value)
    if (nt1 !='' && nt2!='' && nt3 !=''){
        let resultado = nt1 + nt2 + nt3 / 3
        document.getElementById('result2').innerHTML = 'Sua nota é:' + resultado
    }else{
        alert('Preencha os três campos')
    }
}

function limpar(){
    document.getElementById('nt1').value = ''
    document.getElementById('nt2').value = ''
    document.getElementById('nt3').value = ''
    document.getElementById('result2').innerHTML = 'Sua nota é:'
}