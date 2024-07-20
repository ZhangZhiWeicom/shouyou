/**
 * 常用JS变量:
 * agentEvent = 代理模式下自动点击模块
 * acEvent= 无障碍模式下自动点击模块
 * device = 设备信息模块
 * file = 文件处理模块
 * http = HTTP网络请求模块
 * shell = shell命令模块
 * thread= 多线程模块
 * image = 图色查找模块
 * utils= 工具类模块
 * global = 全局快捷方式模块
 * 常用java变量：
 *  context : Android的Context对象
 *  javaLoader : java的类加载器对象
 * 导入Java类或者包：
 *  importClass(类名) = 导入java类
 *      例如: importClass(java.io.File) 导入java的 File 类
 *  importPackage(包名) =导入java包名下的所有类
 *      例如: importPackage(java.util) 导入java.util下的类
 *
 */

function main() {
    if (!autoServiceStart(3)) {
        logd("自动化服务启动失败，无法执行脚本");
        exit();
        return;
    }
    logd("开始执行脚本...")
    logd("isServiceOk " + isServiceOk());
    startEnv()
    logd("isServiceOk " + isServiceOk());
    let request = image.requestScreenCapture(10000, 0);
    if (!request) {
        request = image.requestScreenCapture(10000, 0);
    }
    logd("申请截图结果... " + request)
    if (!request) {
        loge("申请截图权限失败,检查是否开启后台弹出,悬浮框等权限")
        exit()
    }
    //申请完权限至少等1s(垃圾设备多加点)再截图,否则会截不到图
    sleep(1000)
    let   d= image.initOpenCV();
    //申请完权限至少等1s(垃圾设备多加点)再截图,否则会截不到图
    sleep(1000)
//task1();




    //
    // login();
    mainTask();
    // // findRoad()//


}


function mainTask(){
    do{
        func.findImageEx("主线任务.png", 45,170,88,221, 1, function(result){
            clickPoint(result.x+100+ random( -50, 50),  result.y+20+ random(-5, 5));
            sleep(1000);
            findRoad()
        }, function(idx){
            logd("主线任务");
            
        })

        //点击任意区域继续
        func.findImageByColor("自动.png", 1114,274,1216,376, 1, function(result){
            logd("自动111111111111111");
            for(var i = 0; i< 100; i++){
                sleep(500);
                func.findImageByColor("手动.png", 1114,274,1216,376, 1, function(result){
                    i = 1000;
                }, function(idx){

                })
            }
        }, function(idx){
            logd("自动");
        })

        func.findImageByColor("对话.png", 0,634,1242,714, 1, function(result){
            clickPoint(984 + random(-50, 50),656+ random(-10, 10))
            sleep(random(180, 350));
        }, function(idx){
            logd("对话");
        })

        //点击任意区域继续
        func.findImageByColor("下箭头.png", 1026,614,1206,694, 1, function(result){
            clickPoint(984 + random(-50, 50),656+ random(-10, 10))
            sleep(random(200, 400));
        }, function(idx){
            logd("下箭头");
        })

        //点击任意区域继续
        func.findImageEx("修炼.png", 552,618,708,680, 1, function(result){
            clickPoint(result.x + 20 + random(-20, 20),result.y + 10+ random(-5, 5))
            sleep(20*1000);
            sleep(2000);
        }, function(idx){
            logd("修炼");
        })

        func.findImageEx("使用.png", 806,532,944,598, 1, function(result){
            logd("使用。。。。。");
            clickPoint(result.x  + random(-20, 20),result.y + random(-5, 5))
            sleep(2*1000);

        }, function(idx){
            logd("使用");
        })

        func.findImageEx("装备.png", 798,546,946,594, 1, function(result){
            logd("装备11111111111");
            clickPoint(result.x  + random(-20, 20),result.y + random(-5, 5))
            sleep(2*1000);

        }, function(idx){
            logd("装备");
        })

        func.findImageEx("手掌.png", 208,364,392,502, 1, function(result){
            clickPoint(result.x  + random(-20, 20),result.y + random(-5, 5))
            sleep(10*1000);
        }, function(idx){
            logd("手掌");
        })



        //点击有点问题
        func.findImageEx("仙灵升级.png", 589,286,769,374, 1, function(result){
            clickPoint(352 + random(-10, 10),83 + random(-10, 10))
            sleep(3*1000);
            func.findImageEx("仙灵加点.png", 1020,592,1210,678, 3, function(res){
                clickPoint(res.x + random(-10, 10),res.y + random(-3, 3))
                sleep(random(1000, 2000));
                for(var i = 0; i < 2; i++){
                    clickPoint(864 + random(-5, 5),248+ random(-5, 5))
                    sleep(random(100, 200));
                    clickPoint(864 + random(-5, 5),310+ random(-5, 5))
                    sleep(random(100, 200));
                    clickPoint(864 + random(-5, 5),370+ random(-5, 5))
                    sleep(random(100, 200));
                    clickPoint(864 + random(-5, 5),432+ random(-5, 5))
                    sleep(random(100, 200));
                }
                //确认
                clickPoint(826 + random(-20, 20),548+ random(-5, 5))
                sleep(1000, 2000);
                clickPoint(868 + random(-5, 5),138+ random(-5, 5))
                sleep(600, 1200);
                clickPoint(1228 + random(-5, 5),72+ random(-5, 5))
            }, function(idx){
                logd("仙灵升级");
            })
        }, function(idx){
            logd("仙灵升级");
        })


        func.findImageEx("跳过.png", 1140,2,1278,68, 1, function(result){
            clickPoint(result.x ,result.y)
            sleep(800);
        }, function(idx){
            logd("关闭弹窗");
        })

        func.findImageEx("去融合.png", 668,470,826,516, 1, function(result){
            clickPoint(result.x + random(-15, 15),result.y+ random(-5, 5))
            sleep(1000);
            //融合按钮
            clickPoint(444 + random(-15, 15),652+ random(-5, 5))
            sleep(2000);
        }, function(idx){
            logd("去融合");
        })

        func.findImageEx("免费领取.png", 402,454,626,544, 1, function(result){
            clickPoint(result.x + random(-15, 15),result.y+ random(-5, 5))
            sleep(1000);
        }, function(idx){
            logd("去融合");
        })

        func.findImageEx("关闭弹窗1.png", 794,16,1266,240, 1, function(result){
            clickPoint(result.x  + random(-5, 5),result.y + random(-5, 5))
            sleep(800);
        }, function(idx){
            logd("关闭弹窗");
        })

        sleep(100);


    }while(true)


}


