var arrWalls = [];
var arrRoads = [];
var actualCell;
var meta;

var xAct;
var yAct;

var arrCuadrosAct = [];

var check2 = 0;


var contadorDeCercania = 0;

function empezar() {
    clickModeV = null;
    preferenceCalc();
}

function preferenceCalc(){
    setCells();
    setPrefence();
}

function checkGoalStart() {

    check2 = 0;

    // check if there is a goal and a starting point
    for(i=0; i!=map.length; i++){

        switch (map[i].cell.type) {
            case "actual":
                check2++
            break;

            case "meta":
                check2++
            break;

            default:
            break;
        };

    };

}

// calculate cell preference
async function setCells(){

    checkGoalStart();
    if(check2!=2){
        console.error("Starting point and goal needed.");
        return
    }

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
    await new Promise(resolve => setTimeout(resolve, 1000));
}

var intervalCalc
var arrCuadrosAct2 

async function setPrefence(){

    if(check2!=2){
        return
    }

    await setCells(); // Espera a que la función 1 termine antes de continuar

    arrCuadrosAct2 = [];

    if(visualizarPeso){
        document.getElementById(meta).innerHTML = " ";
    }

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
        var objTop;
        for(z=0; z!=map.length; z++){
            if(map[z].cell.id == top){
                objTop=map[z]
            }
        }

        if(arrRoads.includes(top) && objTop.cell.prio==undefined){
            if (isNaN(yAct) || isNaN(xAct)) {
                console.error("Not a number");
            } else {
                // console.log("Top: " + top);
                for(g=0; g!=map.length; g++){
                    if(top == map[g].cell.id){
                        map[g].cell.prio=contadorDeCercania;
                    }
                }

                if(visualizarPeso){
                    if(document.getElementById(top)){
                        if(document.getElementById(top).innerHTML==""){
                            document.getElementById(top).innerHTML = contadorDeCercania;
                        }
                    } 
                }
                arrCuadrosAct2.push(top)
            }
        }


        // bot
        var bot = (yAct + 1) + "-" + xAct;
        var objBot;
        for(z=0; z!=map.length; z++){
            if(map[z].cell.id == bot){
                objBot=map[z]
            }
        }

        if(arrRoads.includes(bot) && objBot.cell.prio==undefined){
            if (isNaN(yAct) || isNaN(xAct)) {
                console.error("Not a number");
            } else {
                // console.log("Bot: " + bot);
                for(g=0; g!=map.length; g++){
                    if(bot == map[g].cell.id){
                        map[g].cell.prio=contadorDeCercania;
                    }
                }

                if(visualizarPeso){
                    if(document.getElementById(bot)){
                        if(document.getElementById(bot).innerHTML==""){
                            document.getElementById(bot).innerHTML = contadorDeCercania;
                        }
                    } 
                }
                arrCuadrosAct2.push(bot)
            }
        }

        // left
        var left = yAct + "-" + (xAct - 1);
        var ojbLeft;
        for(z=0; z!=map.length; z++){
            if(map[z].cell.id == left){
                ojbLeft=map[z]
            }
        }

        if(arrRoads.includes(left) && ojbLeft.cell.prio==undefined){
            if (isNaN(yAct) || isNaN(xAct)) {
                console.error("Not a number");
            } else {
                // console.log("Left: " + left);
                for(g=0; g!=map.length; g++){
                    if(left == map[g].cell.id){
                        map[g].cell.prio=contadorDeCercania;
                    }
                }

                if(visualizarPeso){
                    if(document.getElementById(left)){
                        if(document.getElementById(left).innerHTML==""){
                            document.getElementById(left).innerHTML = contadorDeCercania;
                        }
                    }
                }
                arrCuadrosAct2.push(left)
            }
        }

        // right
        var right = yAct + "-" + (xAct + 1);
        var ojbRight;
        for(z=0; z!=map.length; z++){
            if(map[z].cell.id == right){
                ojbRight=map[z]
            }
        }

        if(arrRoads.includes(right) && ojbRight.cell.prio==undefined){
            if (isNaN(yAct) || isNaN(xAct)) {
                console.error("Not a number");
            } else {
                // console.log("Right: " + right);
                for(g=0; g!=map.length; g++){
                    if(right == map[g].cell.id){
                        map[g].cell.prio=contadorDeCercania;
                    }
                }

                if(visualizarPeso){
                    if(document.getElementById(right)){
                        if(document.getElementById(right).innerHTML==""){
                            document.getElementById(right).innerHTML = contadorDeCercania;
                        }
                    }
                }

                arrCuadrosAct2.push(right)
            }
        }

    }

    arrCuadrosAct=[];

    arrCuadrosAct=arrCuadrosAct2;

    // console.log(arrCuadrosAct)

    contadorDeCercania++;

    if(arrCuadrosAct.length==0){
        clearInterval(intervalCalc);
        start();
    }

}

