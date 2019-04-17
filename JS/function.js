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
                that.rightSlide(dom,timeId) && that.rightSlide(dom,timeId).call(this)
            }else {
                that.leftSlide(dom,timeId) && that.leftSlide(dom,timeId).call(this);
            }
        }
        //    重置状态
        this.ismove = false;
        this.startX = 0;
        this.distence = 0;
    });
    var timeId = setInterval(function () {
        that.leftSlide(dom);
    },4000);
};
Sliding.prototype.autolb = function(dom){
    var that = this;
};
Sliding.prototype.rightSlide = function (dom,timeId) {
    console.log("右滑了")
    // clearInterval(timeId)
    if (this.index<=9&&this.index>0){
        this.index--;
        var end = 'translateX(-'+this.index*10+'%)';
        dom.css('transform',end);
        dom.css('transition','transform,0.3s')
        console.log(this.index);
        dom.on('transitionend',function () {
            if (this.index == 0){
                dom.off('transitionend');
                dom.css('transition','none');
                dom.css('transform','translateX(-80%)');
                this.index = 8;
            }
        }.bind(this))
    }
};
Sliding.prototype.leftSlide = function (dom,timeId) {
    console.log('左滑了')
    // clearInterval(timeId)
    if (this.index<9){
        this.index++;
        var end = 'translateX(-'+this.index*10+'%)';
        dom.css('transform',end);
        dom.css('transition','transform,0.4s')
        console.log(this.index);
        dom.on('transitionend',function () {
            if (this.index == 9){
                dom.off('transitionend');
                dom.css('transition','none');
                dom.css('transform','translateX(-10%)');
                this.index = 1;
            };
        }.bind(this))
    }
};

