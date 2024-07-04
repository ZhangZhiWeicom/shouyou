//远古的召唤 没问题
function task1(){
    logd("远古的召唤");
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(2000);
    com.对话(5, 10);
    ocrTask();
}

//更多的技巧 没问题
function task3(){
    logd("更 多 的 技 巧");
    logd("开始任务")
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    logd("等待战斗")
    sleep(3000);
    com.战斗界面(60, function(){
        logd("进入战斗界面")
        for(var i = 0; i < 5; i++){
            //进入战斗界面
            func.findImageEx("10.png", 812,10,1144,185, 10, function(){
//                滑块移动(1);
                sleep(500 + random(-100, 100));
                com.弹窗叉();
            }, function(res){
                //进入战斗界面
                logd("选择战斗目标")
                clickPoint(712 + random(-20, 20), 410 + random(-20, 20));
                sleep(random(500, 1000));
                clickPoint(712 + random(-20, 20), 410 + random(-20, 20));
                sleep(10000)
            });
            com.背包(1, function(){
                logd("战斗结束返回主界面")
                i  =  6;
            });
        }
    });
    ocrTask();

}
//准备万全 没问题
function task4(){
    logd("准备万全");
    com.指引小白手(6);
    sleep(3*1000)
    com.全屏弹窗叉(function(){
        clickPoint(1587 + random(-10, 10),100 + random(-10, 10));
        sleep(random(1000, 2000));
        clickPoint(1820 + random(-10, 10),45 + random(-10, 10));
        sleep(random(1000, 2000));
        return true;
    });
    logd("指引结束");
    ocrTask();
}

