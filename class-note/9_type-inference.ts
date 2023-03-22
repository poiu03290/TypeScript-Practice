// 타입 추론 기본 1
let a = 'abc'

function getB(b = 10) {
    let c = 'hi';
    return b + c;
}

// 타입 추론 기본 2
interface DropDown<T> {
    value: T;
    title: string;
}

let shoppingItem: DropDown<string> = {
    value: 'hello',
    title: 'title'
}

// 타입 추론 기본3
interface DropDown1<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<T> extends DropDown1<T> {
    description: string;
    tag: T;
}

let shoppingItem1: DropDown1<string> = {
    value: 'hello',
    title: 'title'
}

let detailedItem: DetailedDropdown<string> = {
    title: 'title',
    value: 'value',
    description: 'description',
    tag: 'tag'
}

// Best Common Type
const arr = [1, 2, true];