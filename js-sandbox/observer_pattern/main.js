class Observer {
    constructor(){
        this._observer = new Set();
    }

    subscribe(observer){
        this._observer.add(observer);
    }

    notify(){
        this._observer.forEach((observer) => observer());
    }
}
class TextView {
    constructor(model){
        this.$target = document.createElement("div");
        this.textModel = model;
        this.textModel.subscribe(this.render.bind(this));
        this.render();
    }

    render() {
        console.log("render 호출");
        const text = this.textModel.getText();
        this.$target.innerHTML = `<div>${text}</div>`;
    }
}
class TextModel extends Observer{
    constructor(){
        super();
        this.text = "Hi !";
    }

    getText(){
        return this.text;
    }

    setTexts(text){
        this.text = text;
        this.notify();
    }
}


class ChangeTextBtn {
    constructor(model){
        console.log(model);
        this.$target = document.createElement("div");
        this.textModel = model;
        this.render();
        this.$target.addEventListener("click", this.handleClick.bind(this)); 
    }

    render(){
        this.$target.innerHTML = `
        <input type='text'/>
        <button>text change</button>
        `;
        
        document.body.appendChild(this.$target);
    }

    handleClick({target}){
        if (target.tagName !== "BUTTON") return;
        const input = this.$target.querySelector("input");
        this.textModel.setTexts(input.value);
        input.value = "";
    }
}


let textModelObject = new TextModel();
let textBtn = new ChangeTextBtn(textModelObject);
let textViews = new TextView(textModelObject);

console.log("find!");


