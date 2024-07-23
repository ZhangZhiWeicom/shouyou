//前置


//主线
function mainTask(){
    func.findImageEx("下一题.png", 532,474,768,580, 20, function(result){
        clickPoint(340 + random(-5, 5),355+ random(-5, 5))//选择玩过回合制游戏
        sleepRandom(500, 1000)
        clickPoint(result.x + random( -50, 50),  result.y+ random( -50, 50));//下一题
        sleepRandom(500, 1000)
        clickPoint(340 + random(-5, 5),318+ random(-5, 5))//选择梦幻西游
        sleepRandom(500, 1000)
        clickPoint(638 + random(-30, 30),530+ random(-10, 10))//提交
        sleepRandom(500, 1000)
        clickPoint(638 + random(-30, 30),530+ random(-10, 10))//确认
        sleepRandom(500, 1000)
        clickPoint(730 + random(-200, 200),332 + random(-200, 200))//弹窗广告
        //接下来进入主线
    }, function(){
        滑块移动(1);
        sleep(500)
    })
    do{
        func.findImageByColor("主线任务.png", 996,140,1124,248, 1, function(result){
            logd("主线");
            clickPoint(result.x+110+ random( -50, 50),  result.y+20+ random(-10, 10));
            sleep(2000);
            findRoad();
        }, function(idx){
            logd("主线任务");

        })



        func.findImageEx("可接取.png", 774,532,884,568, 1, function(result){
            logd("可接取");
            clickPoint(result.x + random(-20, 20),result.y + random(-7, 7));//范围随机点击
            sleepRandom(800, 1200)
        }, function(idx){})

        func.findImageEx("立即前往.png", 768,528,890,568, 1, function(result){
            logd("立即前往");
            clickPoint(result.x + random(-20, 20),result.y + random(-7, 7));//范围随机点击
            sleepRandom(800, 1200)
            findRoad();
        }, function(idx){})



        func.findImageEx("接受任务.png", 724,618,850,656, 1, function(result){
            logd("接受任务");
            clickPoint(result.x + random(-20, 20),result.y + random(-7, 7));//范围随机点击
            sleepRandom(800, 1200)
        }, function(idx){
            // logd("11111111");
        })

        func.findImageEx("领取奖励.png", 766,530,890,574, 1, function(result){
            logd("领取奖励");
            clickPoint(result.x + random(-20, 20),result.y + random(-7, 7));//范围随机点击
            sleepRandom(1000, 1500)
        }, function(idx){})

        func.findImageEx("已完成.png", 768,528,890,572, 1, function(result){
            logd("已完成");
            func.findImageEx("弹窗叉.png", 978,12,1262,150, 1, function(result){
                logd("弹窗叉");
                clickPoint(result.x + random(-7, 7),result.y + random(-7, 7));//范围随机点击
                sleepRandom(800, 1200)
            }, function(idx){

            })
        }, function(idx){})

        func.findImageEx("使用.png", 822,512,960,574, 1, function(result){
            logd("使用");
            clickPoint(result.x + random(-20, 20),result.y + random(-7, 7));//范围随机点击
            sleepRandom(800, 1200)
        }, function(idx){})

        func.findImageEx("确认.png", 650,452,796,516, 1, function(result){
            logd("确认");
            clickPoint(result.x + random(-20, 20),result.y + random(-7, 7));//范围随机点击
            sleepRandom(800, 1500)
        }, function(idx){

        })

        func.findImageEx("确定.png", 546,372,800,462, 1, function(result){
            logd("确定");
            clickPoint(result.x + random(-20, 20),result.y + random(-7, 7));//范围随机点击
            sleepRandom(800, 1200)
        }, function(idx){})

        func.findImageByColor("自动.png", 1144,618,1274,714, 1, function(result){
            logd("自动");
            sleep(2000);
            clickPoint(result.x + random(-5, 5),result.y + random(-5, 5));//范围随机点击
            sleep(5*1000);
            func.findImageEx("背包.png", 1156,510,1276,624, 60, function(result){
                logd("出副本");
                sleep(1000);
            }, function(idx){
                sleep(1000);
            })
            // func.findImageEx()
        }, function(idx){})


        //就弹出一次，后续处理下
        func.findImageEx("我的宠物.png", 562,40,698,102, 1, function(result){
            logd("我的宠物");
            clickPoint(1058+ random(-7, 7),66 + random(-7, 7));//范围随机点击
            sleepRandom(800, 1200)
            clickPoint(1212+ random(-7, 7),26 + random(-7, 7));//范围随机点击
            sleepRandom(800, 1200)
        }, function(idx){

        })


        func.findImageEx("弹窗叉.png", 978,12,1262,150, 1, function(result){
            logd("弹窗叉");
            clickPoint(result.x + random(-7, 7),result.y + random(-7, 7));//范围随机点击
            sleepRandom(800, 1200)
        }, function(idx){

        })

        for(var i = 0; i < 10; i++){
            logd("iiii"+i);
            func.findImageEx("指引小白手.png", 0,0,deviceWidth,deviceHeight, 1, function(result){
                logd("指引小白手");
                clickPoint(result.x - 26,result.y - 26);//范围随机点击
                sleepRandom(1000, 1500)
            }, function(idx){
                logd("i=="+i);
                
                if(i > 0){
                    func.findImageEx("弹窗叉1.png", 1176,6,1246,56, 1, function(result){
                        clickPoint(result.x + random(-5, 5),result.y  + random(-5, 5));//范围随机点击
                        sleepRandom(800, 1500)
                    }, function(idx){

                    })
                }
                i = 100;
            })

        }





        func.findImageEx("装备.png", 836,528,954,568, 1, function(result){
            logd("装备");
            clickPoint(result.x + random(-20, 20),result.y + random(-7, 7));//范围随机点击
            sleepRandom(800, 1500)
        }, function(idx){

        })



        // //各种场景
        // func.findImageEx("弹窗叉1.png", 1176,6,1246,56, 1, function(result){
        //     clickPoint(result.x + random(-5, 5),result.y  + random(-5, 5));//范围随机点击
        //     sleepRandom(800, 1500)
        // }, function(idx){
        //
        // })


        func.findImageEx("进入道场.png", 642,558,764,594, 1, function(result){
            logd("进入道场");
            clickPoint(result.x + random(-20, 20),result.y + random(-7, 7));//范围随机点击
            sleepRandom(1500, 2000)
            func.findImageEx("前往挑战.png", 1150,438,1254,474, 1, function(result){
                logd("进入道场");
                clickPoint(result.x + random(-20, 20),result.y + random(-7, 7));//范围随机点击
                sleepRandom(800, 1500)




            }, function(idx){

            })



        }, function(idx){

        })

        func.findImageEx("攻击.png", 1032,372,1266,706, 1, function(result){
            logd("进入副本");
            sleep(5000);
            func.findImageByColor("自动.png", 1144,618,1274,714, 1, function(result){
                logd("自动");
                clickPoint(result.x + random(-5, 5),result.y + random(-5, 5));//范围随机点击
                sleep(2000);
            }, function(idx){})
            sleep(15000);
            func.findImageEx("背包.png", 1156,510,1276,624, 60, function(result){
                logd("出副本");
                sleep(1000);
            }, function(idx){
                sleep(1000);
            })
        }, function(idx){
            logd("");
        })


        for(i = 0; i<10; i++){
            func.findImageEx("对话.png", 118,468,264,626, 1, function(result){
                logd("对话");
                var toContinue = false;
                func.findImageEx("蓝色山脉的力量.png", 908,438,1150,476, 1, function(result){
                    logd("蓝色山脉的力量");
                    clickPoint(result.x + random(-30, 30),result.y + random(-10, 10));//范围随机点击
                    sleepRandom(300, 600)
                    toContinue = true;
                }, function(idx){

                })

                func.findImageEx("白色之风即速度.png", 908,496,1152,530, 1, function(result){
                    logd("白色之风即速度");
                    clickPoint(result.x + random(-30, 30),result.y + random(-10, 10));//范围随机点击
                    sleepRandom(300, 600)
                    toContinue = true;
                }, function(idx){

                })

                if(!toContinue){
                    clickPoint(1028 + random(-100, 100),620 + random(-20, 20));//范围随机点击
                    sleepRandom(500, 800)

                }
            }, function(idx){
                logd("对话："+i);
                i = 100;
            })

        }


        sleep(100);


    }while(true)



}

