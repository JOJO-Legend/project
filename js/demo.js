//获取元素
var lis = document.querySelectorAll('.header ul li');
var snav = document.querySelector('.snav');
var nav = document.querySelector('.nav');


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


