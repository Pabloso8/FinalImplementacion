function AreaYperimetroTri(lado1, lado2, lado3) {
    respuesta1 = verificardatos(lado1)
    respuesta2 = verificardatos(lado2)
    respuesta3 = verificardatos(lado3)


    if (respuesta1 == true && respuesta2 == true && respuesta3 == true) {
        if (verificarValidezTriangulo(parseFloat(lado1), parseFloat(lado2), parseFloat(lado3))) {
            return ({ areaTri: areaTri(lado1, lado2, lado3), perimetroTri: perimetroTri(lado1, lado2, lado3) })
        }else {
            return "Triángulo no válido"
        }
        
    } else if (respuesta1 !== true) {
        return respuesta1
    } else if (respuesta2 !== true) {
        return respuesta2
    } else if (respuesta3 !== true) {
        return respuesta3
    }


}
function verificarValidezTriangulo(l1, l2, l3) {
    if ((l1 + l2) > l3 && (l1 + l3) > l2 && (l2 + l3) > l1) {
        return true
    } else {
        return false
    }
}

function verificardatos(lado) {
    if (isNaN(lado) || isNaN(parseFloat(lado))) {
        return ("Algún dato no es número")

    } else if (lado === "") {
        return ("Algún dato falta")


    } else if (parseFloat(lado) <= 0) {
        return ("Algún dato es muy pequeño")


    } else if (parseFloat(lado) > 10000000) {
        return ("Algún dato es muy grande")

    } else {
        return true
    }
}

function areaTri(lado1, lado2, lado3) {
    var s = (parseFloat(lado1) + parseFloat(lado2) + parseFloat(lado3)) / 2;
    return Math.sqrt(s * (s - parseFloat(lado1)) * (s - parseFloat(lado2)) * (s - parseFloat(lado3)));
}

function perimetroTri(lado1, lado2, lado3) {
    return parseFloat(lado1) + parseFloat(lado2) + parseFloat(lado3);
}



module.exports = AreaYperimetroTri;