class Cell {
    constructor (occupation=false, color="default"){
        this.occupation = occupation;
        this.color = color;
    }
    makeOccupied(color){
        this.occupation = true;
        this.color = color;
    }
    free(){
        this.occupation = false;
        this.color = "default";
    }
}

var field = Array(20).fill(null).map(()=>Array(10).fill(0)) // playing field
for(let i=0;i<20;i++){
    for(let j=0;j<10;j++){
        let freeCell = new Cell();
        field[i][j]=freeCell;
    }
}

var prev_field = Array(20).fill(null).map(()=>Array(10).fill(0)) // prev field
for(let i=0;i<20;i++){
    for(let j=0;j<10;j++){
        let freeCell = new Cell();
        prev_field[i][j]=freeCell;
    }
}

class Shape {
    constructor(type){
        this.type=type;
        this.rotation=0
        switch (type){
            case 1:
                this.row = 0;
                this.col = 3;
                break;
            case 2:
                this.row = 0;
                this.col = 3;
                break;
            case 3:
                this.row = 0;
                this.col = 3;
                break;
            case 4:
                this.row = 0;
                this.col = 4;
                break;
            case 5:
                this.row = 0;
                this.col = 3;
                break;
            case 6:
                this.row = 0;
                this.col = 3;
                break;
            case 7:
                this.row = 0;
                this.col = 3;
                break;
        }

    }
}

let freeCell = new Cell();
let occupiedCell = new Cell(true, "green");

var field = Array(20).fill(null).map(()=>Array(10).fill(0)) // playing field
for(let i=0;i<20;i++){
    for(let j=0;j<10;j++){
        let freeCell = new Cell();
        field[i][j]=freeCell;
    }
}

field[0][3].makeOccupied("red");
console.log(field);