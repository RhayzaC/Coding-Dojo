class Ninja {
    constructor(nombre, salud) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName() {
        console.log(`El nombre de este ninja es ${this.nombre}`)
    }

    showStats() {
        console.log(`El nombre de este ninja es: ${this.nombre}, fuerza: ${this.fuerza}, velocidad: ${this.velocidad} Km y salud: ${this.salud}`)
    }

    drinkSake() {
        this.salud += 10;
    }
}
const ninja1 = new Ninja("Hyabusa", 0);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

class Sensei extends Ninja {
    constructor(nombre) {
        super(nombre, 200);
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("Un Ninja siempre necesita aprender de un Sensei.");
    }
}

const sensei1 = new Sensei("Señor Miyagi");
sensei1.sayName();
sensei1.speakWisdom();
sensei1.showStats();