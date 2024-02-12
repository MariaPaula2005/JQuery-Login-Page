//ready method
$(document).ready(function() {
    // input user
    let inputEle1 = $('<input>').css({
        padding: '8px',
        alignSelf: 'center',
        alignItems: 'center',
        display: 'flex'
    });
    let userEle = $('#user');
    userEle.append(inputEle1);
    userEle.append('<br>');

    // input password
    let inputEle2 = $('<input>').css({
        padding: '8px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    });
    let passwordEle = $('#password');
    passwordEle.append(inputEle2);

    // password validation
    $('button').on('click', function() {
        let passwordValue = inputEle2.val();
        let message = $('#message');
        if (passwordValue.length < 6) {
            message.text('Password should be at least 6 characters long').css('color', 'red');
            inputEle2.css('border', '4px solid red');
        } else {
            message.text('Success!').css('color', 'green');
            inputEle2.css('border', '4px solid green');
        }
    });
});