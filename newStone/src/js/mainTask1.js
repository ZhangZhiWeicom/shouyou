//亲密的帮手 没问题
function task2(){
    logd("亲 密 的 帮 手");
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(5*1000);
    com.对话(5, 60);
    logd("对话结束")
//    sleep(1000);
//    logd("开始任务")
//    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(5*1000)
    logd("等待战斗")
    com.背包(60,function(){
        com.指引小白手(1);
    }, function(){
        com.弹窗叉();
    });
    com.指引小白手(3);
    logd("指引结束");

    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(1000)
    com.对话(3, 10);
    ocrTask();

}

//学以致用 没问题
function task5(){
    logd("学 以 致 用");
    logd("开始任务")
    clickPoint(1690+ random(-100, 100), 300 + random(-20, 20));
    sleep(2000);
    logd("开始对话");
    com.对话(3, 30);
    logd("对话结束")
    sleep(1000);
//    com.使用(function(){
//        logd("使用了")
//    });

    com.弹窗叉();

    logd("当前任务结束了")
    ocrTask();
}