import { Injectable } from '@angular/core';
import { Human } from './human';

@Injectable()
export class HumanService {

private humans: Human[] = [];

constructor() { }

    getData() {
        return this.humans;
    }

    addHuman(age: number, height: number, weight: number, result: string) {
        this.humans.push(new Human(age, height, weight, result));
    }
}
