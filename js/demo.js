//获取元素
var lis = document.querySelectorAll('.header ul li');
var snav = document.querySelector('.snav');
var nav = document.querySelector('.nav');
var backtop = document.querySelector('.backtop')


//遍历是否鼠标移入二级导航显示隐藏
    for(var i = 0;i < lis.length;i++){
        lis[i].onmouseover = function(){
            nav.style.display = 'block';
        // console.log(111);
     }

        nav.mouseout = function(){
            nav.style.display = 'none';
        }
        lis[i].onmouseout = function(){
            nav.style.display = 'none';
        }
}
// swiper插件轮播图
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 水平切换选项
    loop: true, // 循环模式选项

    // autoplay:true,
    autoplay: {
      delay: 2500,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })        
// 滚动到一定距离回到顶部按钮出现
var arise;
window.onscroll = function(){
  // 滚动条距离顶部的距离数值
  arise = document.body.scrollTop||document.documentElement.scrollTop;
  if(arise > 300){
    backtop.style.display = "block";
  }else{
    backtop.style.display = "none";
  }
}

// 为回到顶部图标添加一个点击事件，滚动条回到顶部
backtop.onclick = function(){
  var timer = setInterval(function(){
    arise -= 50;
    if(arise <=0){
      clearInterval(timer);
    }
    window.scrollTo(0,arise);
  },5)
}
