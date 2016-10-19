window.onload = function () {


    var name = document.getElementById('inputName');
    var email = document.getElementById('inputEmail');
    var subject = document.getElementById('inputSubject');
    var message = document.getElementById('inputbody')
    var send = document.getElementById('sendContact')
    var nameReg = /^[a-zA-Z]*$/;

    var emailReg =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    var messReg = /.{22,}/







    /*name validation */
        name.oninput = function () {
            if (nameReg.test(name.value)) {
                name.style.backgroundColor = "lawngreen";
                send.disabled = false;
                document.getElementById('nameTrouble').innerHTML = ""

            }
            else {
                name.style.backgroundColor = 'lightcoral';
                send.disabled = true;
                document.getElementById('nameTrouble').innerHTML = "Only English letters allowed"

            }
        }
    /*email validation*/
    email.oninput = function () {
        if (emailReg.test(email.value)) {
            email.style.backgroundColor = "lawngreen";
            send.disabled = false;
            document.getElementById('emailTrouble').innerHTML = ""

        }
        else {
            email.style.backgroundColor = 'lightcoral';
            send.disabled = true;
            document.getElementById('emailTrouble').innerHTML = "Please, enter correct email"

        }
    }
    /*subject validation*/
    subject.oninput = function () {
        if (nameReg.test(subject.value)) {
            subject.style.backgroundColor = "lawngreen";
            send.disabled = false;
            document.getElementById('subjTrouble').innerHTML = ""

        }
        else {
            subject.style.backgroundColor = 'lightcoral';
            send.disabled = true;
            document.getElementById('subjTrouble').innerHTML = "Only English letters allowed"

        }
    }
    /*message validation*/
    message.oninput = function () {
        if (messReg.test(message.value)) {
            message.style.backgroundColor = "lawngreen";
            send.disabled = false;
            document.getElementById('messTrouble').innerHTML = ""

        }
        else {
            message.style.backgroundColor = 'lightcoral';
            send.disabled = true;
            document.getElementById('messTrouble').innerHTML = "Please, enter more then 20 symbols down"

        }
    }

    send.onclick = function () {
        if (name.value ==''|| email.value ==''|| subject.value == ''|| message.value == ''){
            alert('Please fill in all of the fields! Form wasn`t sended')
        }
        else {/*clean after yourself*/
            /*lets send comment*/
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/sendComment')
            var body = {
                name: name.value,
                email:  email.value,
                subject: subject.value,
                message: message.value
            }
            xhr.send(JSON.stringify(body));

            name.value ='';
            email.value ='';
            subject.value = '';
            message.value = '';
            message.style.backgroundColor = ''
            subject.style.backgroundColor = '';
            email.style.backgroundColor = '';
            name.style.backgroundColor = '';



            console.log('Send was made')
        }
    }


}

