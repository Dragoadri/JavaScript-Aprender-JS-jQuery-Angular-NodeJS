console.log('hola conn TS');

// Tipos de datos
let cadena: string = "Esto es un string";
let numero: number = 12;
let boleano: boolean = false;

//Any Permite meter cualquier valor
let cualquiera: any = "hola"

var lenguajes: Array<String> = ["a", "e", "e"];


//Dos tipos de datos
let cosas: string | number = "Esto es un string";

//Tipos de datos personalizados
type letrasONumeros = string | number;
let queSera: letrasONumeros = 4;

// Let vs Var en TS
// Let: a nivel de bloque, Var: a nivel global



//Funciones

function getNumero(numero: number): String {
    return "EL numero es :" + numero;
}

//Clases
@decorar('Gucci')
class Camiseta implements CamisetaBase {

    public color: String;
    public talla: String;
    public marca: String;
    public precio: number;

    constructor(color, talla, marca, precio) {
        this.color = color;
        this.talla = talla;
        this.marca = marca;
        this.precio = precio;

    }
    public getColor(): String {
        return this.color;
    }

    public setColor(color) {
        this.color = color;
    }
}

console.log(cadena);

//Interfaz

interface CamisetaBase {

    setColor(Color);
    getColor();

}
// Herencia

class TankTop extends Camiseta {
    public largo: String;


    setLargo(largo: String) {
        this.largo = largo;
    }

}

//decorador
function decorar(logo: String) {
    return function (target: Function) {
        target.prototype.decoracion = function (): void {
            console.log("Decorado con exito")
        }
    }

}