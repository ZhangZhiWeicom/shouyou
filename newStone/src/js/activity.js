let activity = function(){}

//日常挂机
//挂机
activity.挂机 = function(finalFunc){
    if(gj.check == false) return ;
    action = "挂机";
    func.findImageByColor("挂机.png", 142,2,629,239, 10,function(){
        滑块移动(1);
        sleep(500 + random(-100, 100));
    }, function(result){
        clickPoint(result.x + 30 + random(-20, 20), result.y + 10)
        sleep(2000);
        com.匹配前往();
        com.匹配挂机();
        func.findImageEx("自动匹配.png", 1210,745,1725,1037, 20, function(){
            滑块移动(1);
            sleep(500)
        }, function(result){
            clickPoint(result.x + random( -50, 50),  result.y);
            sleep(20*1000);
            com.弹窗叉();
            if(gj.type == "free"){//免费的30分钟
                for(var i = 0; i < 100000; i++){
                    滑块移动(1);
                    sleep(500);
                    func.findImageEx("无.png", 737,610,1012,767, 1, function(){
                    }, function(res){
                        func.findImageEx("停止抓宠.png", 825,480,1405,905, 1, function(){
                        }, function(result2){
                            clickPoint(result2.x + 30 + random(-60, 60), result2.y +random(-10, 10));
                            sleep(1000);
                            com.确定();
                            i = 100000 -2;
                        })
                    })
                }
            }else if(gj.type == "always"){//组队挂机
                let nowTime = time();
                for(var i = 0; i < 100000; i++){
                    滑块移动(1);
                    sleep(500);
                    if((time() - nowTime) > 1000*60*gj.time){
                        //挂机时间到
                        func.findImageEx("停止抓宠.png", 825,480,1405,905, 1, function(){
                        }, function(result2){
                            clickPoint(result2.x + 30 + random(-60, 60), result2.y +random(-10, 10));
                            sleep(1000);
                            com.确定();
                            i = 100000 -2;
                        })
                    }
                }
            }else if(gj.type == "task"){//升级任务挂机
                if(finalFunc && typeof finalFunc == "function") finalFunc();
            }

        })
    });
}

activity.抓宠 = function(){
    if(zc.check == false) return ;
    action = "抓宠";
    com.活动(function(){
        com.前往("抓宠", function(){
            sleep(2000);
            func.findImageEx("前往捕捉.png", 662,607,1124,917, 20, function(){
                sleep(500);
                滑块移动(1);
            }, function(result){
                //自动放生普通宠物 需要月卡68 主打白嫖，分币不充
                //clickPoint(725, 830);
                //sleep(1000);
                clickPoint(result.x + random(-50, 50), result.y);
                let nowTime = time();
                for(var i = 0; i < 1000000; i++){
                    滑块移动(1);
                    sleep(500);
                    func.findImageEx("自动关闭.png", 640,922,1250,1072, 1, function(){
                    }, function(result1){
                        clickPoint(result1.x + random(-100, 100), result1.y +random(-20, 20));
                    })
                    if(zc.type == "free"){
                        logd("free")
                        func.findImageEx("无.png", 737,610,1012,767, 1, function(){
                        }, function(res){
                            func.findImageEx("停止抓宠.png", 825,480,1405,905, 1, function(){
                            }, function(result2){
                                clickPoint(result2.x + 30 + random(-60, 60), result2.y +random(-10, 10));
                                sleep(1000);
                                com.确定();
                                sleep(1000);
                                com.弹窗叉();
                                i = 1000000 - 2;
                            })
                        })
                    }else if(zc.type == "always"){
                        logd("always")
                        if((time() - nowTime) > 1000*60*zc.time){
                            //挂机时间到
                            logd("时间到了")
                            func.findImageEx("停止抓宠.png", 825,480,1405,905, 1, function(){
                            }, function(result2){
                                clickPoint(result2.x + 30 + random(-60, 60), result2.y +random(-10, 10));
                                sleep(1000);
                                com.确定();
                                sleep(1000);
                                com.弹窗叉();
                                i = 1000000 - 2;
                            })
                        }
                    }
                }
            })
        });
    });
}

