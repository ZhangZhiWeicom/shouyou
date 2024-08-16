/**
 * 福利
 * @type {{}}
 */
let fuli = {};

/**
 * 福利领取
 */
fuli.fl = function(){
    clickPoint(758 + random(-5, 5),28+ random(-5, 5));
    sleep(2500, 3000);
    for(var ii = 0; ii < 2; ii++){
        //日常福利
        func.findImageEx("小红点.png",190,54,237,82,1,function(result){
            clickPoint(result.x - 60 + random(-50, 50) , result.y + 22 + random(-10, 10));
            sleep(random(2500, 3500))
            for(var i = 0; i < 5 ; i++){
                fuli.richang();
            }
        })

        //限时活动
        // func.findImageEx("小红点.png",340,54,384,82,1,function(result){
        //     clickPoint(result.x - 60 + random(-50, 50) , result.y + 22 + random(-10, 10));
        //     sleep(random(2500, 3500))
        // })

        //开服活动
        func.findImageEx("小红点.png",491,54,523,82,1,function(result){
            clickPoint(result.x - 60 + random(-50, 50) , result.y + 22 + random(-10, 10));
            sleep(random(2500, 3500))
            for(var i = 0; i < 5 ; i++){
                fuli.kaifu();
            }
        })
    }


    func.findImageEx("关闭弹窗1.png", 794,16,1266,240, 2, function(result){
        clickPoint(result.x  + random(-5, 5),result.y + random(-5, 5))
        sleep(800);
    }, function(idx){
        // logd("关闭弹窗");
    })
}

/**
 * 日常福利
 */
fuli.richang = function(){
    func.findImageEx("小红点.png",246,152,330,616,1,function(result){
        clickPoint(result.x - 90 + random(-50, 50) , result.y + 22 + random(-10, 10));
        sleep(random(1500, 2500))
        let y = result.y;
        if( y > 196 && y < 234){//每日在线享口粮
            for(var i = 0; i < 4; i++){
                func.findImageEx("领取.png", 1086,356,1200,406, 2, function(res1){
                    clickPoint(res1.x + random(-20, 20) , res1.y + random(-10, 10));
                    sleep(random(2500, 3500));
                }, function(){
                    sleep(1000);
                })
            }
        }else if( y > 260 && y < 302){//每日签到抽大奖
            func.findImageEx("签到.png", 1032,572,1166,626, 2, function(res1){
                clickPoint(res1.x + random(-20, 20) , res1.y + random(-10, 10));
                sleep(random(2500, 3500));
            }, function(){
                sleep(1000);
            })
        }else if( y > 394 && y < 430){//关联手机拿礼包
            func.findImageEx("领取2.png", 718,618,864,662, 2, function(res1){
                clickPoint(res1.x + random(-20, 20) , res1.y + random(-10, 10));
                sleep(random(2500, 3500));
            }, function(){
                sleep(1000);
            })
        }
    }, function(){
        sleep(2000);
    })
}

/**
 *限时活动
 */
fuli.xianshi = function(){


}

/**
 * 开服活动
 */
fuli.kaifu = function(){

    //仙缘试炼
    func.findImageEx("小红点.png",284,130,330,176,1,function(result){
        clickPoint(result.x - 90 + random(-50, 50) , result.y + 22 + random(-10, 10));
        sleep(random(1500, 2500))
        for(var i = 0; i < 4; i++){
            func.findImageEx("领取3.png", 1126,232,1212,270, 2, function(res1){
                clickPoint(res1.x + random(-20, 20) , res1.y + random(-10, 10));
                sleep(random(2500, 3500));
            }, function(){
                sleep(1000);
            })
        }
    })
    //神兵利器
    func.findImageEx("小红点.png",284,196,330,240,2,function(result){
        clickPoint(result.x - 90 + random(-50, 50) , result.y + 22 + random(-10, 10));
        sleep(random(1500, 2500))
        for(var i = 0; i < 4; i++){
            func.findImageEx("领取.png", 1126,296,1250,645, 2, function(res1){
                clickPoint(res1.x + random(-20, 20) , res1.y + random(-10, 10));
                sleep(random(2500, 3500));
            }, function(){
                sleep(1000);
            })
        }
    })

    //经验成长
    func.findImageEx("小红点.png",284,250,330,308,2,function(result){
        clickPoint(result.x - 90 + random(-50, 50) , result.y + 22 + random(-10, 10));
        sleep(random(1500, 2500))
        func.findImageEx("领取4.png", 360,304,434,333, 2, function(res1){
            clickPoint(res1.x + random(-10, 10) , res1.y + random(-3, 3));
            sleep(random(2500, 3500));
        }, function(){
        })
    })
}