//挑战 没问题
function task6(){
    logd("挑战");
    logd("开始任务")
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(5000);
    logd("开始对话")
    com.对话(3, 30);
    logd("等待进入战斗")
    com.战斗界面(60, function(){
        logd("进入战斗");
       sleep(20*1000);
       com.背包(60, function(){
           logd("战斗结束返回主界面")
       });
    });

    logd("开始任务1")
    sleep(1000)
    clickPoint(1690+ random(-100, 100),300 + random(-20, 20));
    sleep(1000);
    logd("开始对话1")
    com.对话(5, 20);
    sleep(1000);
    com.使用();
    ocrTask();
}
//出发前的准备 没问题
function task7(){
    logd("出发前的准备");
    logd("开始任务");
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(10*1000)
    com.对话(5, 30);
    sleep(random(500, 1500))
    logd("开始任务1")
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(10*1000);
    com.战斗界面(30, function(){
        logd("进入战斗");
        sleep(60*1000);
        com.背包(30, function(){
           //关闭弹窗
           logd("战斗结束返回主界面")
           sleep(2000);
//           func.findImageEx("确定.png", 647,420,1284,782, 300, function(){
//               滑块移动(1);
//               sleep(200)
//           }, function(result){
//                sleep(1000)
//               clickPoint(result.x + random( -50, 50),  result.y);
//               sleep(1500);
//           })
        });

    });

    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(10*1000)
    com.对话(3, 100);
    com.使用(function(){
        com.确认();
    });
    ocrTask();
}
//最 初 的 考 验 没问题
function task8(){
    logd("最 初 的 考 验");
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(1000);
    com.对话(5, 10);
    sleep(1000);
    ocrTask();
}
//最 后 的 准 备 没问题
function task9(){
    logd("最后的准备")
    //过各种指引
    com.指引小白手(7, 10);
    com.全屏弹窗叉();
    logd("弹窗关闭了")
    com.装备();
    logd("装备带上");
    com.弹窗叉();
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(3000);
    func.findImageEx("11.png", 1007,855,1397,1040, 10, function(){
        滑块移动(1);
        sleep(500 + random(-100, 100));
    }, function(result){
        clickPoint(result.x + random(-10, 10) , result.y +5);
        sleep(10*1000);
    });

    for(var i = 0; i < 30; i++){
        let ocrRes = func.ocr(1);
        var label = ocrRes ? ocrRes[0].label : "";
        if( label && label.indexOf("告 别 故 乡") > -1){//进入下一阶段任务
          logd("进入下一阶段任务")
          i = 10000;
        }else{
            com.对话(3, 1);
            if(com.自动战斗(1)){
                sleep(10*1000);
            }
        }
    }
    ocrTask();
}
//告别故乡  没问题
function task10(){
    logd("告别故乡")
    logd("开始任务")
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(10*1000);
    com.对话(3, 30);
    sleep(2000)
    com.弹窗叉();
    com.装备();
    com.全屏弹窗叉();
    com.全屏弹窗叉();
    ocrTask();
}
//出发 没问题
function task11(){
    logd("出发")
    logd("开始任务")
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(6*1000);
    com.对话(3, 30);
    com.战斗界面(30, function(){
        logd("进入战斗");
        com.自动战斗();
        sleep(20*1000);
    });
    com.对话(3, 30);
    ocrTask();
}
//获得坐骑 没问题
function task12(){
    logd("获得坐骑")
    logd("开始任务")
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(5*1000);
    com.战斗界面(60, function(){
        logd("进入战斗");
        com.指引小白手(5, 30);
    });
    com.背包(30);
    sleep(15*1000);//等待弹窗自动关闭
    com.背包(30);
    ocrTask();
}
//卡坦村 没问题
function task13(){
    logd("卡坦村")
    logd("开始任务")
    com.指引小白手(8);
    com.弹窗叉();
    //关闭弹窗
    for(var i = 0; i < 3; i++){
        com.全屏弹窗叉();
    }
    logd("弹窗关闭了")

    logd("开始任务")
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(10*1000);//等待过场动画
    com.背包(30);
    ocrTask();
}
//干旱的威胁 没问题
function task14(){
    logd("干旱的威胁")
    func.findImageEx("邮件.png", 757,702,1127,997, 10, function(){

    }, function(result){
        clickPoint(result.x + random(-10, 10), result.y + random(-10, 10))
        sleep(2000);
        func.findImageEx("一键领取.png", 512,822,1014,1067, 5, function(){
        }, function(result){
            clickPoint(result.x + random(-10, 10), result.y + random(-10, 10))
            sleep(10*1000);
        });
        com.全屏弹窗叉();
        for(var i = 0; i < 7; i++){
            com.使用(function(){
                com.确认();
                extra.领取年兽(1);
            });
        }
        com.全屏弹窗叉();

    });

    logd("开始任务")
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(10*1000);
    com.对话(6, 30);
    com.装备();
    logd("装备带上");
    com.弹窗叉();
    ocrTask();
}
//热心助人  没问题
function task20(){
    logd("热心助人")
    logd("开始任务")
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(15*1000);
    com.战斗界面(30, function(){
        logd("进入战斗");
        com.自动战斗();
        sleep(20*1000)
        com.背包(60);
    });

    com.战斗界面(30, function(){
        logd("进入战斗");
        com.自动战斗();
        sleep(20*1000)
        com.背包(60);
    });
    ocrTask();
}
//返回卡坦村  没问题
function task21(){
    logd("返回卡坦村")
    logd("开始任务")
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(10*1000);
    com.对话(3, 20);
    com.战斗界面(30, function(){
        logd("进入战斗");
        com.自动战斗();
        sleep(20*1000)
    });
    com.对话(3, 30);
    sleep(3*1000);
    com.角色强化();
    sleep(5*1000);
    ocrTask();
}

//主线--整装待发 没问题
function task22(){
    logd("整装待发")
    logd("开始任务")
//    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
//    sleep(10*1000);//去传言版
    com.可接取();
    com.立即前往(10, function(){
        sleep(6000);
        com.对话(4, 30);
        com.全屏弹窗叉();
    });

    logd("开始任务")
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(15*1000);

    com.领取奖励();
    sleep(5*1000);
    ocrTask();

}

