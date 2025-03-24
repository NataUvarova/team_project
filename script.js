let choose_language_practic = document.querySelector(".practic")
let choose_language_test = document.querySelector(".test")
let button_verify = document.querySelector("button")
let tds = document.querySelectorAll("td")
let container_start_h3 = document.querySelector(".h3")
let cookie = false
let cookies = document.cookie.split('; ')

for (let i = 0; i < cookies.length; i += 1) {
    if (cookies[i].split('=')[0] == "numbers_high_score") { 
        cookie = cookies[i].split('=')[1]
        break
    }
}



class Practic {
    constructor() {
        this.english = [
            ["apple", "яблуко"],
            ["horse", "кінь"],
            ["game", "гра"],
            ["world", 'світ'],
            ['car', "машина"],
            ['house', 'дім'],
            ["mouse", "миша"],
            ["tree", "дерево"],
            ["nose", "ніс"],
            ["study", 'вивчення'],
            ['grass', "трава"],
            ['book', 'книга'],
            ['subject', "предмет"],
            ['mathematics', 'математика'],
            ["field", "поле"],
            ["the developer", "розробник"],
            ["translator", "перекладач"],
            ["dog", 'собака'],
            ['train', "поїзд"],
            ['ticket', 'квиток']
        ]
        this.japan = [
            ["りんご", "яблуко"],
            ["本", "книга"],
            ["アルバム", "альбом"],
            ["手ぬぐい", "мочалка"],
            ["鉛筆", "олівець"],
            ["猫", "кіт"],
            ["じゃがいも", "картопля"],
            ["花", "квітка"],
            ["ノート", "зошит"],
            ["店", "магазин"],
            ["テーブル", "стіл"],
            ["椅子", "стульчик"],
            ["犬", "собака"],
            ["太陽", "сонце"],
            ["川", "річка"],
            ["地球", "земля"],
            ["社長", "президент"],
            ["食べ物", "їжа"],
            ["キャップ", "шапка"],
            ["機械", "машина"]
        ]
        this.italian = [
            ["macchina", "машина"],
            ["Saluti", "привіт"],
            ["sorriso", "посмішка"],
            ["pomodoro", "помідор"],
            ["Grazie", "дякую"],
            ["zucchero", "цукор"],
            ["Uomo", "людина"],
            ["mucca", "корова"],
            ["Pizza", "піца"],
            ["foresta", "ліс"],
            ["uva", "виноград"],
            ["divano", "диван"],
            ["trattore", "трактор"],
            ["Bambino", "дитина"],
            ["trasporto", "транспорт"],
            ["stadio", "стадіон"],
            ["scuola", "школа"],
            ["dolci", "солодощі"],
            ["Bellissimo", "красивий"],
            ["insegnamento", "навчання"]
        ]
        this.czech = [
            ["výuka", "навчання"],
            ["déšť", "дощ"],
            ["zvířat", "тварини"],
            ["jazyk", "мова"],
            ["láska", "кохання"],
            ["měsíc", "місяць"],
            ["dovolená", "канікули"],
            ["dívka", "дівчина"],
            ["jídlo", "їжа"],
            ["chlapec", "хлопець"],
            ["hodnocení", "оцінка"],
            ["semafory", "світлофор"],
            ["matka", "мама"],
            ["květ", "квітка"],
            ["ovoce", "фрукти"],
            ["zelenina", "овочі"],
            ["tabulka", "стіл"],
            ["stavební dělník", "будівельник"],
            ["dům", "будинок"],
            ["štěstí", "щастя"]

        ]
        this.poland = [
            ["szczęście", "щастя"],
            ["rodzina", "родина"],
            ["gwiazda", "зірка"],
            ["piłka", "м'яч"],
            ["sposób", "шлях"],
            ["muzyka", "музика"],
            ["rośliny", "рослини"],
            ["kurczak", "курка"],
            ["pszczoły", "бджоли"],
            ["jabłko", "яблуко"],
            ["kwietnik", "клумба"],
            ["słodycze", "солодощі"],
            ["programista", "програміст"],
            ["kot", "кіт"],
            ["mrówka", "мураха"],
            ["las", "ліс"],
            ["restauracja", "ресторан"],
            ["budzik", "будильник"],
            ["mróz", "мороз"],
            ["dzieci", "діти"]
]
        this.gemeny = [
            ["Kinder", "діти"],
            ["Großmutter", "бабуся"],
            ["Maschine", "машина"],
            ["Kürbis", "гарбуз"],
            ["orange", "апельсин"],
            ["Kleidung", "одяг"],
            ["Geschäft", "бізнес"],
            ["Geld", "гроші"],
            ["Spiel", "гра"],
            ["Leben", "життя"],
            ["Urlaub", "свято"],
            ["Frau", "жінка"],
            ["Blumen", "квіти"],
            ["Seele", "душа"],
            ["Frieden", "мир"],
            ["Moment", "мить"],
            ["kombinieren", "комбайн"],
            ["Sonne", "сонце"],
            ["Geschäft", "магазин"],
            ["Früchte", "фрукти"]

        ]

    }

