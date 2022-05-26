class Observer {
    constructor(){

    }
}

class Student{
    constructor(){
        this.observers = [];
    }

    subscribe(observer){
        this.observers.push(observer);
    }

    unsubscribe(observer){
        this.observers = this.observers.fliter((element) =>{
            return observer !== element;
        })
    }
    notify(){
        
    }
    get observers(){
        return this.observers;
    }
    set observers(observers){
        this.observers = observers;
    }
}