//传言板任务--熟悉敌情上 ?????????????????????????????????
function task23(){
    logd("熟悉敌情上")
    com.可接取();
    com.立即前往(10, function(){
        sleep(5000);
        com.对话(3, 60);
        com.弹窗叉();
    });


    com.指引小白手(5);
    com.全屏弹窗叉();
    //有战斗，等待结束
    func.findImageEx("确定.png", 647,420,1284,782, 300, function(){
        滑块移动(1);
        sleep(500)
    }, function(result){
        clickPoint(result.x + random( -50, 50),  result.y);
        sleep(5*1000);
        com.弹窗叉();//
    })

    for(var i = 0; i <4; i++){
        clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
        sleep(10*1000);
        com.立即前往(10, function(){
            logd("立即前往")
            sleep(10*1000);
            var result = func.findImageEx("对话.png", 180,640,1040,1030, 30, function(){
                滑块移动(1);
                sleep(500);
            }, function(res){
                logd("出现对话")
                sleep(1000)
            });
            if(result){
                i = 5;
                com.对话(4, 30);
            }
        });

    }

    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(10*1000);
    com.领取奖励();

    sleep(5*1000);
    ocrTask();
}



//主线--熟悉敌情下 没问题
function task24(){
    logd("熟悉敌情下")
    com.可接取();
    com.立即前往(20);
    sleep(3000)
    com.指引小白手(4);
    com.全屏弹窗叉();
    com.使用(function(){
        com.确认();
        sleep(1000);
    });

    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(5*1000);
    com.立即前往(20);
    sleep(5*1000);
    com.指引小白手(5);
    sleep(20*1000);
    //进入战斗
    func.findImageEx("确定.png", 647,420,1284,782, 300, function(){
        滑块移动(1);
        sleep(500)
    }, function(result){
        clickPoint(result.x + random( -50, 50),  result.y);
        sleep(1500);
    })

    clickPoint(1690+ random(-100, 100),277);
    sleep(10*1000);
    com.立即前往(60);
    sleep(5*1000);
    com.指引小白手(8);
    com.全屏弹窗叉(function(){
        clickPoint(1587 + random(-10, 10),100 + random(-10, 10));
        sleep(random(1500, 2000));
        clickPoint(1820 + random(-10, 10),45 + random(-10, 10));
        sleep(random(1500, 2000));
        return true;
    });

   for(var i = 0; i <4; i++){
        clickPoint(1690+ random(-100, 100),277);
        sleep(5*1000);
        com.立即前往(60, function(){
            logd("立即前往")
            sleep(10*1000);
            var result = func.findImageEx("对话.png", 180,640,1040,1030, 30, function(){
                滑块移动(1);
                sleep(500);
            }, function(result){
                logd("出现对话")
                sleep(1000)
            });
            if(result){
                i = 5;
                com.对话(4, 60);
            }
        });
   }

    clickPoint(1690+ random(-100, 100),277);
    sleep(6*1000);
    com.领取奖励();

    sleep(5*1000);
    ocrTask();
}




//主线--学习节能 没问题
function task25(){
    logd("学习技能")
    com.可接取();
    com.立即前往(10, function(){
        sleep(3*1000);
        com.指引小白手(12, 30);

        com.弹窗叉();
        com.全屏弹窗叉();
        com.使用(function(){
            com.确认();
        });
        sleep(2000);
    });

    clickPoint(1690+ random(-100, 100),277);
    sleep(5*1000);
    com.领取奖励();

    sleep(5*1000);
    ocrTask();
}

//主线--决战 没问题
function task26(){
    logd("决战")
    com.可接取();
    com.立即前往(10, function(){
        sleep(5*1000);
        com.对话(2, 30);
        sleep(20*1000);//等待战斗结束
        com.对话(2, 60);
        sleep(2000)
    });
    clickPoint(1690+ random(-100, 100),277);
    sleep(15*1000);
    com.领取奖励();

    sleep(5*1000);
    ocrTask();

}



