
const task8 = function () {


    // Napisz funkcję forEach, która przyjmie dwa argumenty:

    // dowolną tablicę,
    // dowolną funkcję callback.
    // Zadaniem funkcji powinna być przejście po każdym elemencie tablicy i wywołanie dla każdego z osobna funkcji callback. Tej, którą otrzymamy w drugim parametrze. Co ważne, ta funkcja callback powinna być wywołana z jednym argumentem, równym właśnie obsługiwanemu w danej chwili elementowi.

    // Możesz wspomóc się powrotem do pierwszego modułu z projektem pizzerii. Tam bardzo dużo czasu spędziliśmy nad omawianiem wykorzystania funkcji callback. Przykłady tam dostępne mogą Ci dużo rozjaśnić.

    // Np. takie wywołanie:


    const names = ['John', 'Amanda', 'Thomas']

    function forEach(names, cb) {
        for (let name of names) {
            cb(name)
        }
    }

    forEach(names, function (name) { console.log(name); });
}
//task8()


const task9 = function () {
    const names = ['John', 'Amanda', 'Thomas']

    names.forEach(name => console.log(name))

}
//task9()

const task10 = function () {

    //     Napisz funkcję formatName, która przyjmie w argumencie imię i nazwisko, a następnie zwróci poprawioną jego formę. Poprawioną, czyli taką, w której tylko pierwsza litera imienia i nazwiska będą duże, a pozostałe małe.

    // formatName('aMAnDa dOE'); // returns Amanda Doe
    // formatName('AMANDA DOE'); // returns Amanda Doe
    // formatName('john DOE'); // returns John Doe
    // Bardzo pomocne mogą być wbudowane w JS funkcje:

    // split – tę już znasz.
    // charAt – zwraca informacje o znaku obecnym na danej pozycji w stringu.
    // substr – pozwala na zwrócenie tylko części stringu (np. wszystkich liter z wyjątkiem pierwszej).
    // toUpperCase – pozwala na zmianę liter na duże (np. aa do AA).
    // toLowerCase – analogicznie jak wyżej, tylko w drugą stronę.
    // Uwaga! Załóż, że bierzemy pod uwagę tylko proste tożsamości. Nie musisz obawiać się, że funkcja otrzyma tylko imię albo dwuczłonowe nazwisko.




    const person1 = 'aMAnDa dOE'
    const person2 = 'AMANDA DOE'
    const person3 = 'john DOE'

    function formatName(name) {

        const splitStr = name.split(' ')

        const newStr = splitStr[0].charAt(0).toUpperCase() + splitStr[0].substr(1).toLowerCase();
        const newStr2 = splitStr[1].charAt(0).toUpperCase() + splitStr[1].substr(1).toLowerCase();


        return newStr + ' ' + newStr2


    }

    let newPerson1 = formatName('aMAnDa dOE'); // returns Amanda Doe 
    console.log(newPerson1);
    let newPerson2 = formatName('AMANDA DOE'); // returns Amanda Doe
    console.log(newPerson2);
    let newPerson3 = formatName('john DOE'); // returns John Doe
    console.log(newPerson3);

}
//task10()

const task11 = function () {

    // Przygotuj funkcję getEvensInRange, która przyjmie dwa argumenty:

    // liczbę wskazującą początek zakresu do sprawdzenia,
    // liczbę wskazującą jego koniec.
    // Zadaniem funkcji jest przejście po wszystkich liczbach wewnątrz podanego zakresu i zwrócenie tablicy, która będzie zawierać tylko te, które są parzyste.

    // Do wykonania zadania pomocne będzie przypomnienie sobie składni podstawowej pętli for oraz dzielenia modulo.

    // Przykład użycia funkcji:

    function getEvensInRange(lowNum, highNum) {

        const array = []
        for (let i = lowNum; i <= highNum; i++) {
            if (i % 2 == 0) array.push(i)  // if "if" in one line condition the {} is nti neteccary can just put in one line
        }
        return array
    }

    console.log(getEvensInRange(0, 9)); // returns [0, 2, 4, 6, 8]
    console.log(getEvensInRange(7, 12)); // returns [8, 10, 12]
}
//task11()

const task12 = function () {

    // Czas na ostatnią funkcję w niniejszym submodule. Przypuszczalnie najtrudniejszą. Chociaż, kto wie... może akurat łatwo sobie z nią poradzisz?

    // Twoim zadaniem jest napisanie funkcji o nazwie filter, która przyjmie dwa argumenty – dowolną tablicę oraz funkcję callback. Celem funkcji jest zwrócenie nowej przefiltrowanej tablicy, w której znajdą się tylko te elementy, dla których przekazana funkcja callback zwróci true.

    // Pomysł jest bardzo ciekawy. Dzięki takiej funkcji, bylibyśmy w stanie bardzo szybko i łatwo dowolnie przefiltrowywać wybraną tablicę. Wystarczy podać dane wejściowe i warunek do sprawdzenia (schowany w funkcji callback), a ta zwróci nam nowe dane. Już przefiltrowane!


    const array = [5, 9, 3, 8, 5, 12, 7]

    const names = ['John', 'Amanda', 'Thomas']
    function fileter(arr, cb) {
        const array2 = []

        for (let item of arr) {
            if (cb(item)) array2.push(item)
        }

        return array2
    }
    console.log(fileter(array, function (item) { return item % 2 === 0 })) // ta lnia modulo  zwraca reszte z dzielenia i odrazu porownuje do 0 w zwiazku z czym zwraca true or false 
    console.log(fileter(names, function (item) { return item.length === 4 })) // ta lnia modulo  zwraca reszte z dzielenia i odrazu porownuje do 0 w zwiazku z czym zwraca true or false 

}
task12()
