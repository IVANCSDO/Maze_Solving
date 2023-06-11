var map = [];
var row = 0;
var column = 0;
var sizeX = 10;
var sizeY = 10;
var bandColor = true;

var clickModeV = null;

function laberintoDefaul() { 
    // create cells in the format of: "x-y
    for(i=0; i!=sizeY-1; i++){
        for(j=0; j!=sizeX; j++){
            var cell = i+"-"+j;
            if(bandColor){
                var cell2 = {
                    cell:{
                        status: "blank",
                        id: cell,
                        prio: null,
                        color: 1
                    }
                };
            }else{
                var cell2 = {
                    cell:{
                        status: "blank",
                        id: cell,
                        prio: null,
                        color: 2
                    }
                };
            }
            map.push(cell2);
            createCell(cell);
            compobarBandera(j);
        }
    }
    var lienz = document.getElementById("lienzo");
    console.log(map)
    lienz.style.width = sizeX*5+"0px";

    newEvent()
}

function createCell (cell) {
    var lienz = document.getElementById("lienzo");

    if(bandColor == true){
        lienz.innerHTML += `
        <div class="cell clear" id="cuadrado-${cell}"></div>
        `;
    }else{
        lienz.innerHTML += `
        <div class="cell dark" id="cuadrado-${cell}"></div>
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

function clickMode(n) { 
    clickModeV=n
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

            this.classList.add("wall");
        break;
    
        case 2:
            // remove all classlist
            this.classList.remove("meta");
            this.classList.remove("actual");
            this.classList.remove("wall");
        break;

        case 3:
            // remove all classlist
            this.classList.remove("meta");
            this.classList.remove("actual");
            this.classList.remove("wall");

            this.classList.add("actual");

        break;

        case 4:
            // remove all classlist
            this.classList.remove("meta");
            this.classList.remove("actual");
            this.classList.remove("wall");

            this.classList.add("meta");

        break;

        default:
        break;
    }

}
