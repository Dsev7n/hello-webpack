let btn = document.createElement('button');
btn.innerHTML = 'hello';
btn.addEventListener('click', function() {
    //es6草案中的语法 jsonp实现动态加载文件   路由懒加载~
    import('./source.js').then(data => {
        console.log(data);
    })
})

document.body.appendChild(btn);