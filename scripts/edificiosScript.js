//1- Definir constructor y métodos
//Contructor:
function edificio(calle, numero, cp) {
    //Atributos:
    this.calle = calle;
    this.numero = numero;
    this.cp = cp;            
    //Métodos:
    
    this.imprimir = function(cadena){
        document.getElementById("ejecucion").innerHTML+=cadena+"<br/>";//método creado para imprimir todo lo necesario por pantalla
    }
    
    this.imprimir("Construido nuevo edificio en calle: "+this.calle+", no: "+this.numero+", CP: "+this.cp);
    
    
    this.agregarPlantasYPuertas = function (numPlantas, puertas) {
        this.puertas = puertas;
        this.plantas = new Array(numPlantas);//para almacenar las plantas uso como estructura un array
            //aqui empiezo a iterar primero por plantas y luego por puertas
        for (i=0;i<numPlantas;i++){
            this.plantas[i]=new Array (puertas);//para almacenar las puertas uso como estructura un array
            for(j=0;j<puertas;j++){
                this.plantas[i][j]={};//creacion del objeto propietario {} que es la estructura que almacena los datos de cada propietario
                this.plantas[i][j].numero=j+1;
                //this.plantas[i][j]={numero: 3};
            }   
        }
    }
    
    this.modificarNumero = function (num){
        this.numero=num;
    }

    this.modificarCalle = function(calle){
        this.calle=calle;
    }

    this.modificarCodigoPostal = function(codigo){
        this.cp= codigo;
    }

    this.imprimeCalle = function(){
        var a = this.calle;
        return a;
    }
    
    this.imprimeNumero = function(){
        var a = this.numero;
        return a;
    }

    this.imprimeCodigoPostal = function(){
        //var a = this.imprimir(this.cp); esto no funcionó
        //return a;
        //this.imprimir(this.cp);esto tampoco funcionó
        //this.cp; tampoco
        var a = this.cp;
        return a;
    }

    this.agregarPropietario = function (nombre, planta, puerta) {
        
        var puertas = this.plantas[planta-1];//pongo puerta -1 porque cuando itero entre plantes y puertas el indice es 0
        var propietario = puertas[puerta-1];
        propietario.nombre=nombre;
        // var propietario = this.plantas[planta][puerta];
        // propietario.nombre = nombre
        this.imprimir(nombre+" es ahora el propietario de la puerta "+puerta+" planta "+planta);
    }

    this.imprimePlantas = function(){

            //aqui empiezo a iterar primero por plantas y luego por puertas
            for (i=0;i<this.plantas.length;i++){
                //console.log("estoy iterando sobre la planta :"+i);
                for(j=0;j<this.puertas;j++){
                    var nombre = this.plantas[i][j].nombre;
                    if(nombre == undefined){
                        nombre="VACÍO";
                    }
                    this.imprimir("Propietario del piso "+(j+1)+" de la planta "+(i+1)+":"+nombre)+"<br/>";
                    
                }   
            }
    }
    
}

var edificioA = new edificio("Garcia Prieto", 58, "15706");
var edificioB = new edificio("Camino Caneiro", 29, "32004");
var edificioC = new edificio("Garcia Prieto", "s/n", "15705");

document.getElementById("ejecucion").innerHTML+="El código postal del edificio A es: "+edificioA.imprimeCodigoPostal()+"<br/>";

document.getElementById("ejecucion").innerHTML+="La calle del edificio C es: "+edificioC.imprimeCalle()+"<br/>";

document.getElementById("ejecucion").innerHTML+="El edificio B esta situado en "+edificioB.imprimeCalle()+" número "+edificioB.imprimeNumero()+"<br/>";

// Agregamos 2 plantas y 3 puertas por planta al edificio A...
// Agregamos 4 propietarios al edificio A...

edificioA.agregarPlantasYPuertas(2,3);

edificioA.agregarPropietario("Jose Antonio Lopez",1,1);
edificioA.agregarPropietario("Luisa Martinez",1,2);
edificioA.agregarPropietario("Marta Castellon",1,3);
edificioA.agregarPropietario("Antonio Pereira",2,2);

//Imprimir propietarios del edificio

document.getElementById("ejecucion").innerHTML+="<b>Listado de propietarios del edificio "+edificioB.imprimeCalle()+" número "+edificioB.imprimeNumero()+"</b><br/>";

edificioA.imprimePlantas();        
//Agregamos 1 planta más al edificio A...
//Agregamos 1 propietario más al edificio A planta 3, puerta 2...
edificioA.agregarPlantasYPuertas(3,3)
edificioA.agregarPropietario("Jose Antonio Lopez",1,1);
edificioA.agregarPropietario("Luisa Martinez",1,2);
edificioA.agregarPropietario("Marta Castellon",1,3);
edificioA.agregarPropietario("Antonio Pereira",2,2);
edificioA.agregarPropietario("Pedro Meijide",3,2);
document.getElementById("ejecucion").innerHTML+="<b>Listado de propietarios del edificio "+edificioB.imprimeCalle()+" número "+edificioB.imprimeNumero()+"</b><br/>";

edificioA.imprimePlantas();


//Borrador del código:
/*let a = new Edificio("Industria", 45, "08026") 
{
    calle: "Industria",
    numero: 45,
    cp: "08026",            
}



a.agregarPlantasYPuertas(3,3)

{
    calle: "Industria",
    numero: 45,
    cp: "08026",
    plantas: [
        [{ nro: 1 }, {nro: 2 }, {nro: 3 }],

        [{ nro: 1 }, { nro: 2 }, { nro: 3 }],

        [{ nro: 1 }, { nro: 2 }, { nro: 3 }],
    ],
}

a.agregarPropietario(2, 3, "Ronald")

{
    calle: "Industria",
    numero: 45,
    cp: "08026",
    plantas: [
        [{ nro: 1 }, {nro: 2 }, {nro: 3 }],

        [{ nro: 1 }, { nro: 2 }, { nro: 3 , nombre:"Ronald"}],

        [{ nro: 1 }, { nro: 2 }, { nro: 3 }],
    ]
}*/
