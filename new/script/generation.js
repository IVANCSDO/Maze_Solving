var map = [];
var row = 0;
var column = 0;
var sizeX = 10;
var sizeY = 10;
var bandColor = true;

var clickModeV = null;

var visualizarPeso=false;

function laberintoDefaul() { 

    if(window.innerWidth < 700){
        document.getElementById("block").hidden=false;
    }
    // create cells in the format of: "x-y
    for(i=0; i!=sizeY; i++){
        for(j=0; j!=sizeX; j++){
            var cell = i+"-"+j;
            if(bandColor){
                var cell2 = {
                    cell:{
                        status: "blank",
                        id: cell,
                        x: j,
                        y: i,
                        prio: undefined,
                        color: 1,
                        type: "road"
                    }
                };
            }else{
                var cell2 = {
                    cell:{
                        status: "blank",
                        id: cell,
                        x: j,
                        y: i,
                        prio: undefined,
                        color: 2,
                        type: "road"
                    }
                };
            }
            map.push(cell2);
            createCell(cell);
            compobarBandera(j);
        }
    }
    var lienz = document.getElementById("lienzo");
    // console.log(map)
    lienz.style.width = sizeX*5+"0px";

    newEvent()
}

function createCell (cell) {
    var lienz = document.getElementById("lienzo");

    if(bandColor == true){
        lienz.innerHTML += `
        <div class="cell clear" id="${cell}"></div>
        `;
    }else{
        lienz.innerHTML += `
        <div class="cell dark" id="${cell}"></div>
        `;
    }
}

function compobarBandera(j) {
    if(j==sizeX-1){
        if(sizeX%2 == 0){
            return
        }
    }
    if(bandColor){
        bandColor = false;
    }else{
        bandColor = true;
    }
}

function removeClass(){
    document.getElementById("botonInicio").classList.remove("inicioAct");
    document.getElementById("botonPared").classList.remove("paredAct");
    document.getElementById("botonPared2").classList.remove("pared2act");
    document.getElementById("botonMeta").classList.remove("metaAct");
}

function clickMode(n) { 
    clickModeV=n;
    switch (clickModeV) {
        case 1:
            removeClass();
            document.getElementById("botonPared").classList.add("paredAct");

        break;

        case 2:
            removeClass();
            document.getElementById("botonPared2").classList.add("pared2act");

        break;

        case 3:
            removeClass();
            document.getElementById("botonInicio").classList.add("inicioAct");

        break;

        case 4:
            removeClass();
            document.getElementById("botonMeta").classList.add("metaAct");

        break;

        default:
        break;
    };

}

function newEvent(){
    var elementos = document.getElementsByClassName('cell');

    for (var i = 0; i < elementos.length; i++) {
        elementos[i].addEventListener('click', changeClass);
    }
}

function changeClass() {

    switch (clickModeV) {
        case 1:
            // remove all classlist
            this.classList.remove("meta");
            this.classList.remove("actual");
            this.classList.remove("wall");
            // add classlist
            this.classList.add("wall");

            // updateData
            updateData("wall", this.id)
        break;
    
        case 2:
            // remove all classlist
            this.classList.remove("meta");
            this.classList.remove("actual");
            this.classList.remove("wall");

            updateData("road", this.id)
        break;

        case 3:
            removestart();
            // remove all classlist
            this.classList.remove("meta");
            this.classList.remove("actual");
            this.classList.remove("wall");
            // add classlist
            this.classList.add("actual");

            // updateData
            updateData("actual", this.id)
        break;

        case 4:
            removeGoal();
            // remove all classlist
            this.classList.remove("meta");
            this.classList.remove("actual");
            this.classList.remove("wall");
            // add classlist
            this.classList.add("meta");

            // updateData
            updateData("meta", this.id)
        break;

        default:
        break;
    };

}

function removeGoal() {

    for(i=0; i!=map.length; i++){
        if(map[i].cell.type == "meta"){
            map[i].cell.type = "road";
            document.getElementById(map[i].cell.id).classList.remove("meta");
        };
    };
}

function removestart() {

    for(i=0; i!=map.length; i++){
        if(map[i].cell.type == "actual"){
            map[i].cell.type = "road";
            document.getElementById(map[i].cell.id).classList.remove("actual");
        };
    };
}

function updateData(value, id) {
    for(i=0; i!=map.length; i++){
        if(map[i].cell.id == id){
            map[i].cell.type = value;
        };
    };
}

function verPeso(){

    if(visualizarPeso){
        visualizarPeso=false;
        document.getElementById("botonPeso").style.backgroundColor="red"
    }else{
        visualizarPeso=true;
        document.getElementById("botonPeso").style.backgroundColor="green"
    }

}

function reset(){
    location.reload()
}

function disableB(){
    document.getElementById("botonInicio").style.opacity=0.5;
    document.getElementById("botonPared").style.opacity=0.5;
    document.getElementById("botonPared2").style.opacity=0.5;
    document.getElementById("botonMeta").style.opacity=0.5;


    document.getElementById("botonInicio").disabled=true;
    document.getElementById("botonPared").disabled=true;
    document.getElementById("botonPared2").disabled=true;
    document.getElementById("botonMeta").disabled=true;
}
