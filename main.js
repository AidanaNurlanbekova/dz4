const url = 'https://jsonplaceholder.typicode.com/users';

const xhr = new XMLHttpRequest();

xhr.open('GET', url);
xhr.responseType = 'text'


xhr.onload = function() {
    const list = document.getElementById('list');
    const li = document.createElement('li');

    list.append(li)
    li.innerHTML = xhr.response

    console.log(JSON.parse(xhr.response))
};


xhr.send();