window.onload = function () {
    var homeBtn = document.getElementById('home');
    var contactBtn = document.getElementById('contactbtn')
    var footerCont = document.getElementById('footer_contact')
    footerCont.onclick = function () {
        window.location.pathname = '/contact'
        console.log('successfully redirected to contact');
    }
    contactBtn.onclick = function () {
        window.location.pathname = '/contact'
        console.log('successfully redirected to contact');
    }
    homeBtn.onclick = function () {
        window.location.pathname = '/home'
        console.log('successfully redirected to home');
    }
    /*Disable/enable button LogIn*/
    document.getElementById('login').onchange = function () {
        if (document.getElementById('password').value.length > 0) {
            if (document.getElementById('login').value.length > 0) {
                document.getElementById('log').disabled = false
            }
        }
    }
    document.getElementById('password').onchange = function () {
        if (document.getElementById('login').value.length > 0) {
            if (document.getElementById('password').value.length > 0) {
                document.getElementById('log').disabled = false
            }
        }
    }
    document.getElementById('log').onclick = function () {//send username and password
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/login');
        var send = {
            login:  document.getElementById('login').value,
            password:  document.getElementById('password').value
        }
        var data = JSON.stringify(send)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(data)        //send data

        xhr.onload= function () {
            alert(this.responseText);
        }
        document.getElementById('password').value = "";//cleanup after yourself
        document.getElementById('login').value = "";
        console.log('POST send made!')


    }

}