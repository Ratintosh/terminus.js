class Terminal {
    constructor(columns, id) {
        //will work on later
        this.id = id;
    }

    print(text){
        document.getElementById(this.id).innerHTML += text
    }
}