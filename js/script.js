function calcular(tipo,valor) {
    if(tipo === 'acao'){

        if (valor === 'c') {
            document.getElementById('resultado').value = ""
        }

        switch(valor) {

            case '+':
            case '-':
            case '*':
            case '/':
            case '.':
            
            document.getElementById('resultado').value += valor 
        }

        if (valor === '=') {
            document.getElementById('resultado').value = eval(document.getElementById('resultado').value)
        }


    } else if(tipo === 'valor') {
        document.getElementById("resultado").value += valor
    }
}