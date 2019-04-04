let xhr = new XMLHttpRequest();

//默认访问8080端口   webpack-dev-server的服务    转发给3000
//http-proxy
xhr.open('GET', 'api/user',true);
xhr.onload = function() {
    
    console.log(xhr.response);
}

xhr.send();



// console.log('home');


// class Log {
//     constructor() {
//         console.log('出错了');
//     }
// }
// let log = new Log();

