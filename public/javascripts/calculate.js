$(function() {
    
    let btn_0 = $('#btn-0');
    let btn_1 = $('#btn-1');
    let btn_2 = $('#btn-2');
    let btn_3 = $('#btn-3');
    let btn_4 = $('#btn-4');
    let btn_5 = $('#btn-5');
    let btn_6 = $('#btn-6');
    let btn_7 = $('#btn-7');
    let btn_8 = $('#btn-8');
    let btn_9 = $('#btn-9');
    let btn_comma = $('#btn-comma');
    let btn_plus = $('#btn-plus');
    let btn_minus = $('#btn-minus');
    let btn_multiply = $('#btn-multiply');
    let btn_divide = $('#btn-divide');
    let btn_validate = $('#btn-validate');
    let btn_clear = $('#btn-clear');
    let input = $('#calc-preview');

    function checkDoubleOperator(callback) {
        let _input = input.text();
        let lastChar = _input.charAt(_input.length - 1);
        let hasDoubleOperator = false;

        switch (lastChar) {
            case '+':
                break;
            case '-':
                break;
            case '*':
                break;
            case '/':
                break;
            case '':
                break;
            default:
                return callback;
                break;
        }

    }
    
    btn_0.on('click', function() {
        input.append('0');
    })
    btn_1.on('click', function() {
        input.append('1');
    })
    btn_2.on('click', function() {
        input.append('2');
    })
    btn_3.on('click', function() {
        input.append('3');
    })
    btn_4.on('click', function() {
        input.append('4');
    })
    btn_5.on('click', function() {
        input.append('5');
    })
    btn_6.on('click', function() {
        input.append('6');
    })
    btn_7.on('click', function() {
        input.append('7');
    })
    btn_8.on('click', function() {
        input.append('8');
    })
    btn_9.on('click', function() {
        input.append('9');
    })
    btn_comma.on('click', function() {
        input.append('.');
    })
    btn_plus.on('click', function() {
        checkDoubleOperator(input.append('+'));
    })
    btn_minus.on('click', function() {
        checkDoubleOperator(input.append('-'));
    })
    btn_multiply.on('click', function() {
        checkDoubleOperator(input.append('*'));
    })
    btn_divide.on('click', function() {
        checkDoubleOperator(input.append('/'));
    })
    btn_validate.on('click', function() {
        let result = eval(input.text());
        localStorage.setItem('calc', [input.text(), result]);
        console.log(localStorage);
        input.html(result);
    })
    btn_clear.on('click', function() {
        input.html('');
    })
})