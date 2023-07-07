module.exports = class {
    constructor(a) {
        console.log(`Je suis dans le constructor du Module2`);
        this.a = a;
    }

    talk(){
        console.log(`Je sui un module class et est était init avec a=`,this.a);
    }
}