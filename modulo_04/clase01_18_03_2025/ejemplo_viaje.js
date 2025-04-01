class Viaje {
    constructor(destino, origen, duracion){
        this.destino = destino;
        this.origen = origen;
        this.duracion = duracion;
    }

    getInfo(){
        console.log(`
            origen: ${this.origen}
            destino: ${this.destino}
            duracion: ${this.duracion} min
        `)
    }

    getCost(){
        console.log(`Costo del viaje $${this.duracion*35} MXN`);
    }

    //Metodo estatico
    
    static mensajeBienvenida(){
        console.log("Bienvenido al planificador de viajes");
    }
}

const viaje1 = new Viaje ('Guadalajara', 'Monterrey', "60");
const viaje2 = new Viaje ('Monterrey', 'Guadalajara', "65");

// console.log({viaje1});
// console.log(viaje2);

viaje1.getInfo();
viaje1.getCost();

/*
class Usuario {
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    login(){
        console.log(`El usuario ${this.username} ha iniciado sesion`);
    }
    reservarViaje(){
        console.log(`El usuario ${this.username} ha reservado un viaje`);
    }
}*/

class Usuario {
    constructor(nombre, edad, correo, saldo = 0){
        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
        this.saldo = saldo;
    }
    getInfo(){
        console.log(`
            Nombre: ${this.nombre}
            Edad: ${this.edad} años
            Correo: ${this.correo}
            Saldo actual: ${this.saldo} MXN
        `);
    }    

    enviarInfoViajeCorreo(viaje){
        console.log(`Enviando información del viaje a ${this.correo}`);
        console.log(`
            Correo enviado a: ${this.correo}
            Origen: ${viaje.origen}
            Destino: ${viaje.destino}
            Duracion: ${viaje.duracion} min
            Estado: Confirmado
            `);
    } 

    checkIn(Viaje){
        console.log(`Check-in realizado para el viaje de ${Viaje.origen} a ${Viaje.destino}. ¡Buen viaje!, ${this.nombre}!`); 
    }

    login(){
        console.log(`El usuario ${this.username} ha iniciado sesion`);
    }

}

const user1 = new Usuario ('Ricardo', 25, 'j0n9D@example.com');
user1.getInfo();
user1.checkIn(viaje1);
user1.enviarInfoViajeCorreo(viaje2);

//El metodo estatico se puede llamar sin instanciar la clase (sin crear un objeto)
Viaje.mensajeBienvenida();

class viajeInternacional extends Viaje {
    constructor(destino, origen, duracion, pais){
        super(destino, origen, duracion); // llamar al constructor del padre
        this.pais = pais;
    }

    mostrarInfo(){
        console.log(`Destino: ${this.destino} \nPais: ${this.pais}
        `);
    }
}

const viajeInt1 = new viajeInternacional('Cairo', 'CDMX', 900, 'Egipto');
viajeInt1.getInfo();
viajeInt1.getCost();
viajeInt1.mostrarInfo();

