class Terminal {
    constructor(columns, id) {
        //will work on later
        document.getElementById(id).style.width = columns + "ch" //lets say 80 columns, should be width:80ch
        this.id = id;
    }

    print(text){
        document.getElementById(this.id).innerHTML += text
    }
}