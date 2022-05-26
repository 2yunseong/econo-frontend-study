import Observer from "./Observer.js";

export default class TextModel extends Observer{
    constructor(){
        super();
        this.text = "Hi !";
    }

    getText(){
        return this.text;
    }

    set text(text){
        this.text = text;
        this.notify();
    }
}