//主线--提升实力 没问题
function task27(){
    logd("提升实力")
    com.可接取();
    com.立即前往(10,function(){
        sleep(5*1000);
        com.匹配前往();
        func.findImageEx("匹配挂机.png", 855,502,1340,817, 20, function(){
            滑块移动(1);
            sleep(500)
        }, function(result){
            clickPoint(result.x + random( -50, 50),  result.y + random(-8, 20));
            sleep(2000);
        })

        func.findImageEx("自动匹配.png", 1210,745,1725,1037, 20, function(){
            滑块移动(1);
            sleep(500)
        }, function(result){
            clickPoint(result.x + random( -50, 50),  result.y);
            sleep(60*1000);
            func.findImageEx("确定.png", 647,420,1284,782, 500, function(){
                滑块移动(1);
                sleep(500)
            }, function(result){
                sleep(3000)
                clickPoint(result.x + random( -50, 50),  result.y);
                sleep(1500);
            })
        })

        com.使用(function(){
            com.确认();
        });
        sleep(3*1000);
    });

    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(20*1000);
    com.领取奖励();
    com.弹窗叉();
    com.使用(function(){
        com.确认();
    });
    com.装备();
    com.弹窗叉();
    sleep(5*1000);
    ocrTask();
}

//卡坦的敬意 没问题
function task28(){
    logd("卡坦的敬意");
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(5*1000);
    com.对话(3, 30);
    sleep(5*1000);
    ocrTask();
}

//前往海底通道 没问题
function task29(){
    logd("前往海底通道");
    clickPoint(1690+ random(-100, 100),277);
    sleep(5*1000);
    com.对话(2, 30);
    sleep(5*1000);
    ocrTask();
}

//清理怪物 没问题
function task30(){
    logd("清理怪物");
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(5*1000);
    for(var i = 0; i < 5; i++){
        com.战斗界面(30, function(){
            logd("进入战斗界面");
            com.自动战斗();
            com.背包(60,function(){
                logd("进入主界面")
                sleep(5*1000)
                let ocrRes = func.ocr(1);
                var label = ocrRes ? ocrRes[0].label : "";
                if( label && label.replace(/\s/g,"").indexOf("离开海底通道") > -1){//进入下一阶段任务
                    logd("进入下一阶段任务")
                    i = 10000;
                }
            });
        });
    }
    sleep(5*1000);
    ocrTask();
}


//离开海底通道 没问题
function task31(){
    logd("离开海底通道")
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(5*1000);
    com.对话(2, 30);
    sleep(5*1000);
    ocrTask();
}

//前往加加村 没问题
function task32(){
    logd("前往加加村");
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(10*1000);
    com.对话(4, 30);
    sleep(5*1000);
    com.角色强化();
    sleep(3*1000);
    ocrTask();
}

//传言班任务--强恩一族？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？
function task33(){
    logd("强恩一族")
    com.可接取();
    com.立即前往(10, function(){
        func.findImageEx("11.png", 1007,855,1397,1040, 10, function(){
            滑块移动(1);
            sleep(500 + random(-100, 100));
        }, function(result){
            sleep(2000);
            clickPoint(result.x + random(-10, 10) , result.y +5);
            sleep(10*1000);
        });
        com.对话(7, 30);
        sleep(30*1000);
        com.对话(7, 30);
        sleep(10*1000);
        com.对话(7, 30);
        sleep(10*1000);
        com.对话(2, 30);
        com.战斗界面(30, function(){
            logd("进入战斗")
            com.自动战斗();
            sleep(10*1000);
            com.背包(60, function(){
                logd("返回主界面")
            });
        });
        com.对话(7, 30);
        com.战斗界面(30, function(){
            logd("进入战斗")
            com.自动战斗();
            sleep(5*1000);
            com.背包(60, function(){
                logd("返回主界面")
            });
            sleep(10*1000);
        });
        com.对话(3, 30);
        sleep(10*1000);
        com.对话(5, 30);
        com.战斗界面(30, function(){
            logd("进入战斗")
            com.自动战斗();
            com.背包(60, function(){
                logd("返回主界面")
            });
            sleep(10*1000);
        });
        com.对话(20, 30);
        sleep(20*1000);
    });
    sleep(5*1000);
    task34();
}



