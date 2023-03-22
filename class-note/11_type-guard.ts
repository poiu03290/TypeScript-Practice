interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'Tony', age: 23, skill: 'javascript' }
}

const tony = introduce();
console.log(tony.name);

if ((tony as Developer).skill) {
    const skill = (tony as Developer).skill;
    console.log(skill);
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined
}

if(isDeveloper(tony)) {
    console.log(tony.skill);
} else {
    console.log(tony.age);
}