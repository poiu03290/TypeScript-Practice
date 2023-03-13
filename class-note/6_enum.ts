enum Shoes {
    Nike,
    Adidas = '아디다스'
}

let myShoes = Shoes.Nike;
let myShoes2 = Shoes.Adidas;
console.log(myShoes);
console.log(myShoes2);

enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer) {
    if (answer === Answer.Yes){
        console.log('정답입니다.')
    }
    if (answer === Answer.No) {
        console.log('오답입니다.')
    }
}

askQuestion(Answer.Yes);
// askQuestion('Yes');
