function AreaYperimetroCir(radio) {
    respuesta = verificardatos(radio)
    if (respuesta == true){
        return ({areaCir:areaCir(parseFloat(radio)), perimetroCir: perimetroCir(parseFloat(radio))})
    }
    return respuesta
    
}

function verificardatos (radio) {
    if (isNaN(radio) || isNaN(parseFloat(radio))) {
        return  ("Algún dato no es número")

    } else if (radio === "") {
        return("Algún dato falta")


    } else if (parseFloat(radio) <= 0) {
        return("Algún dato es muy pequeño")


    } else if (parseFloat(radio) > 10000000) {
        return("Algún dato es muy grande")

    } else {
        return true
    }
}

function areaCir(radio) {
    return 2*Math.PI *radio;
}

function perimetroCir(radio) {
    return Math.PI *Math.pow(radio, 2);
}



module.exports = AreaYperimetroCir;