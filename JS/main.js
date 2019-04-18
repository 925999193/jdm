//这里是index页面的js代码
window.onload = function(){
    //禁止双指放大
    banZoom();
    $(function () {
        var li = $('.jdm_lbt')[0];
        document.addEventListener("DOMContentLoaded",function () {
            FastClick.attach(document.body);
        },false);
//滑动-轮播图模块
        var lbt = $(".jdm_lbt").children(".jdm_lbt_ul");
        // dom对象转换为jq对象
        var $lbt = $(lbt)
        var solding = new Sliding();
        //初始化轮播图
        solding.init($lbt);
//倒计时
        var dateStart = (new Date()).getTime();
        var dateEnd = (new Date("2019-4-18 20:00:00")).getTime();
        var datePoor = dateEnd - dateStart;
        var seconds = 0;
        var minutes = 0;
        var hours = 0;
        alert(datePoor);
        console.log(hours);
        console.log(minutes);
        console.log(seconds);
        //获取倒计时模块的元素
        var $djs = $('.jdm_ms_djs');
        var djsHours = $djs.children().get(0);
        var djsMinutes = $djs.children().get(2);
        var djsSeconds = $djs.children().get(4);
        // var timeId = setInterval(function () {
        //     datePoor = datePoor - 1000;
        //     seconds = Math.floor(datePoor/1000)%60;
        //     minutes = Math.floor(datePoor/1000/60)%60;
        //     hours = Math.floor(datePoor/1000/60/60);
        //     if (seconds<10){
        //         seconds = '0'+ seconds;
        //     }
        //     djsHours.innerHTML = hours;
        //     djsMinutes.innerHTML = minutes;
        //     djsSeconds.innerHTML = seconds;
        // },1000)











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

