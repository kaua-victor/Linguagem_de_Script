function verifTriangulos(...lados) {
    if (lados.length>3 || lados.lenght<3){
    return 'Não é um triângulo'
    }
    else if (lados[0] == lados[1] && lados[1] == lados[2] && lados[0]==lados[2]) {
        return 'Equilátero'
    }
    else if (lados[0] != lados[1] && lados[1] != lados[2] && lados[0] != lados[2]) {
        return 'Escaleno'
    }
    else {
        return 'Isósceles'
    }
}

console.log(verifTriangulos(2,2,2))