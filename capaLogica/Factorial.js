function factorial(num) {
    respuesta = verificardatos(num)
    if (respuesta == true){
        var factorial = calcFactorial(num)
        return factorial.toString()
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

function calcFactorial(numero) {
    if(numero == 0){
        return 1;
    }
    return numero*calcFactorial(numero-1);
}



module.exports = factorial;