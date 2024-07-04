//重复性功能代码全部归集到这里

let com = function(){}

com.弹窗叉 = function(successFunc){
     //关闭弹窗
    func.findImageEx("弹窗叉.png", 950,7,1912,514, 5, function(){
        滑块移动(1);
        sleep(500 + random(-100, 100));
    },function(result){
        //关闭弹窗
        let _continue = false;
        if(successFunc && typeof successFunc == "function"){
            _continue = successFunc();
        }
        if(!_continue){
            clickPoint(result.x + 10, result.y + 10);
            sleep(2000);
        }


    });
}

com.全屏弹窗叉 = function(successFunc){

     //关闭弹窗
    func.findImageEx("全屏弹窗叉.png", 950,7,1912,514, 5,  function(){
       滑块移动(1);
       sleep(500 + random(-100, 100));
    },function(result){
        //关闭弹窗
        let _continue = false;
        if(successFunc && typeof successFunc == "function"){
            _continue = successFunc();
        }
        if(!_continue){
            logd("关闭弹窗")
            clickPoint(result.x + 10, result.y + 10);
            sleep(2000);
        }

    });
}


com.对话 = function(times1, times2){
    if(!times2) times2 = 30
    func.findImageEx("对话.png", 180,640,1040,1030, times2, function(){
        滑块移动(1);
        sleep(500 + random(-100, 100));
    }, function(result){
//        logd("出现对话")
        sleep(1000)
    });
    对话("对话.png", 180,640,1040,1030, times1);
}

com.对话2 = function(times1, times2){
    if(!times2) times2 = 30
    func.findImageEx("3.png", 362,772,514,864, times2, function(){
        滑块移动(1);
        sleep(500 + random(-100, 100));
    }, function(res){
        //关闭弹窗
//        logd("出现对话")
        sleep(1000)
    });
    对话("3.png", 362,772,514,864, times1);
}

com.装备 = function(){
    func.findImageEx("装备.png", 1075,570,1750,932, 5, function(){
        滑块移动(1);
        sleep(500 + random(-100, 100));
    }, function(result){
//        logd("带装备");
        clickPoint(result.x +5 , result.y +5);
        sleep(3000);
    });
//    logd("装备带上");
}

com.使用 = function(successFunc){
     func.findImageEx("使用.png", 1075,567,1782,949, 5, function(){
         sleep(500 + random(-100, 100));
     }, function(result){
         clickPoint(result.x + random(-20, 20), result.y + random(-20, 20));
         sleep(1500)
         if(successFunc && typeof successFunc == "function")successFunc();
     });
}

com.确认 = function(){
    func.findImageEx("确认.png", 915,567,1310,877, 2, function(){
        sleep(500 + random(-100, 100));
    }, function(result){
        sleep(500);
        clickPoint(result.x + random(-20, 20), result.y + random(-20, 20));
        sleep(1000);
    });
}

com.指引小白手 = function(times){
    for (var i = 0; i < times; i++) {
        func.findImageEx("指引小白手.png", 0, 0, device.getScreenWidth(), device.getScreenHeight(), 3, function(){
         //            滑块移动(1);
             sleep(500 + random(-100, 100));
         }, function(result){
             clickPoint(result.x -11 , result.y - 20);
             sleep(2500);
         });
    }
}

com.自动战斗 = function(times){
    if(!times) times = 5;
    let res = func.findImageByColor("自动.png", 1707,867,1907,1072, 5, function(){
        滑块移动(1);
        sleep(500 + random(-100, 100));
    }, function(result){
        clickPoint(result.x +25  , result.y - 40 );
        sleep(1000);
    });
    return res;
}

//一般用来等待战斗结束返回主界面
//或者等待过地图返回主界面
//反正用来等待返回主界面
com.背包 = function(times2, successFunc, failFunc){
    if(!times2) times2 = 60;
    func.findImageEx("背包.png", 1715,702,1912,1029, times2, function(){
        滑块移动(1);
        if(failFunc && typeof failFunc == "function") failFunc();
        sleep(500 + random(-100, 100));
    }, function(res){
        if(successFunc && typeof successFunc == "function") successFunc();
        //关闭弹窗
        logd("战斗结束返回主界面")
        sleep(2000);//等待弹窗自动关闭
    });
}

