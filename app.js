let btn = document.getElementsByClassName('submitBtn')[0];

btn.addEventListener('click', function() {
    let input = document.getElementsByClassName('vergiNo')[0];
    let value = input.value;
    if(value.length >10 || value.length <10) {
        alert('Vergi numaranızı kontrol ediniz.');
        return false;
    }
    let result = calculate(value);
    console.log(result);
    
});

function calculate(value){
    let first = value.substring(0,1);
    let second = value.substring(1,2);
    let third = value.substring(2,3);
    let fourth = value.substring(3,4);
    let fifth = value.substring(4,5);
    let sixth = value.substring(5,6);
    let seventh = value.substring(6,7);
    let eighth = value.substring(7,8);
    let ninth = value.substring(8,9);
    let tenth = value.substring(9,10);

    let firstNumber = parseInt(first);
    let secondNumber = parseInt(second);
    let thirdNumber = parseInt(third);
    let fourthNumber = parseInt(fourth);
    let fifthNumber = parseInt(fifth);
    let sixthNumber = parseInt(sixth);
    let seventhNumber = parseInt(seventh);
    let eighthNumber = parseInt(eighth);
    let ninthNumber = parseInt(ninth);
    let tenthNumber = parseInt(tenth);

    let full_array = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber, seventhNumber, eighthNumber, ninthNumber];

    

    let firstStep = [];
    let secondStep = [];
    let thirdStep = [];
    let fourthStep = [];
    let fifthStep = [];
    let sixthStep = [];
    let seventhStep = [];

    //step 1 9'dan başlayarak 1'er azaltarak toplama
    let step1Start = 9;
    for (let index = 0; index < full_array.length; index++) {
        firstStep[index] = full_array[index] + step1Start;
        step1Start--;
    }

    //step 2 10'a bölümünden kalan
    for (let index = 0; index < firstStep.length; index++) {
        let mod = firstStep[index] %= 10;
        secondStep[index] = mod;
    }


    //step 3 2 üzeri index
    let customIndex = 0;
    for (let index = 9; index > 0; index--) {
        let us = Math.pow(2, index);
        let element = secondStep[customIndex] * us;
        thirdStep[customIndex] = element;
        customIndex++;
    }

    //step 4 9'a bölümünden kalan
    for (let index = 0; index < thirdStep.length; index++) {
        let mod2 = thirdStep[index] %= 9;
        fourthStep[index] = mod2;
    }

    //step son listeyi 5 toplama
    let total = 0;
    for (let index = 0; index < fourthStep.length; index++) {
        const elem = fourthStep[index];
        total += elem;
    }

    //step son 10'a bölümünden kalan
    let totalMod = total %= 10;

    //son step son değeri 10 dan çıkarma
    let lastStep = 10 - totalMod;

    if(parseInt(lastStep) == parseInt(tenthNumber)) {
        return 'Vergi numaranız doğru.'
    }else{
        return 'Vergi numaranız yanlış.' + parseInt(lastStep) + ' ----' + parseInt(tenthNumber);
    } 
}