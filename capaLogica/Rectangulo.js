function AreaYperimetroRec(altura, base) {
    respuesta1 = verificardatos(altura)
    respuesta2 = verificardatos(base)

    if (respuesta1 == true && respuesta2 == true){
        return ({areaRec:areaRec(parseFloat(altura), parseFloat(base)), perimetroRec: perimetroRec(parseFloat(altura),parseFloat(base))})
    }else if (respuesta1 !== true) {
        return respuesta1
    } else if (respuesta2 !== true) {
        return respuesta2
    } 
}

function verificardatos (lado) {
    if (isNaN(lado) || isNaN(parseFloat(lado))) {
        return  ("Algún dato no es número")

    } else if (lado === "") {
        return("Algún dato falta")


    } else if (parseFloat(lado) <= 0) {
        return("Algún dato es muy pequeño")


    } else if (parseFloat(lado) > 10000000) {
        return("Algún dato es muy grande")

    } else {
        return true
    }
}

function areaRec(altura,base) {
    return altura*base;
}

function perimetroRec(altura, base) {
    return 2*altura + 2*base;
}



module.exports = AreaYperimetroRec;