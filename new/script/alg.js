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
                arrRoads.push(map[i].cell.id);
            break;

            case "actual":
                actualCell=map[i].cell.id;
                arrCuadrosAct.push(actualCell);
            break;

            case "meta":
                arrRoads.push(map[i].cell.id);
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

var intervalCalc
var arrCuadrosAct2 

async function setPrefence(){

    await setCells(); // Espera a que la función 1 termine antes de continuar

    arrCuadrosAct2 = [];

    document.getElementById(meta).innerHTML = "x";

    intervalCalc = setInterval(() => {
        calcPref()
    }, 50);

}


function calcPref() {
    var long = arrCuadrosAct.length
    // sobre todos los actuales

    arrCuadrosAct2 = [];
    
    for(i=0; i!=long; i++){

        var numeros = arrCuadrosAct[i].split("-");
        var yAct = parseInt(numeros[0]);
        var xAct = parseInt(numeros[1]);

        // top
        var top = (yAct - 1) + "-" + xAct;
        if(arrRoads.includes(top) && document.getElementById(top).innerHTML==""){
            if (isNaN(yAct) || isNaN(xAct)) {
                console.error("Not a number");
            } else {
                // console.log("Top: " + top);
                for(g=0; g!=map.length; g++){
                    if(top == map[g].cell.id){
                        map[g].cell.prio=contadorDeCercania;
                    }
                }

                if(document.getElementById(top)){
                    if(document.getElementById(top).innerHTML==""){
                        document.getElementById(top).innerHTML = contadorDeCercania;
                    }
                } 
                arrCuadrosAct2.push(top)
            }
        }


        // bot
        var bot = (yAct + 1) + "-" + xAct;
        if(arrRoads.includes(bot) && document.getElementById(bot).innerHTML==""){
            if (isNaN(yAct) || isNaN(xAct)) {
                console.error("Not a number");
            } else {
                // console.log("Bot: " + bot);
                for(g=0; g!=map.length; g++){
                    if(bot == map[g].cell.id){
                        map[g].cell.prio=contadorDeCercania;
                    }
                }

                if(document.getElementById(bot)){
                    if(document.getElementById(bot).innerHTML==""){
                        document.getElementById(bot).innerHTML = contadorDeCercania;
                    }
                } 
                arrCuadrosAct2.push(bot)
            }
        }

        // left
        var left = yAct + "-" + (xAct - 1);
        if(arrRoads.includes(left) && document.getElementById(left).innerHTML==""){
            if (isNaN(yAct) || isNaN(xAct)) {
                console.error("Not a number");
            } else {
                // console.log("Left: " + left);
                for(g=0; g!=map.length; g++){
                    if(left == map[g].cell.id){
                        map[g].cell.prio=contadorDeCercania;
                    }
                }

                if(document.getElementById(left)){
                    if(document.getElementById(left).innerHTML==""){
                        document.getElementById(left).innerHTML = contadorDeCercania;
                    }
                }
                arrCuadrosAct2.push(left)
            }
        }

        // right
        var right = yAct + "-" + (xAct + 1);
        if(arrRoads.includes(right) && document.getElementById(right).innerHTML==""){
            if (isNaN(yAct) || isNaN(xAct)) {
                console.error("Not a number");
            } else {
                // console.log("Right: " + right);
                for(g=0; g!=map.length; g++){
                    if(right == map[g].cell.id){
                        map[g].cell.prio=contadorDeCercania;
                    }
                }

                if(document.getElementById(right)){
                    if(document.getElementById(right).innerHTML==""){
                        document.getElementById(right).innerHTML = contadorDeCercania;
                    }
                }
                arrCuadrosAct2.push(right)
            }
        }

    }

    arrCuadrosAct=[];

    arrCuadrosAct=arrCuadrosAct2;

    console.log(arrCuadrosAct)

    contadorDeCercania++;

    if(arrCuadrosAct.length==0){
        clearInterval(intervalCalc);
    }

}