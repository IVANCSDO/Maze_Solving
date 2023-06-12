var arrWalls = [];
var arrRoads = [];
var actualCell;
var meta;

var xAct;
var yAct;

var arrCuadrosAct = [];

var contadorDeCercania = 0;

function empezar() {
    clickModeV = null;
    setCells();
    setPrefence();
}

// calculate cell preference
async function setCells(){
    for(i=0; i!=map.length; i++){
        switch (map[i].cell.type) {
            case "wall":
                arrWalls.push(map[i]);
            break;
        
            case "road":
                arrRoads.push(map[i]);
            break;

            case "actual":
                actualCell=map[i].cell.id;
                arrCuadrosAct.push(actualCell);
            break;

            case "meta":
                arrRoads.push(map[i]);
                meta=map[i].cell.id;
                arrCuadrosAct.push(meta);
            break;

            default:
            break;
        };
    };

    // Espera un tiempo
    await new Promise(resolve => setTimeout(resolve, 2000));
}

async function setPrefence(){

    await setCells(); // Espera a que la función 1 termine antes de continuar

    var arrCuadrosAct2 = [];

    document.getElementById(meta).innerHTML = "x";

    for(k=0; k!=5;k++){

        var long = arrCuadrosAct.length
        // sobre todos los actuales
        
        for(i=0; i!=long; i++){

            var numeros = arrCuadrosAct[i].split("-");
            var yAct = parseInt(numeros[0]);
            var xAct = parseInt(numeros[1]);

            // top
            var top = (yAct - 1) + "-" + xAct;
            if (isNaN(yAct) || isNaN(xAct)) {
                console.error("Not a number");
            } else {
                console.log("Top: " + top);
                if(document.getElementById(top)){
                    if(document.getElementById(top).innerHTML==""){
                        document.getElementById(top).innerHTML = contadorDeCercania;
                    }
                } 
            }

            // bot
            var bot = (yAct + 1) + "-" + xAct;
            if (isNaN(yAct) || isNaN(xAct)) {
                console.error("Not a number");
            } else {
                console.log("Bot: " + bot);
                if(document.getElementById(bot)){
                    if(document.getElementById(bot).innerHTML==""){
                        document.getElementById(bot).innerHTML = contadorDeCercania;
                    }
                } 

            }

            // left
            var left = yAct + "-" + (xAct - 1);
            if (isNaN(yAct) || isNaN(xAct)) {
                console.error("Not a number");
            } else {
                console.log("Left: " + left);
                if(document.getElementById(left)){
                    if(document.getElementById(left).innerHTML==""){
                        document.getElementById(left).innerHTML = contadorDeCercania;
                    }
                } 
            }

            // right
            var right = yAct + "-" + (xAct + 1);
            if (isNaN(yAct) || isNaN(xAct)) {
                console.error("Not a number");
            } else {
                console.log("Right: " + right);
                if(document.getElementById(right)){
                    if(document.getElementById(right).innerHTML==""){
                        document.getElementById(right).innerHTML = contadorDeCercania;
                    }
                } 
            }

            
            arrCuadrosAct2.push(top, bot, left, right);

        }

        arrCuadrosAct=arrCuadrosAct2;

        contadorDeCercania++;

    };

    

}