//----------------------- EX1 -----------------------
/*Creați o funcție care primește ca și parametru un număr și returnează dublul său dacă numărul primit este impar, 
altfel returnează numărul scăzut cu 2 dacă este par. Afișați rezultatul în consolă.*/

function exercise1(nr) {
    if (nr % 2 != 0) {
        return nr * 2;
    } else if (nr % 2 == 0) {
        return nr - 2;
    }
}

console.log(`exercise1(9) = ${exercise1(9)} \nexercise1(8) = ${exercise1(8)}`);

//----------------------- EX2 -----------------------
console.log('-------------')

/*Creați o funcție care stochează intr-un array doar numerele prime dintr-un array primit ca si parametru. 
Parcurgeți array-ul folosind un “for loop”. Afișați rezultatul în consola.

Ex:
const arr = [1,2,3,4,5,6,7,8,9];
savePrimes(arr) => [1,2,3,5,7];*/

function savePrimes(arr) {

    // am creat un array function in interiorul functiei care primeste ca si parametru un numar si verifica daca e prim sau nu
    const isPrime = nr => {
        /* definitie numere prime: mai mari decat 1 si nu se divid decat cu ele insusi si cu 1
        
        verific daca numarul primit e multiplul oricarui numar mai mare ca 1 (adica restul diviziei e 0),
        daca da, returnez false, asta inseamna ca nu e prim */

        for (let i = 2; i < nr; i++) {
            if (nr % i === 0) return false;
        }

        /* ajunsi in punctul asta stim ca inca nu s-a facut return, deci inca nu s-a constatat ca nu ar fi prim, 
        ramane sa verificam daca e 1: in cazul in care e 1 voi returna false, altfel true */

        return nr !== 1;
    }

    /* cu ajutorul metodei filter creez un nou array cu toate elementele din cel vechi care 
    trec testul implementat in functia isPrime */
    const primeArray = arr.filter(isPrime);

    console.log(`initial array = ${arr} prime array =`);

    for (let i = 0; i < primeArray.length; i++) {
        console.log(primeArray[i]);
    }
}

savePrimes([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//----------------------- EX3 -----------------------
console.log('-------------')

/*Creați o funcție care stochează intr-un array doar strings dintr-un array primit ca si parametru. 
Parcurgeți array-ul folosind “forEach”. Afișați rezultatul în consola.

Ex:
saveStrings([1, ‘1’, ‘salut’, 2, 6, true, ‘true’]) -> [‘1’, ‘salut’, ‘true’]
saveStrings([1,2,3,4]) -> []
saveStrings([‘1’,’2’,’3’,’4’]) -> [‘1’,’2’,’3’,’4’]*/

let saveStrings = (arr) => {

    const stringArray = arr.filter(element => typeof element == 'string');

    console.log(`initial array = [1, "1", "salut", 2, 6, true, "true"] string array =`);

    stringArray.forEach(element => {
        console.log(element)
    });
}

saveStrings([1, "1", "salut", 2, 6, true, "true"]);

//----------------------- EX4 -----------------------
console.log('-------------')

/*Creați o funcție care adună cifrele impare ale unui număr primit ca și parametru de tip string folosind  “for loop” si keyword-ul “continue”. 

Ex: addDigits(“1523”) => 9
Hint: pentru a transforma un caracter/string în număr folosiți operatorul cast.*/

let addDigits = (str) => {

    const numberArray = [...str].map(x => parseInt(x));
    let sumOfOddDigits = 0;

    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] % 2 == 0)
            continue;
        sumOfOddDigits += numberArray[i];
    }

    return sumOfOddDigits;
}

console.log(`addDigits('156623') = ${addDigits('156623')}`);

//----------------------- EX5 -----------------------
console.log('-------------')

//Creați un switch cu cel puțin 5 case-uri din care cel puțin 2 să aibă același rezultat, după exemplul prezentat la curs.

const day = 'thursday';

switch (day) {

    case 'monday':
    case 'tuesday':
        console.log('Unfortunately you sent the homework too late! :(');
        break;
    case 'wednesday':
        console.log('Dear early bird, you will get feedback soon!');
        break;
    case 'thursday':
    case 'friday':
    case 'saturday':
    case 'sunday':
        console.log('You will get feedback soon!');
        break;
    default:
        console.log("Uhm, sorry! No homework, no feedback.");
}