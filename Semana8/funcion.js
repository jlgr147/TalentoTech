function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('invertirBtn').addEventListener('click', () => {
        let entrada = document.getElementById('entrada').value;
        let salida = invertirCadena(entrada);
        document.getElementById('resultado').innerText = salida;
    });
});
