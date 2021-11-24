// boolean
const active: boolean = true;

// number
const integer: number = 6;
const floating: number = 1.6;
const binary: number = 0b1010;
const octal: number = 0o744;
const hex: number = 0x00f;

// string
const myName = 'Joe';
const yourName = "Béla";
const greet = `Hello, my name is ${myName}`;

// tagged template
function myTag(strings: TemplateStringsArray, personExp: string, ageExp: number) {
    const str0 = strings[0];
    const str1 = strings[1];
    const str2 = strings[2];

    let ageStr: string;
    if (ageExp > 99) {
        ageStr = 'too old';
    } else {
        ageStr = 'young';
    }

    return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

let person = 'Mike';
let age = 101;
let output = myTag`That ${person} is ${age}.`;