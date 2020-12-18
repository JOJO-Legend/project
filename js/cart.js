

// //判断本地储存是否存在购物车数据
// if(localStorage.getItem('goodsitem')){
//     var goodsArr = JSON.parse(localStorage.getItem('goodsitem'))
//     //获取数据
//     $.ajax({
//         url: './data/goods.json',
//         type: 'get',
//         dataType: 'json',
//         success: function (json){
//           var domStr = ''
//           $.each(goodsArr,function (index,item){
//             $.each(json,function (ind,obj){
//               if ( item.code === obj.code ) {
//                 domStr += `
//                     <div class="goodslist">
//                       <div class="listleft">
//                         <input type="checkbox">
//                         <div class="productimg"><a href="#"><img src="./img/clothes06.jpg" alt=""></a></div>
//                         <div class="productdetail">
//                           <div class="goodsname">EMPORIO ARMANI</div>
//                           <div class="goodsname">R-EA绵羊毛帽子</div>
//                           <div class="goodsstyle">颜色：<span>0999</span> V</div>
//                           <div class="goodsstyle">尺码：<span>S/M</span> V</div>
//                           <div class="goodsstock">仅剩1件</div>
//                         </div>
//                       </div>
//                       <div class="listcenter">
//                         <div class="numcut numchange"></div>
//                         <input type="text" placeholder="1">
//                         <div class="numadd numchange"></div>
//                         <p>商品已达购买上限</p>
//                       </div>
//                       <div class="listright">
//                         <p>￥ 2,300</p>
//                         <div class="goodsdel"><i class="iconfont icon-diqiu"></i>删除</div>
//                       </div>
//                     </div>
//                 `
//               }
//             })
//           })
//           $('.goodslist').html(domStr)
//         }
//     })
// //购物车商品移除
// $('.goodslist').on('click','.goodlist .goodsdel',function(){
//     $(this).closest('.goodslist').remov
//     //更新本地储存数据
//     var code = $(this).attr('code')
//     //删除数组元素
//     $.each(goodsArr,function(index,item){
//         if(item.code === code){
//             goodsArr.splice(index,1)
//             return false
//         }
//     })
//     // 判断购物车是否还有数据
//     if(goodsArr.length > 0){
//       //更新本地数据
//       localStorage.setItem('goodsitem',JSON.stringify(goodsArr))
//     }else{
//       //清除本地数据
//       localStorage.removeItem('goodsitem')
//       var nodata = '<listleft style="line-height: 215px;text-align: center;">购物车暂无任何商品！</listleft>'
//       $('.list').html(nodata)
//     }
//     alert('商品已从购物车移除')
// })
// }else{//没数据
//   var nodata = '<listleft style="line-height: 215px;text-align: center;">购物车暂无任何商品！</listleft>'
//   $('.listleft').html(nodata)
// }

//     // $(".goodsitem .changeimg b").on('click',function(){
//     //     // location.url
        
//     // })


var box = document.querySelector('.goodslist .listcenter');
var cut = document.querySelector('.goodslist .listcenter .numcut');
var add = document.querySelector('.goodslist .listcenter .numadd');
var num = document.querySelector('.goodslist .listcenter input');
var checkboxs = document.getElementsByName('xuan');
var shops = document.getElementsByClassName('goodslist');
// 给父元素绑定点击事件
box.onclick = function(e){
  var e = e || window.event;
  //获取点击对象
  var target = e.target || e.srcElement;
  //判断点击的是不是全选框
  if(target.name=='quan'){
    //遍历每一个商品对象
    for(var i=0;i<shops.length;i++){
        //判断当前全选框对象是否被选中
        if(target.checked){
            shops[i].children[0].children[0].checked=true;
        }else{
            shops[i].children[0].children[0].checked=false;
        }
    }  
    totalPrice();
    shopTotal();
  }
}
// 商品数量加减
add.onclick = function(){
  var addnum = num.getElementsByClassName.placeholder;
  addnum++;

}