/**
 * 寻路
 */
function findRoad(){
    var times = 2;
    let  firstStep = func.ocr(82,42,132,60, 1);
    for(var i = 0; i < 100; i++){
        sleep(300);
        let  secondStep = func.ocr(82,42,132,60, 1);
        logd("secondStep=", JSON.stringify(secondStep));
        if(firstStep != null && secondStep != null && firstStep.label===secondStep.label && firstStep.label.length >= 2 ){
            logd("跑路结束");
            i = 1000;
        }else if(firstStep === null && secondStep === null ){
            times--;
            if(times <= 0){
                i = 1000;
            }
        }
        firstStep = secondStep;

        for(ii = 0; ii<10; ii++){
            func.findImageEx("对话.png", 118,468,264,626, 1, function(result){
                logd("对话");
                var toContinue = false;
                func.findImageEx("蓝色山脉的力量.png", 908,438,1150,476, 1, function(result){
                    logd("蓝色山脉的力量");
                    clickPoint(result.x + random(-30, 30),result.y + random(-10, 10));//范围随机点击
                    sleepRandom(300, 600)
                    toContinue = true;
                }, function(idx){

                })

                func.findImageEx("白色之风即速度.png", 908,496,1152,530, 1, function(result){
                    logd("白色之风即速度");
                    clickPoint(result.x + random(-30, 30),result.y + random(-10, 10));//范围随机点击
                    sleepRandom(300, 600)
                    toContinue = true;
                }, function(idx){

                })

                if(!toContinue){
                    clickPoint(1028 + random(-100, 100),620 + random(-20, 20));//范围随机点击
                    sleepRandom(500, 800)
                }
            }, function(idx){
                logd("对话："+ii);
                if(ii >0){
                    i = 1000;
                }
                ii = 100;
            })

        }

        func.findImageEx("过渡界面.png", 32,20,140,124, 1, function(result){
            sleep(10*1000);
            logd("过渡界面");
            i = 1;
        }, function(idx){
        })

        func.findImageEx("攻击.png", 1032,372,1266,706, 1, function(result){
            i = 1000;
            logd("进入副本");
            sleep(5000);
            func.findImageByColor("自动.png", 1144,618,1274,714, 1, function(result){
                logd("自动");
                clickPoint(result.x + random(-5, 5),result.y + random(-5, 5));//范围随机点击
                sleep(2000);
            }, function(idx){})
            sleep(5000);
            func.findImageEx("背包.png", 1156,510,1276,624, 120, function(result){
                logd("出副本");
                sleep(1000);
            }, function(idx){
                sleep(1000);
            })
        }, function(idx){
        })

        func.findImageEx("可接取.png", 774,532,884,568, 1, function(result){
            logd("可接取");
            clickPoint(result.x + random(-20, 20),result.y + random(-7, 7));//范围随机点击
            sleepRandom(800, 1200)
        }, function(idx){})

        func.findImageEx("接受任务.png", 724,618,850,656, 1, function(result){
            logd("接受任务");
            clickPoint(result.x + random(-20, 20),result.y + random(-7, 7));//范围随机点击
            sleepRandom(800, 1200)
        }, function(idx){})

        func.findImageEx("立即前往.png", 768,528,890,568, 1, function(result){
            logd("立即前往");
            clickPoint(result.x + random(-20, 20),result.y + random(-7, 7));//范围随机点击
            sleepRandom(800, 1200)
        }, function(idx){

        })

        func.findImageEx("领取奖励.png", 766,530,890,574, 1, function(result){
            logd("领取奖励");
            clickPoint(result.x + random(-20, 20),result.y + random(-7, 7));//范围随机点击
            sleepRandom(1000, 1500)



        }, function(idx){})

        func.findImageEx("已完成.png", 768,528,890,572, 1, function(result){
            logd("已完成");
            func.findImageEx("弹窗叉.png", 978,12,1262,150, 1, function(result){
                logd("弹窗叉");
                clickPoint(result.x + random(-7, 7),result.y + random(-7, 7));//范围随机点击
                sleepRandom(800, 1200)
            }, function(idx){

            })
        }, function(idx){})
        // sleep(100);
    }
}