function start(){

    arrCuadrosAct3 = [];
    
    for(i=0; i!=1; i++){

        var numeros = actualCell.split("-");
        var yAct = parseInt(numeros[0]);
        var xAct = parseInt(numeros[1]);

        // top
        var top = (yAct - 1) + "-" + xAct;
        var objTop;
        for(z=0; z!=map.length; z++){
            if(map[z].cell.id == top){
                objTop=map[z];
                arrCuadrosAct3.push(objTop.cell.id);
            }
        }

        // bot
        var bot = (yAct + 1) + "-" + xAct;
        var objBot;
        for(z=0; z!=map.length; z++){
            if(map[z].cell.id == bot){
                objBot=map[z];
                arrCuadrosAct3.push(objBot.cell.id);
            }
        }

        // left
        var left = yAct + "-" + (xAct - 1);
        var ojbLeft;
        for(z=0; z!=map.length; z++){
            if(map[z].cell.id == left){
                ojbLeft=map[z];
                arrCuadrosAct3.push(ojbLeft.cell.id);
            }
        }

        // right
        var right = yAct + "-" + (xAct + 1);
        var ojbRight;
        for(z=0; z!=map.length; z++){
            if(map[z].cell.id == right){
                ojbRight=map[z];
                arrCuadrosAct3.push(ojbRight.cell.id);
            }
        }

        // console.log(`
        // Act: ${actualCell}
        // Top: ${top}
        // Bot: ${bot}
        // Left: ${left}
        // Right: ${right}
        // `)

    }

    // useless
    var

    objetosAct = [];

    
    if(objBot && objBot.cell.prio!=undefined)objetosAct.push(objBot.cell.prio);
    if(objTop && objTop.cell.prio!=undefined)objetosAct.push(objTop.cell.prio);
    if(ojbLeft && ojbLeft.cell.prio!=undefined)objetosAct.push(ojbLeft.cell.prio);
    if(ojbRight && ojbRight.cell.prio!=undefined)objetosAct.push(ojbRight.cell.prio);

    // console.log("Prio "+objTop.cell.prio, objBot.cell.prio, ojbLeft.cell.prio, ojbRight.cell.prio)
    // console.log(objetosAct)

    const min = Math.min(...objetosAct)
    
    // console.log(min);

    for(i=0; i!=map.length; i++){
        if(map[i].cell.type == "actual"){
            map[i].cell.type = "actual2"
            document.getElementById(map[i].cell.id).classList.remove("actual");
            document.getElementById(map[i].cell.id).classList.add("actual2");
        }
    }

    var bandCheck3=false;

    for(i=0; i!=map.length; i++){
        if(bandCheck3==false && map[i].cell.prio == min && arrCuadrosAct3.includes(map[i].cell.id)){
            map[i].cell.type = "actual"
            document.getElementById(map[i].cell.id).classList.add("actual");
            actualCell=map[i].cell.id;
            bandCheck3=true;
        }
    }

    if(min==0) return

    setTimeout(() => {
        start()
    }, 100);

}