com.可接取 = function(successFunc, failFunc){
    func.findImageEx("可接取.png", 930,550,1552,1032, 30, function(){
        滑块移动(1);
        if(failFunc && typeof failFunc == "function") failFunc();
        sleep(500)
    }, function(result){
        clickPoint(result.x + random( -50, 50),  result.y + random(-8, 20));
        sleep(1500);
        if(successFunc && typeof successFunc == "function") successFunc();

    })

}

com.立即前往 = function(times, successFunc){
    if(!times) times = 60;
    func.findImageEx("立即前往.png", 875,632,1615,1074, times, function(){
        滑块移动(1);
        sleep(500)
    }, function(result){
        clickPoint(result.x + random( -50, 50),  result.y + random(-8, 20));
        sleep(2000);
        if(successFunc && typeof successFunc == "function") successFunc();
    })

}

com.领取奖励 = function(times, successFunc){
    if(!times) times = 20;
    func.findImageEx("领取奖励.png", 875,632,1615,1074, times, function(){
        滑块移动(1);
        sleep(500)
    }, function(result){
        clickPoint(result.x + random( -50, 50),  result.y + random(-8, 20));
        sleep(2000);
        if(successFunc && typeof successFunc == "function") successFunc();
    })
}


com.匹配前往 = function(){
    func.findImageEx("匹配前往.png", 650,857,1225,1069, 20, function(){
        滑块移动(1);
        sleep(500)
    }, function(result){
        clickPoint(result.x + random( -50, 50),  result.y + random(-8, 20));
        sleep(2000);

    })
}

com.战斗界面 = function(times, successFunc, failFunc){
    if(!times) times2 = 60;
    func.findImageEx("8.png", 1325,612,1912,1064, times, function(){
        滑块移动(1);
        sleep(500 + random(-100, 100));
        if(failFunc && typeof failFunc == "function") failFunc();
    }, function(res){
//       logd("进入战斗");
       if(successFunc && typeof successFunc == "function") successFunc();
    });

}


com.角色强化 = function(times, successFunc, failFunc){
    if(!times) times = 10;
    func.findImageEx("角色.png", deviceW/2,deviceH/2,deviceW,deviceH, times, function(){
        滑块移动(1);
        sleep(500 + random(-100, 100));
        if(failFunc && typeof failFunc == "function") failFunc();
    }, function(result){
        clickPoint(result.x + random(-5, 5), result.y +  random(-5, 5))
        sleep(5*1000);
        //加点强化
        func.findImageEx("推荐加点.png", 1355,312,1835,664, 10, function(){
            滑块移动(1);
            sleep(500 + random(-100, 100));
        }, function(result){
            clickPoint(result.x + random(-30, 30), result.y)
            sleep(2*1000);
            func.findImageEx("确定加点.png", 1142,820,1724,1067, 10, function(){
                滑块移动(1);
                sleep(500 + random(-100, 100));
            }, function(result){
                clickPoint(result.x + random(-30, 30), result.y)
                sleep(2*1000);
            });
        });
        com.全屏弹窗叉();
        //属性
        //骑证
       if(successFunc && typeof successFunc == "function") successFunc();
    });

}


com.宠物强化 = function(times, successFunc, failFunc){
    if(!times) times = 10;
    func.findImageEx("宠物.png", deviceW/2,deviceH/2,deviceW,deviceH, times, function(){
        滑块移动(1);
        sleep(500 + random(-100, 100));
        if(failFunc && typeof failFunc == "function") failFunc();
    }, function(result){
        clickPoint(result.x + random(-5, 5), result.y +  random(-5, 5))
        sleep(5*1000);
        //加点强化
        //?????????????????????????????
        //属性
        //骑证
       if(successFunc && typeof successFunc == "function") successFunc();
    });


}

