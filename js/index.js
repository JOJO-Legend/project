$(function(){
    // $(".brand-left").bind('click',function(){

    // })
  // 获取商品列表数据
//   $.ajax({
//     url: './data/goods.json',
//     type: 'get',
//     dataType: 'json',
//     success: function (json){
//       // console.log(json)
//       var goodsitem = ''
//       var goodsmodel = ''

//       $.each(json,function (index,item){
//         goodsitem += `<div class="goodsitem">
//         <span>${item.title}</span>
//         <a href="#" class="showimg"><img src="${item.imgurl1}" alt=""></a>
//         <a href="#" class="changeimg"><img src="${item.imgurl2}" alt=""><i class="iconfont icon-aixin"></i><b>${item.add}</b></a>
//         <p><a href="#">${item.details}</a></p>
//         <h2>${item.price}</h2>
//       </div>`
//       })
//       $('.goods').html(goodsitem)

    //   $.each(json,function (index,item){
    //     goodsmodel += `<div class="goodsmodel">
    //     <a href="#">
    //       <img src="${item.imgurl}" alt="" class="showimg">
    //       <div class="innertext">
    //         <a href="#">${item.explain}</a>
    //         <p>${item.addcart}</p>
    //       </div>
    //     </a>
    //   </div>`
    //   })
    //   $('.goods').html(goodsmodel)
    // }
//   })

//加入购物车
$(".goodsitem .changeimg b").on('click','.changeimg b',function(){
    //获取当前商品的编号
    var code = $(this).attr('code')

//判断本地是否储存有数据
    if(localStorage.getItem('goodsitem')){
        var goodsArr = JSON.parse(localStorage.getItem('goodsitem'))
    }else{
        var goodsArr = []
    }
    var hasgoods = false
    if(goodsArr.length > 0){
        //判断当前选中的商品是否在购物车中
        $.each(goodsArr,function(index,item){
            if(item.code === code){//有，数量+1
                item.num++
                hasgoods = true
                return false
            }
        })
    }
    if (!hasgoods){
        goodsArr.push({code:code,num:1})
    }
    //更新本地储存数据
    localStorage.setItem('goods',JSON.stringify(goodsArr))

})


















})