function login(){
    for(var i = 0; i < 100; i++){
        func.findImageEx("进入游戏.png", 518,428,774,522, 1, function(result){
            clickPoint(result.x + random( -50, 50),  result.y+ random(-10, 10));
            sleep(10*1000);//等待进入游戏
        }, function(idx){})

        //创建角色，先放着以后加
        addRole()

        func.findImageEx("进入游戏2.png", 1010,542,1262,656, 1, function(result){
            clickPoint(result.x + random( -50, 50),  result.y+ random(-10, 10));
            sleep(20*1000);//等待进入游戏
        }, function(idx){})
        func.findImageEx("背包.png", 1020,0,1118,98, 1, function(result){
            logd("进入游戏主界面");
            sleep(10*1000);
            i = 10000;
        }, function(idx){})
        sleep(200);
    }
}

/**
 * 当账号一个角色都没有，调用此方法来创建角色
 */
function addRole(){

}

/**
 * 读取游戏坐标用来寻路
 */
function findRoad(){
    var times = 2;
    let  firstStep = func.ocr(1160,21,1219,36, 1);
    for(var i = 0; i < 100; i++){
        sleep(200);
        let  secondStep = func.ocr(1160,21,1219,36, 1);
        logd("secondStep=", JSON.stringify(secondStep));
        if(firstStep != null && secondStep != null && firstStep.label.length >= 6 && firstStep.label.length===secondStep.label.length){
            logd("跑路结束");
            i = 1000;
        }else if(firstStep === null && secondStep === null ){
            times--;
            if(times <= 0){
                i = 1000;
            }
        }
        firstStep = secondStep;

        func.findImageByColor("对话.png", 0,634,1242,714, 1, function(result){
            clickPoint(984 + random(-50, 50),656+ random(-10, 10))
            sleep(random(180, 350));
            i = 1000;
        }, function(idx){
            logd("对话");
        })

        func.findImageByColor("自动.png", 1114,274,1216,376, 1, function(result){
            i = 1000;
        }, function(idx){
        })
        sleep(100);
    }
}




//达到55级
function task52(){
    logd("达到55级");
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(3*1000);
    com.匹配前往();
    com.匹配挂机();
    func.findImageEx("自动匹配.png", 1210,745,1725,1037, 20, function(){
        滑块移动(1);
        sleep(500)
    }, function(result){
        clickPoint(result.x + random( -50, 50),  result.y);
        sleep(20*1000);
        com.弹窗叉();
        sleep(120*1000);
        func.findImageEx("确定.png", 647,420,1284,782, 1000, function(){
            滑块移动(1);
            sleep(500)
        }, function(result){
            sleep(3000)
            clickPoint(result.x + random( -50, 50),  result.y);
            sleep(2500);
        })
    })

    logd("达到55级");
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
}

function task53(){
    logd("达到65级");


}



function autoServiceStart(time) {
    for (var i = 0; i < time; i++) {
        if (isServiceOk()) {
            return true;
        }
        var started = startEnv();
        logd("第" + (i + 1) + "次启动服务结果: " + started);
        if (isServiceOk()) {
            return true;
        }
    }
    return isServiceOk();
}


function ocrTask(taskTxt, func1){
    let ocrRes = func.ocr(50);
    if(!ocrRes) return ;
    var label = ocrRes[0].label.replace(/\s/g,"")
    if( label.indexOf(taskTxt) > -1){
        if(func1 && typeof func1 == "function")func1();
    }else{
        sleep(5*1000);
        if(label.indexOf("传言板任务") > -1){
            clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
            sleep(10*1000)
            let toContinue = false;
            if(!toContinue){
                滑块移动(1);
                toContinue = func.findImageEx("整装待发.png", 285,280,742,457, 2, function(){
                }, function(result){
                    task22();
                })
            }
        }
    }
}


/**
 * 格式化日期为字符串
 * @param date (Date)日期类型数据
 * @return  {long} 当前时间
 */
function formatDate(date) {
    if(!date)  date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
}

main();