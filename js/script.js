
function zwrocA(tekst, litera) {
    let j = 0;
    let zmiana = tekst.toLowerCase();
    const myArray = zmiana.split('');
    let p = myArray.length;
    for (let i = 0; i < p; i++) {
        if (myArray[i] == litera) {
            j++;
        }


    } return (j);

}


console.log(zwrocA('Akademia 108', 'a'));
