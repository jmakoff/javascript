window.onload = function () {
    var send = document.getElementById('update')
    send.onclick=function () {
        var xhr = new XMLHttpRequest()
        xhr.open('PUT', window.location.pathname)
        var data = {
            title: document.getElementById('title').value,
            author: document.getElementById('author').value,
            description: document.getElementById('description').value,
            category: document.getElementById('category').value,

        }
        xhr.onload=function () {
            document.getElementById('info').innerHTML = 'Database updated'
        }
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));

    }
}