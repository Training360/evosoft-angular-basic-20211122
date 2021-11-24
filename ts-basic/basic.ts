// js types:
// primitives: boolean, number, string, null, undefined
// collections: array, object

class Greeter {
    name: string = '';
    constructor(name: string = '') {
        this.name = name;
    }

    greet() {
        return `Hi, my name is ${this.name}!`;
    }
}

const myGreet = new Greeter('Joe');
console.log( myGreet.greet() );

// Arrays:
const names: string[] = [
    'Orsi',
    'Peti',
    'Józsi',
];

const users: {name: string, age?: number}[] = [
    {
        name: 'Kiss Géza',
        age: 44,
    },
    {
        name: 'Nagy Péter',
    },
];

console.log(users[1].age);

// TS only: Tuple
type IOrder = [number, string, boolean];
let newOrder: IOrder = [3, 'hűtő', false];

let order: [number, string, boolean];
order = [1, 'vasaló', true]; // sor duplázása: shift+alt down
/* order = [1, 'szekrény', 1]; // error
order = [1, 'vasaló', true, false]; // error */

// TS only: Enum
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
console.log(c);

enum Status {Active=5, Disabled, Terminated=10};
console.log(Status.Disabled);

// TS only: any/void
const test: number = 5;
console.log( test.toPrecision(2) );

const calculator = (a: number): void => {
    console.log(a**2);
};

let value1: any = 'this is a string';
let strLength: number = (value1 as string).length;


// TypeScript OOP:
interface LabelledValue {
    label: string;
    size?: number;
}

function printLabel(labelObject: LabelledValue): void {
    console.log(labelObject.label);
}

let myObj: LabelledValue = {
    size: 40,
    label: 'Size',
};
printLabel(myObj);

interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = {x: 10, y: 20};
// p1.x = 40; // error

interface SquareConfig {
    color?: string;
    width?: number;
    [key: string]: any;
}

let conf: SquareConfig = {
    color: 'red',
    width: 200,
};
conf.color;
conf['maci'];

// 
interface Human {
    height: number;
    weigth: number;
    eyecolor: string;
}

class Leader {
    status: 'leader' | 'leiter' | 'CTO' | 'CFO' | 'CEO';
}

class Employee implements Human {
    height = 180;
    weigth = 100;
    eyecolor = 'brown';
}

class Boss extends Employee implements Leader {
    status: any;
}