activity.精灵王试炼 = function(){
    logd("精灵王试炼");
    if(jlw.check == false) return ;
    action = "精灵王试炼";
    com.活动(function(){
        com.前往("精灵王试炼", function(){
        sleep(2000);
        //突然进入各种战斗？？？？？？？需要加等待处理
        com.开启挑战(100);
        com.确定();
        com.自动匹配(120);//后期改成自己号组队
        com.开启挑战();
        //以下是循环的
        for(var i = 0; i < jlw.floor; i++){
            func.matchTemplateEx("精灵.png", 0,0,deviceW,deviceH, 10, function(){
                滑块移动(1);
                sleep(500)
            }, function(result){
                clickPoint(result.x + 50+ random( -30, 30),  result.y + 10);
                sleep(2*1000);
                com.开启挑战();
                com.战斗界面(30, function(){
                    logd("进入战斗界面");
                    com.自动战斗();
                    sleep(30*1000);
                    com.背包(300,function(){
                        logd("进入主界面")
                        sleep(2*1000)
                    });
                });
            })
        }

        func.findImageEx("退出领奖.png", 1125,500,1800,1064, 30, function(){
            sleep(500);
        }, function(result){
            clickPoint(result.x + random(-50, 50), result.y)
            sleep(2*1000);
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
            sleep(2*1000);
        });
        com.装备();
    });
    });
}



activity.家族捐献 = function(){
    action = "家族捐献";


}

activity.百人道场 = function(){
    if(brdc.check == false) return ;
    action = "百人道场";
    logd(action)
    com.活动(function(){
        com.前往("百人道场", function(){
            sleep(15*1000);
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

                    for(var i = 0; i < 120; i++){
                        滑块移动(1);
                        sleep(500);
                        func.findImageByColor("空白处关闭.png", 756,663,1165,833, 1, function(){//战斗失败
                        }, function(result1){
                            sleep(random(1000, 2000));
                            clickPoint(random(723,1253), random(816,962 ));
                            sleep(500);

                        })
//                        com.背包(1, function(){
//                            sleep(5*1000);
//                            clickPoint(random(800, 1000), random(600, 1200));
//                            sleep(2000);
//                        })
                        func.findImageByColor("退出.png", 0,0,762,377, 1, function(){
                        }, function(result2){
                            i = 100000;
                            clickPoint(result2.x + random(-30, 30), result2.y);
                            sleep(10*1000);
                        });
                    }
                });
            });
        });





    });


}
//
//activity.世界首领 = function(){
//
//
//}


//周常活动
activity.勇闯天空岛 = function(){
    logd("勇闯天空岛");
    com.前往("勇闯天空岛", function(){
        sleep(5*1000);
//        func.findImageEx("便捷组队.png", 1045,835,1387,1042, 20, function(){
//            滑块移动();
//            sleep(500);
//        }, function(result){
//            clickPoint(result.x + random(-50, 50), result.y);
//            sleep(2*1000);
//        });
        func.findImageEx("进入.png", 1410,885,1697,1010, 20, function(){
            滑块移动();
            sleep(500);
        }, function(result){
            clickPoint(result.x + random(-50, 50), result.y);
            sleep(2*1000);
        });
        com.确定();
        func.findImageEx("天空岛npc.png", 0,0,deviceW,deviceH, 10, function(){
            滑块移动(1);
            sleep(500)
        }, function(result){
        logd("result========"+JSON.stringify(result))
            clickPoint(result.x ,  result.y);
            sleep(5*1000);
            com.开启挑战();
            com.战斗界面(30, function(){
                logd("进入战斗界面");
                com.自动战斗();
                sleep(30*1000);
                com.背包(300,function(){
                    logd("进入主界面")
                    sleep(2*1000)
                });
            });
        })




    });
}

activity.经典任务 = function(){
    logd("经典任务");
    com.前往("经典任务", function(){
        sleep(3*1000);
        func.findImageEx("接受任务.png", 840,625,1625,1067, 20, function(){

        }, function(result){
            clickPoint(result.x + random(-50, 50), result.y);
            sleep(3*1000);
            com.对话(8, 20);
            sleep(5*1000);


        })


    });

}
//
//activity.家族任务 = function(){
//
//
//}
//
//activity.咒术训练 = function(){
//
//
//}
//activity.逆境迷宫 = function(){
//
//
//}


//activity.经典任务 = function(){
//
//
// }
// activity.经典任务 = function(){
//
//
// }
// activity.经典任务 = function(){
//
//
//  }
//  activity.经典任务 = function(){
//
//
//   }






