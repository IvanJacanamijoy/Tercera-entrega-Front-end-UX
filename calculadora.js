//---------------Calculadora - Nivel I---------------//

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

function dividir(numero1, numero2) {
    if(numero2 == 0){
        return "Error - No se puede divir por cero"
    }else{
        return numero1 / numero2;
    }
}

//---------------Calculadora - Nivel II---------------//

console.log("-------------Testeo de Operaciones/Calculadora-------------");
//-----------------suma-----------------//
console.log(sumar(10, 5));
//-----------------resta----------------//
console.log(restar(15, 32));
//------------multiplicacion------------//
console.log(multiplicar(40, 5));
//---------------division---------------//
console.log(dividir(0, 10));
console.log(dividir(10, 0));

//-----Calculadora - Nivel III - Funciones extras-----//

function cuadraDeUnNumero(numero) {
    return multiplicar(numero, numero);
}

function promedioDeTresNumeros(numero1, numero2, numero3) {
    return sumar(sumar(numero1, numero2), numero3) / 3;
}

function calcularPorcentaje(numero, porcentaje) {
    return multiplicar(numero, dividir(porcentaje, 100));
}

function generadorDePorcentaje(numero, total) {
    return dividir(multiplicar(numero, 100), total);
}

console.log("-------------Testeo de Operaciones Extra/Calculadora-------------");
//-----------------Cuadrado de un numero-----------------//
console.log(cuadraDeUnNumero(5));
//---------------Promedio de tres numeros----------------//
console.log(promedioDeTresNumeros(10, 15, 20));
//----------Calcular el porcentaje de un numero----------//
console.log(calcularPorcentaje(200, 20));
//----------------Generador de porcentaje----------------//
console.log(generadorDePorcentaje(2, 200));

//-------Calculadora - Nivel IV - Funciones extras-------//

function verificarParidad(numero) {
    if (numero % 2 === 0) {
        return "El numero " + numero + " es par";
    }else{
        return "El numero " + numero + " es impar";
    }
}

function sumarSecuencia(inicio, fin) {
    let suma = 0;
    for (let i = inicio; i <= fin; i++) {
        suma += i;
    }
    return "La suma de la secuencia de numeros del " + inicio + " hasta " + fin + " es: " + suma;
}

console.log("-------------Testeo de Operaciones Condicionales y Bucles-------------");

console.log(verificarParidad(3));
console.log(verificarParidad(10));
console.log(verificarParidad(7));
console.log(verificarParidad(4));
console.log(sumarSecuencia(1, 3));
console.log(sumarSecuencia(3, 10));

