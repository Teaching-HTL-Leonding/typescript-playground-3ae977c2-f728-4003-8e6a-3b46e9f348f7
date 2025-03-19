class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hallo, mein Name ist ${this.name} und ich bin ${this.age} Jahre alt.`);
    }
}

// Objekt erstellen
const person = new Person("Max", 25);
person.greet();
