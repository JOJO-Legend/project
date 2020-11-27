$(function (){

        //判断本地储存是否存在购物车数据
        if(localStorage.getItem('goodsitem')){
            var goodsArr = JSON.parse(localStorage.getItem('goodsitem'))
            //获取数据
            $.ajax({
                url: './data/goods.json',
                type: 'get',
                dataType: 'json',
                success: function (json){
                  var domStr = ''
                  $.each(goodsArr,function (index,item){
                    $.each(json,function (ind,obj){
                      if ( item.code === obj.code ) {
                        domStr += `
                            <div class="goodslist">
                              <div class="listleft">
                                <input type="checkbox">
                                <div class="productimg"><a href="#"><img src="./img/clothes06.jpg" alt=""></a></div>
                                <div class="productdetail">
                                  <div class="goodsname">EMPORIO ARMANI</div>
                                  <div class="goodsname">R-EA绵羊毛帽子</div>
                                  <div class="goodsstyle">颜色：<span>0999</span> V</div>
                                  <div class="goodsstyle">尺码：<span>S/M</span> V</div>
                                  <div class="goodsstock">仅剩1件</div>
                                </div>
                              </div>
                              <div class="listcenter">
                                <div class="numcut numchange"></div>
                                <input type="text" placeholder="1">
                                <div class="numadd numchange"></div>
                                <p>商品已达购买上限</p>
                              </div>
                              <div class="listright">
                                <p>￥ 2,300</p>
                                <div class="goodsdel"><i class="iconfont icon-diqiu"></i>删除</div>
                              </div>
                            </div>
                        `
                      }
                    })
                  })
                  $('.goodslist').html(domStr)
                }
            })
        //购物车商品移除
        $('.goodslist').on('click','.goodlist .goodsdel',function(){
            $(this).closest('.goodslist').remove()

            //更新本地储存数据
            var code = $(this).attr('code')
            //删除数组元素
            $.each(goodsArr,function(index,item){
                if(item.code === code){
                    goodsArr.splice(index,1)
                    return false
                }
            })

        })



        }














    })