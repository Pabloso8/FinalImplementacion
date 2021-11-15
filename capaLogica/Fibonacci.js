function fibonacci(num) {
    respuesta = verificardatos(num)
    if (respuesta == true){
        return calcFib(num)
    }
    return respuesta
    
}

function verificardatos (num) {
    if (isNaN(num)) {
       return "No es número"
    } else if (parseFloat(num) % 1 !== 0) {
       return "No es entero"
    } else if (parseInt(num) > 1000) {
        return "Es muy grande el número"

    } else if (parseInt(num) < 1) {
        return "Es muy pequeño el número" 

    } else {
        return true
    }
}

function calcFib(numero) {
    var i;
    var fib = [];
    if (numero == 0 || numero < 0) return []
    if (numero == 1) return [0]
    fib[0] = 0;
    fib[1] = 1;
    for (i = 2; i <= numero-1; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];

    }
    return fib.toString();
}



module.exports = fibonacci;