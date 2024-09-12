
export const Emulator = {

    // Включает купюроприёмник на приём купюр/монет, с каждой принятой купюрой/монетой вызывает
    // cb(amount), где amount - номинал купюры/монеты
    // Эмуляция приёма купюр должна производится по нажатию комбинации клавиш - на ваше усмотрение
    StartCashin(cb) {
        cb(10);
    },

    // Отключает прием купюр/монет купюроприемником
    StopCashin(cb) {
        console.log('Stop cahsing');
        cb();
    },

    /*  Активирует списание с банковской карты на сумму amount
        Активация успешной или неуспешной транзакции должна производится по нажатию комбинаций
        клавиш - на ваше усмотрение
        При успешной / неуспешной транзакции выполняется cb (result), где result - результат операции
        (true/false)
        При оплате также эмулируются надписи от пин-пада - display_cb, т.е. вызовы:
        display_cb (‘Приложите карту’);
        display_cb (‘Обработка карты’);
        display_cb (‘Связь с банком’);
        и т.д.
        По окончанию выдается текстовый результат также в display_cb
    **/
    BankCardPurchase(amount, cb, display_cb) {
        const result = [
            'Приложите карту',
            'Обработка карты',
            'Связь с банком',
        ];

        let start = 0;

        const showResult = () => {
            if(start < result.length){
                display_cb(result[start]);
                start++;

                setTimeout(showResult,1000);
            }
            else{
                const isPaymenSuccess = cb(amount);

                if(isPaymenSuccess){
                    display_cb('Транзакция завершена');
                } else{
                    display_cb('Транзакция отменена');
                }
            }
        }
        showResult();
    },

    //
    BankCardCancel() {
        // Отмена действующей операции по банковской карте
        // BankCardCancel только запускает процесс отмены, при этом должен завершиться штатный механизм
        // BankCardPurchase с коллбэками
    },

    Vend(product_idx,cb){
    // Выдача кофе с индексом product_idx (индексы в порядке, в котором они идут на первом экране)
    // Активация успешной или неуспешной выдачи должна производится по нажатию комбинаций клавиш - на
    // ваше усмотрение
    // При успешной / неуспешной транзакции выполняется cb (result), где result - результат операции
    //(true/false)
    const vendResult = cb(product_idx)
    if(vendResult){
        console.log("success, take your drink");
    }
    else{
        console.log("fail, something went wrong");
    }
   
    
    }

}

