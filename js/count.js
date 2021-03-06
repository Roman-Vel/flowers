



//достаем значения во всех блоках с классом counter-group
let countBlocks=document.querySelectorAll('.counter-group');
//циклом перебираем количество таких блоков
for (let i=0; i<countBlocks.length; i++){
    // вешаем событие(функию) на клик в блоке
    countBlocks[i].onclick=function () {
        // достаем значения с кнопки плюс, чтоб можно было манипулировать ими и вешать на них события(функции)
        let countPlus=this.querySelector('.plus');
        // достаем значения с кнопки минус, чтоб можно было манипулировать ими и вешать на них события(функции)
        let countMinus=this.querySelector('.minus');
        // достаем значения с инпута в котором указано количество товара, чтоб можно было манипулировать ими и вешать на них события(функции)
        let inputValue=this.querySelector('.counter-input');
        // вешаем на нажатие кнопки "плюс" функцию, которая при каждом нажатии будет прибавлять единицу к количеству товара
        countPlus.onclick=function () {
            // значение в инпуте прибаляется единица
            inputValue.value++;
        }
        // вешаем на нажатие кнопки "минус" функцию, которая при каждом нажатии будет убавлять на единицу количество товара
        countMinus.onclick=function(){
            // с условием = если значение количества товара равно нулю, то перестаем уменьшать на единицу
            if(inputValue.value ==0){
                return false;
            }
            // в другом случае вычтем единицу
            else 
                inputValue.value--;
        }
    }
}