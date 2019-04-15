//这里是index页面的js代码
window.onload = function(){
    //禁止双指放大
    banZoom();

    $(function () {
        var li = $('.jdm_lbt')[0];
        document.addEventListener("DOMContentLoaded",function () {
            FastClick.attach(document.body);
        },false);
//滑动
        var lbt = $(".jdm_lbt").children(".jdm_lbt_ul");
        // dom对象转换为jq对象
        var $lbt = $(lbt)
        var solding = new Sliding();
        solding.init($lbt);



        //左滑方法
        var index = 1;
        function leftSlide(e) {
        //  左滑之后会执行这里的代码
            var dom = $(this);
        //     需要移动的宽度
            var widthAll = dom.css('width');
            var i = 0;
            var distence = 'translateX(-' + (index*10 + i) + '%)';
            console.log(distence);
            dom.css('transform',distence);
            index++;
            //  var timeId = setInterval(function () {
            //      var distence = '-' + (index*10 + i) + '%';
            //      dom.css('transform',distence);
            //      i++
            //      if(i==11){
            //          clearInterval(timeId);
            //      }
            // },100)



        };
        //右滑操作
        function rightSlide(e) {
            console.log(this);
            console.log(e);
            alert("右滑了")
        };

        function slide(dom) {
            //    确定状态
            var ismove = false;
            var startX = 0;
            var distence = 0;
            dom.on('touchstart',function (e) {
                startX = e.touches[0].clientX;
            });
            dom.on("touchmove",function (e) {
                ismove = true;
                var ensX = e.touches[0].clientX;
                distence = ensX - startX;
            })
            dom.on("touchend",function (e) {
                //判断是否移动了
                if (ismove && Math.abs(distence)>50){
                    if (distence>0){//说明右滑了
                        rightSlide && rightSlide.call(this,e)
                    }else {
                        leftSlide && leftSlide.call(this,e);
                    }
                }
                //    重置状态
                ismove = false;
                startX = 0;
                distence = 0;
            });
        };
        //调用
        // slide($lbt);

//tap事件
//         var tapEvent = function (dom,callback) {
//             var starttime = 0;
//             var ismove = false;
//             dom.addEventListener("touchstart",function () {
//                 starttime = Date.now();
//             });
//             dom.addEventListener("touchmove",function () {
//                 ismove = true;
//             });
//             dom.addEventListener("touchend",function (e) {
//                 if ((Date.now() - starttime)<150 && !ismove){
//                     callback && callback.call(this, e);
//                 }
//                 starttime = 0;
//                 ismove = false;
//             });
//         }
        // tapEvent(li,function (e) {
        //     console.log(this);
        //     console.log(e);
        // })
    })
}
//ios的safari浏览器以及chrome浏览器的touch时间结合alter属性会有延迟