com.活动 = function(finalFunc){
    func.findImageByColor("活动.png", 277,2,984,292, 10,function(){
        滑块移动(1);
        sleep(500 + random(-100, 100));
    }, function(result){
        logd("111"+JSON.stringify(result))
        clickPoint(result.x + 30 + random(-20, 20), result.y + 10)
        sleep(2000);
        if(finalFunc && typeof finalFunc == "function") finalFunc();
    });
}


com.匹配挂机 = function(){
    func.findImageEx("匹配挂机.png", 855,502,1340,817, 20, function(){
        滑块移动(1);
        sleep(500)
    }, function(result){
        clickPoint(result.x + random( -50, 50),  result.y + random(-8, 20));
        sleep(2000);
    })
}

com.前往 = function(actName, finalFunc){
    let points = area.all;
    func.findImageEx(actName+".png", points[0],points[1],points[2],points[3], 20, function(){
        滑块移动(1);
        sleep(500)
    }, function(result){
        clickPoint(result.x +360+ random( -30, 30),  result.y+45);
        sleep(2*1000);
        com.弹窗叉();
        if(finalFunc && typeof finalFunc == "function") finalFunc();
    })
}

com.开启挑战 = function(times){
    if(!times) times = 30;
    func.findImageEx("开启挑战.png", 1122,472,1917,1072, times, function(){
        sleep(500);
    }, function(result){
        clickPoint(result.x + random(-50, 50), result.y)
        sleep(3*1000);
    });
}

com.确定 = function(times){
    if(!times) times = 30;
    return func.findImageEx("确定.png", 647,420,1284,782, times, function(){
        sleep(500);
    }, function(result){
        sleep(random(800, 1500));
        clickPoint(result.x + random(-50, 50), result.y)
        sleep(2*1000);
    });
}

com.自动匹配 = function(times){
    let lastR = false;
    func.findImageEx("自动匹配.png", 1210,745,1725,1037, 20, function(){
        滑块移动(1);
        sleep(500)
    }, function(result){
        clickPoint(result.x + random( -50, 50),  result.y);
        sleep(5*1000);
        let res = com.确定(times);
        if(res){
            lastR = true;
        }else{
            com.全屏弹窗叉();
            sleep(20*1000)
            if(!com.确定(5)){
                clickPoint(random(1600, 1800), 85+ random(290, 320));
                sleep(random(1300, 2000));
                clickPoint(random(1350, 1470), 85+ random(280, 310))//退出队伍
            }else{
                lastR = true;
            }
        }
    })
    return lastR;
}


com.招募佣兵 = function(teamNo){
    func.findImageEx("招募佣兵.png", 1050,785,1577,1035, 20, function(){
        滑块移动(1);
        sleep(500)
    }, function(result){
        clickPoint(result.x + random( -50, 50),  result.y);
        sleep(random(2500, 4000));
        func.findImageEx("邀请.png", 1562,305,1837,480, 20, function(){
            滑块移动(1);
            sleep(500)
        }, function(result){
            for(var i = 0; i < teamNo; i++){
                clickPoint(result.x + random( -30, 30),  result.y);
                sleep(random(600, 2000));
            }
            com.确定();
        })
        com.全屏弹窗叉();
    })
}


com.退出队伍 = function(times){
    if(!times) times = 1;
    let lastR = false;
    for(var i = 0; i < times; i++){
        let result = func.findImageEx("组队.png", 1560,155,1920,272, 5, function(){
        }, function(result1){
            clickPoint(result1.x + random(-50, 50), result1.y);
            sleep(random(1500, 2000));
        })
        if(!result){
            result = func.findImageEx("组队1.png", 1560,155,1920,272, 5, function(){
            }, function(result1){
            })
        }
        if(result){
            result = func.findImageEx("创建队伍.png", 1540,257,1907,347, 5);
            if(!result){
                clickPoint(random(1600, 1800), random(290, 320));
                sleep(random(1300, 2000));
                clickPoint(random(1350, 1470), random(280, 310))//退出队伍
                lastR = true;
            }
        }
        if(lastR){
            i = times + 1;
        }
    }
    return lastR;
}







