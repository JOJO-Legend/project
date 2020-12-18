var close = document.querySelector('.close span');
var main = document.querySelector('.main');
var first = document.querySelector('.first');
var logon = document.querySelector('.logon');
close.onclick = function(){
    main.style.display = 'none';

}


// 登录注册切换
var off = document.querySelector('.first .creatbtn');
off.onclick = function(){
    first.style.display = 'none';
    logon.style.display = 'block';
}

var open = document.querySelector('.logon .creatbtn')
open.onclick = function(){
    logon.style.display = 'none';
    first.style.display = 'block';
}

//登录验证
var user = document.querySelector('.first .user');
var pass = document.querySelector('.first .pass');
var loginbtn = document.querySelector('.first .loginbtn');

loginbtn.onclick = function(){
    var us = user.value;
    var ps = pass.value;
    //验证规则（正则）  空值判断
    if(!us || !ps){
        alert('账号或密码不能为空')
        return
    }
    //提交数据
    ajax({
        url:'./data/user.php',
        type:'post',
        data:{
            user:us,
            pass:ps,
            type:'login'},
            datatype:'json',
            success:function(json){
                alert(json.msg)
            },
            error:function(code){
                alert(code)
        }
    })
}


//注册验证
var user = document.querySelector('.logon .user');
var pass = document.querySelector('.logon .pass');
var loginbtn = document.querySelector('.logon .loginbtn');

loginbtn.onclick = function(){
    var us = user.value;
    var ps = pass.value;
    //验证规则（正则）  空值判断
    if(!us || !ps){
        alert('账号或密码不能为空')
        return
    }
    //提交数据
    ajax({
        url:'./data/user.php',
        type:'post',
        data:{
            user:us,
            pass:ps,
            type:'add'},
            datatype:'json',
            success:function(json){
                alert(json.msg)
            },
            error:function(code){
                alert(code)
        }
    })
}