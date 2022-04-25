class Ninja
{
    /*constructor(nombre,salud)
    {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }*/

    constructor(nombre,salud, velocidad, fuerza)
    {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }

    sayName ()
    {
        console.log("El nombre del ninja es "+this.nombre);
    }

    showStats ()
    {
        console.log("Nombre: "+this.nombre+", Fuerza: "+this.fuerza+", Velocidad: "+this.velocidad+",  Salud: "+this.salud);
    }

    drinkSake ()
    {
        this.salud += 10;
    }
}

class Sensei extends Ninja 
{
    constructor(nombre) 
    {
        super(nombre, 200,10,10);
        this.sabiduria = 10;
    }

    speakWisdom()
    {
        super.drinkSake();
    }
}

/*const ninja1 = new Ninja("Hyabusa",10);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();*/

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();