function logMessage(value: any) {
    console.log(value);
}

logMessage('hello');
logMessage(100);


function logMessage2(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}

logMessage2('hello')
logMessage2(100)

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person) {
    someone.name;
}

askSomeone({ name: '권혁', skill: '프론트엔드' })
askSomeone({ name: '권혁', age: 10 })


let seho2: string | number | boolean;
let capt: string & number & boolean;

function askSomeone2(someone: Developer & Person) {
    someone.name
    someone.skill;
}

askSomeone2({ name: '권혁', skill: '프론트엔드', age: 10 })