//传言班任务--强恩一组
function task34(){
    logd("传言班任务--强恩一组")
    func.findImageEx("12.png", 1267,505,1799,857, 30, function(){
        滑块移动();
        sleep(500);
    }, function(result){
        logd("result========"+JSON.stringify(result))
        clickPoint(result.x + random(-100, 100), result.y)
        sleep(1000);
        com.对话(3, 10);
        sleep(10*1000);
        com.战斗界面(30, function(){
            com.自动战斗();
            com.背包(60, function(){
                logd("返回主界面")
                sleep(5*1000);
            });
        });
    })

    func.findImageEx("13.png", 1267,505,1799,857, 30, function(){
        滑块移动();
        sleep(500);
    }, function(result){
        logd("result========"+JSON.stringify(result))
        clickPoint(result.x + random(-100, 100), result.y)
        sleep(1000);
        com.对话(3, 10);
        sleep(10*1000);
        com.对话(6, 30);
        sleep(5*1000);
        com.战斗界面(30, function(){
            com.自动战斗();
            com.对话(7, 120);
        });
    })
    logd("到这里结束了")

    sleep(5*1000);
    com.对话(8, 30);
    sleep(5*1000);
    com.对话(9, 30);
    sleep(5*1000);
    com.对话(9, 30);
    sleep(10*1000);
    com.对话(7, 30);
    sleep(10*1000);
    com.对话(7, 30);
    sleep(5*1000);
    com.装备();
    sleep(2000);

    clickPoint(1690+ random(-100, 100),277);
    sleep(5*1000);
    for(var i = 0; i < 500; i++){
        com.自动战斗(1);
        com.领取奖励(1, function(){
            i = 1000;
        });
    }

    sleep(5*1000);
    ocrTask();

}

//考研（推荐30级） 没问题
function task35(){
    com.可接取();
    com.立即前往(10, function(){
        sleep(5*1000);
        com.对话(2, 30);
        com.战斗界面(30, function(){
            com.自动战斗();
            sleep(10*1000);
            com.对话(2, 60);
        });
    });
    clickPoint(1690+ random(-100, 100),277);
    sleep(5*1000);//等待2次战斗
    for(var i = 0; i < 2; i++){
        com.战斗界面(60, function(){
            com.自动战斗();
            sleep(10*1000);
            com.背包(60, function(){
                logd("返回主界面")
                sleep(10*1000);
            });
        });
    }
    com.领取奖励(60);
    sleep(10*1000);
    com.弹窗叉();
    com.使用(function(){
        com.确认();
    });
    ocrTask();
}

//问题已解决 没问题
function task36(){
    logd("问题已解决");
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(5*1000)
    com.对话(4, 30);
    sleep(5*1000)
    ocrTask();
}

//加美航空  没问题
function task37(){
    logd("加美航空");
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(10*1000);
    com.对话(5, 30);
    sleep(5*1000);
    ocrTask();
}


//挑战百人道场
function task38(){
    logd("挑战百人道场");
    com.可接取();
    com.立即前往(10, function(){
        sleep(10*1000);
        func.findImageEx("进入道场.png", 730,655,1320,1015, 60, function(){
            滑块移动();
            sleep(500);
        }, function(result){
            clickPoint(result.x + random(-50, 50), result.y);
            sleep(2*1000);
        });
        func.findImageEx("前往挑战.png", 1527,472,1914,859, 10, function(){
            滑块移动();
            sleep(500);
        }, function(result){
            clickPoint(result.x + random(-30, 30), result.y);
            sleep(2*1000);
        });
        func.findImageEx("开始挑战.png", 1237,560,1904,947, 5, function(){
            滑块移动();
            sleep(500);
        }, function(result){
            clickPoint(result.x + random(-30, 30), result.y);
            sleep(5*1000);
            com.战斗界面(30, function(){
                com.自动战斗();
                sleep(30*1000);
                com.背包(120, function(){
                    sleep(5*1000);
                    clickPoint(random(800, 1000), random(600, 1200));
                    sleep(2000);
                    func.findImageByColor("退出.png", 0,0,762,377, 10, function(){
                        滑块移动();
                        sleep(500);
                    }, function(result){
                        clickPoint(result.x + random(-30, 30), result.y);
                        sleep(10*1000);
                    });

                })
            });
        });
    });

    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(15*1000);
    com.领取奖励();
    sleep(5*1000);
    ocrTask();
}


