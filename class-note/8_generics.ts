function logText<T>(text: T): T {
    console.log(text);
    return text
};

logText<string>('하이');




function logText2(text: string | number) {
    console.log(text)
    return text
}

logText2('10');
logText2(10);



function logText3<T>(text: T): T {
    console.log(text)
    return text
}

logText3<string>('10')
logText3<number>(10)


// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown {
    value: string;
    selected: boolean;
}

interface Dropdown1<T> {
    value: T;
    selected: boolean;
}


// 제네릭 타입 제한
function logText4<T>(text: T[]): T[] {
    console.log(text.length)
    return text
}

logText4(['hi', '10'])


// 제네릭 타입 제한2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}
function logText5<T extends LengthType>(text: T): T {
    console.log(text.length)
    return text
}

logText5({ length: 10 })

// 제네릭 타입 제한3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption("name")