    train_language(language) { //практика//
        let list = ""
        if (language == "english") {
            list = this.english
        } else if (language == "japan") {
            list = this.japan
        } else if (language == "italian") {
            list = this.italian
        } else if (language == "czech") {
            list = this.czech
        } else if (language == "poland") {
            list = this.poland
        } else if (language == "gemeny") {
            list = this.gemeny
        }


        for (let i = 0; i < list.length; i++) {
            tds[i].innerHTML = ${list[i][0]} - ${list[i][1]}
        }
    }
}

class Test extends Practic {
    constructor() {
        super()
        this.answer = ""
        this.last_n = ''
        this.start = true
    }
    choose_language(language) {
        this.list = ''
        this.count_questions = 0
        this.correct_answers = 0
        if (language == "english") {
            this.list = this.english
        } else if (language == "japan") {
            this.list = this.japan
        } else if (language == "italian") {
            this.list = this.italian
        } else if (language == "czech") {
            this.list = this.czech
        } else if (language == "poland") {
            this.list = this.poland
        } else if (language == "gemeny") {
            this.list = this.gemeny
        }
        console.log(1)
        this.randomize_words()
    }
    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {  // Цикл проходиться по всіх елементах з кінця до початку
            let j = Math.floor(Math.random() * (i + 1));  // Вибираємо індекс рандомного елемента
            [array[i], array[j]] = [array[j], array[i]] // Міняємо місцями з поточним елементом.
        }
        return array;
    }
    randint(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }
    randomize_words() {
        this.list = this.shuffle(this.list)
        if (this.start) {
            check()
            this.start = false
        }
        this.show_question()
        console.log(2)
    }
    show_question() {

        let n
        while (true) {
            n = this.randint(0, this.list.length - 1)
            if (n != this.last_n) {
                this.last_n = n
                break
            }
        }
        document.querySelector("#word").innerHTML = this.list[n][0]
        this.answer = this.list[n][1]

    }
    verify() {
        this.count_questions += 1
        if (document.querySelector("#answer").value == this.answer) {
            this.correct_answers += 1
            this.show_question()
        }
        else {
            this.show_question()
        }
    }


}



let mova = new Practic()
let test = new Test()

if (cookie) {
    let data = cookie.split('/')
    container_start_h3.innerHTML = <h3>Ви дали ${data[1]} правильних відповідей із ${data[0]}.Точність ${Math.round(data[1] * 100 / data[0])}%.</h3>
}

function check() {
    setTimeout(function () {
        let new_cookie = number_high_score = ${test.count_questions}/${test.correct_answers}; max-age = 10000000000000000000
        document.cookie = new_cookie
        alert(Кінець! Ви зробили ${test.correct_answers} правильних відповідей з ${test.count_questions})
        test.start = true
    }, 1000 * 60)
}
if (choose_language_practic){
choose_language_practic.addEventListener("click", function () {
    console.log(choose_language_practic.value)
    mova.train_language(choose_language_practic.value)
})}

choose_language_test.addEventListener("click", function () {

    test.choose_language(choose_language_test.value)
})


if (button_verify){
button_verify.addEventListener("click", function () {

    test.verify()
    button_verify.value = ''

})}