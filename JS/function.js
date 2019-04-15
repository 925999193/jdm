// 禁止双指放大
function banZoom() {
    document.documentElement.addEventListener('touchstart', function (e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, false);
    var lastTouchEnd = 0;
    document.documentElement.addEventListener('touchend', function (e) {
        var now = Date.now();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    document.addEventListener('gesturestart', function (e) {
        e.preventDefault();
    });
};
//滑动的构造函数
function Sliding() {
    this.index = 1;
    this.i = 0;
    this.ismove = false;
    this.startX = 0;
    this.distence = 0;
    this.e = 0;
}
Sliding.prototype.init = function (dom) {
    var that = this;
    dom.on('touchstart',function (e) {
        this.startX = e.touches[0].clientX;
    });
    dom.on("touchmove",function (e) {
        this.ismove = true;
        var ensX = e.touches[0].clientX;
        this.distence = ensX - this.startX;
    })
    dom.on("touchend",function (e) {
        //判断是否移动了
        if (this.ismove && Math.abs(this.distence)>50){
            if (this.distence>0){//说明右滑了
                that.rightSlide(e,dom) && that.rightSlide(e,dom).call(this)
            }else {
                that.leftSlide(e,dom) && that.leftSlide(e,dom).call(this);
            }
        }
        //    重置状态
        this.ismove = false;
        this.startX = 0;
        this.distence = 0;
    });
};
Sliding.prototype.rightSlide = function (e,dom) {
    console.log(this);
    console.log(e);
    console.log(dom)
    console.log("右滑了")
};
Sliding.prototype.leftSlide = function (e,dom) {
    console.log(this);
    console.log(e);
    console.log(dom)
    console.log("左滑了")
};

