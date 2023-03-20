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
