var bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'disco',
    velocidadMax: '60km',
    cambiaColor: function(nuevoColor) {
        this.color = nuevoColor;
    }
};
bicicleta.cambiaColor('azul');
console.log(bicicleta);