//加美航空急需木材 没问题
function task39(){
    logd("加美航空急需木材");
    com.可接取();
    com.立即前往(10, function(){
        sleep(10*1000);
        com.对话( 3, 30);
        sleep(20*1000);//等待战斗结束
        com.对话( 3, 60);
        sleep(10*1000);//等待战斗结束
        com.对话( 3, 60);
        sleep(5*1000)
        for(var i = 0; i < 4; i++){
            com.战斗界面(30, function(){
                com.自动战斗();
                sleep(20*1000);
                com.背包(60, function(){
                    sleep(5*1000);
                });
            });
        }
        com.对话( 3, 60);
        for(var i = 0; i < 5; i++){
            com.战斗界面(30, function(){
                com.自动战斗();
                sleep(20*1000);
                com.背包(60, function(){
                    sleep(5*1000);
                });
            });
        }
        com.对话(2, 60);
        sleep(1000);
    });

    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(15*1000);
    com.领取奖励();
    sleep(5*1000);
    ocrTask();
}



//航空之困  没问题
function task40(){
    logd("航空之困");
    com.可接取();
    com.立即前往(10, function(){
        sleep(10*1000);
        for(var i = 0; i < 3; i++){
            com.战斗界面(30, function(){
                com.自动战斗();
                sleep(10*1000);
                com.背包(60, function(){
                    sleep(5*1000);
                });
            });
        }
        com.对话(2, 30);
    });

    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(15*1000);
    com.领取奖励();
    com.弹窗叉();
    com.使用(function(){
        com.确认();
    });
    sleep(5*1000);
    task41();
}


//加美航空 没问题
function task41(){
    com.角色强化();
    func.findImageEx("邮件.png", 757,702,1127,997, 10, function(){
    }, function(result){
        clickPoint(result.x + random(-10, 10), result.y + random(-10, 10))
        sleep(2000);
        func.findImageEx("一键领取.png", 512,822,1014,1067, 5, function(){
        }, function(result){
            clickPoint(result.x + random(-10, 10), result.y + random(-10, 10))
            sleep(10*1000);
        });
        com.全屏弹窗叉();
    });

    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(10*1000);
    com.对话(3, 30);
    sleep(30*1000);
    com.背包(60, function(){
        logd("返回主界面")
    });
    ocrTask();
}

//前往吉鲁岛 没问题
function task42(){
    logd("前往吉鲁岛");
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(15*1000);
    com.对话(4, 30);
    ocrTask();
}

//前往封印之石 没问题
function task43(){
    logd("前往封印之石");
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(3*1000);
    com.对话(2, 10);
    ocrTask();
}

//驱逐长毛象 没问题
function task44(){
    logd("驱逐长毛象");
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(10*1000);
    for(var i = 0; i < 4; i++){
        com.战斗界面(60, function(){
            com.自动战斗();
            sleep(10*1000);
            com.背包(60, function(){
                sleep(5*1000);
            });
        });
    }
    ocrTask();
}


//线索 没问题
function task45(){
    logd("线索");
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(10*1000);
    com.对话(2, 30);
    sleep(15*1000);
    ocrTask();
}


