class Pasos{
    constructor(){

    }
    movimiento(){
        return Math.trunc(Math.random()*100+1);
    }
}

class Carrera{
    constructor(){
        this._liebre = 0;
        this._tortuga = 0;
        this.pasos = new Pasos();
    }
    avanzar(){
        let n = this.pasos.movimiento();
        if(n <= 20){
            this._liebre += 0; 
        }else if (n >= 21 && n <= 40){
            this._liebre += 9;
        }else if (n >= 41 && n <= 50){
            this._liebre += -12;
        }else if (n >= 51 && n <= 85){
            this._liebre += 1;
        }else{
            this._liebre += -2;
        }

        let d = this.pasos.movimiento();
        if (d <= 50){
            this._tortuga += 3;
        }else if(d >= 51 && d <= 70 ){
            this._tortuga += -6;
        }else{
            this._tortuga += 1;
        }
    }
}

let carrera = new Carrera();
resultados();

function resultados(){
    while(carrera._liebre < 90 && carrera._tortuga < 90 ){
        carrera.avanzar();
        console.log(carrera._liebre, carrera._tortuga);

    }
    if (carrera._liebre < carrera._tortuga){
        console.log("la tortuga es la ganadora")

    }else if (carrera._liebre > carrera._tortuga){
        console.log("la liebre es el ganador")

    }else{
        console.log("empate")
    }
}

