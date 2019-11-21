export class Human {
    constructor(protected age: number,
                protected height: number,
                protected weight: number) {}

    getAge() {
        return this.age;
    }

    getHeight() {
        return this.height;
    }

    getWeight() {
        return this.weight;
    }
}