//开启精灵王试炼
function task46(){
    logd("开启精灵王试炼");
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(4*1000);
    com.指引小白手(2);
    sleep(10*1000);
    for(var i = 0; i < 5; i++){
        com.战斗界面(60, function(){
            com.自动战斗();
            sleep(5*1000);
            com.背包(60, function(){
                sleep(10*1000);
            });
        });
    }

    //这段有问题
    func.findImageEx("开启挑战.png", 1125,712,1800,1064, 30, function(){
        sleep(500);
    }, function(result){
        clickPoint(result.x + random(-50, 50), result.y)
        sleep(3*1000);
    });

    func.findImageEx("确定.png", 647,420,1284,782, 30, function(){
        sleep(500);
    }, function(result){
        clickPoint(result.x + random(-50, 50), result.y)
        sleep(3*1000);
    });
    func.findImageEx("自动匹配.png", 1210,745,1725,1037, 10, function(){
        滑块移动(1);
        sleep(500)
    }, function(result){
        clickPoint(result.x + random( -50, 50),  result.y);
        sleep(5*1000);
        func.findImageEx("确定.png", 647,420,1284,782, 300, function(){
            滑块移动(1);
            sleep(500)
        }, function(result){
            sleep(1000)
            clickPoint(result.x + random( -50, 50),  result.y);
            sleep(1500);
        })

        //这段有问题
        func.findImageEx("开启挑战.png", 1125,712,1800,1064, 30, function(){
            sleep(500);
        }, function(result){
            clickPoint(result.x + random(-50, 50), result.y)
            sleep(3*1000);
        });
        com.全屏弹窗叉();
        sleep(3*1000);
    })

    //下面逻辑没问题


    func.matchTemplateEx("精灵.png", 0,0,deviceW,deviceH, 10, function(){
        滑块移动(1);
        sleep(500)
    }, function(result){
        clickPoint(result.x + 50+ random( -30, 30),  result.y + 10);
        sleep(2*1000);
    })
    //开始挑战
    func.findImageEx("开启挑战.png", 1125,500,1800,1064, 30, function(){
        sleep(500);
    }, function(result){
        clickPoint(result.x + random(-50, 50), result.y)
        sleep(10*1000);
    });

    com.战斗界面(60, function(){
        com.自动战斗();
        sleep(60*1000);
        com.背包(500);
    });
    func.findImageEx("退出领奖.png", 1125,500,1800,1064, 30, function(){
        sleep(500);
    }, function(result){
        clickPoint(result.x + random(-50, 50), result.y)
        sleep(3*1000);
    });

    func.findImageEx("结算奖励.png", 872,660,1457,1065, 30, function(){
        sleep(500);
    }, function(result){
        clickPoint(result.x + random(-50, 50), result.y)
        sleep(5*1000);
    });
    func.findImageEx("关闭.png", 872,660,1457,1065, 30, function(){
        sleep(500);
    }, function(result){
        clickPoint(result.x + random(-50, 50), result.y)
        sleep(3*1000);
    });
    com.装备();
    com.装备();
    com.弹窗叉();
    sleep(2000);
    com.角色强化();
    sleep(3000);
    ocrTask();

}



function task47(){
    logd("找到管理员");
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(6*1000);
    com.对话(3, 20);
    sleep(8*1000);
    ocrTask();
}

function task48(){
    logd("找到封印之石");
    clickPoint(1690+ random(-100, 100),277);
    sleep(6*1000);
    com.战斗界面(60, function(){
        com.自动战斗();
        sleep(10*1000);
        func.findImageEx("确定.png", 647,420,1284,782, 300, function(){
           滑块移动(1);
           sleep(500)
        }, function(result){
            sleep(2000)
           clickPoint(result.x + random( -50, 50),  result.y);
           sleep(1500);
        })
    });

    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(3*1000);
    ocrTask();
}

function task49(){
    logd("返回库伊老爷爷家");
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(3*1000);
    for(var i = 0; i < 5; i++){
        com.战斗界面(60, function(){
            com.自动战斗();
            sleep(10*1000);
            com.背包(60, function(){
                logd("战斗结束返回主界面")
                sleep(5*1000);
            });
        });
    }
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(3*1000);
    com.对话(5, 20);
    ocrTask();
}

function task50(){
    logd("库伊老爷爷家里");
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(3*1000);
    com.对话(3, 20);
    ocrTask();
}

function task51(){
    logd("返回渔村");
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(3*1000);
    com.对话(5, 20);
    sleep(2000);
    com.弹窗叉();
    ocrTask();
}



