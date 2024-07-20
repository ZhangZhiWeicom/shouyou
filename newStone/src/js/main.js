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
//    func.findImageEx("1.png", 1536,251,1792,356, 10);
//        func.matchTemplateEx("1.png", 1535,260,1857,357, 20);
//func.findImageByColor("1.png", 1535,260,1857,357, 50);
//这段逻辑有问题
 //点击中间红龙
//    clickPoint(random(572,759), random(260,442))
    //开始挑战
//    func.findImageEx("开启挑战.png", 1125,500,1800,1064, 30, function(){
//    }, function(result){
//        clickPoint(result.x + random(-50, 50), result.y)
//        sleep(5*1000);
//    });

//func.matchTemplateEx("自动匹配.png", 1472,47,1894,312, 10, function(){
//        滑块移动();
//        sleep(500);
//
//    }, function(result){
//    logd("result========="+JSON.stringify(result));
//            clickPoint(result.x +random(-50, 50), result.y)
//    })






//
//var tid = thread.execAsync(function () {
//    while (true) {
//        toast(action,{
//           "x":905,
//           "y":855,
//           "duration":1000,
//           "textColor":"#778899",
//           "width":20,
//           "height":20,
//           "draggable":false
//        });
//        sleep(1000);
//        if (thread.isCancelled(tid)) {
//            break;
//        }
//    }
//});
//

//task1();
ocrTask();

//activity.抓宠();
//thread.cancelThread(tid);
//    activity.挂机();

//activity.精灵王试炼();
//com.角色强化();
//activity.百人道场();


//
//gj = JSON.parse(storages.getString("gj"));
//zc = JSON.parse(storages.getString("zc"));
//jlw = JSON.parse(storages.getString("jlw"));
//brdc = JSON.parse(storages.getString("brdc"));
//level = JSON.parse(storages.getString("level"));
//var ary = [];
//for(var no = 0; no < 1000000000000; no++){
//    if(storages.getString("today", "") != formatDate()){
//        gj.peroid = random(gj.time, gj.time2);
//        gj.usedTime = 0;
//
//        zc.peroid = random(zc.time, zc.time2);
//        zc.usedTime = 0;
//
//        jlw.floor =  0;
//
//        brdc.floor = 0;
//
//        ary = ["gj", "zc", "jlw", "brdc"];
//        storage.getString("today", formatDate())
//    }
//
//
//    for(var i = ary.length; i > 0; i--){
//        var idx = random(1, i) -1;
//        var item = ary[idx];
//        if(item == "gj"){
//            activity.挂机();
//        }else if(item == "zc"){
//            activity.抓宠();
//        }else if(item == "jlw"){
//            activity.精灵王试炼();
//        }else if(item == "brdc"){
//            activity.百人道场();
//        }
//        ary.splice(idx, 1);
//    }
//
//}







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

//转生
function task54(){
    logd("转生");
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(random(2000, 5000));
    com.弹窗叉();
    func.findImageEx("一转奖励.png", 642,687,1019,937, 10, function(){
    }, function(result){
        sleep(1000);
        clickPoint(random(1140,1340), random(960,1010));
        func.findImageEx("接受.png", 962,535,1229,670, 10, function(){
        }, function(result2){
            sleep(1000);
            clickPoint(result2.x + random(-30, 30), result.y);
            sleep(10*1000);
            com.战斗界面(60, function(){
                com.自动战斗();
                com.背包(100, function(){
                   logd("战斗结束返回主界面")
                    sleep(5*1000);
                    func.findImageEx("便捷组队.png", 1045,835,1387,1042, 20, function(){
                        滑块移动();
                        sleep(500);
                    }, function(result){
                        clickPoint(result.x + random(-50, 50), result.y);
                        sleep(2*1000);
                        com.自动匹配(60);
                        com.开启挑战();
                        sleep(2000)
                        com.开启挑战();
                        com.战斗界面(20, function(){

                        });
                    });


               });
            })
        })


    })

}


function task55(){
    logd("转生");
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(random(2000, 5000));
    fucn.findImageEx("前往挑战2.png", 1050,897,1505,1074, 10, function(){
        滑块移动();
    }, function(result){
        clickPoint(result.x + random(-50, 50), result.y);
        sleep(20*1000);
        com.战斗界面(30, function(){
            com.自动战斗();
            com.背包(60, function(){
                logd("回到主界面了");
                sleep(5*1000);
            });
        });
        com.开启挑战();
        sleep(3*1000);
        func.findImageEx("便捷组队.png", 1045,835,1387,1042, 20, function(){
            滑块移动(1);
            sleep(500);
        }, function(result){
            clickPoint(result.x + random(-50, 50), result.y);
            sleep(2*1000);
            com.自动匹配(60);
            com.确定();
            com.开启挑战();
            sleep(2000)
            com.开启挑战();
            com.战斗界面(20, function(){

            });
        });
    })


}


function 火的守护兽(){
    logd("火的守护兽");
    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(random(2000, 5000));
    fucn.findImageEx("前往挑战2.png", 1050,897,1505,1074, 10, function(){
        滑块移动(1);
    }, function(result){
        clickPoint(result.x + random(-50, 50), result.y);
        for(var i = 0; i < 2; i++){
            sleep(20*1000);
            com.战斗界面(30, function(){
                com.自动战斗();
                com.背包(120, function(){
                    logd("回到主界面了");
                });
            });
        }
        com.开启挑战();
        sleep(3*1000);
        func.findImageEx("便捷组队.png", 1045,835,1387,1042, 20, function(){
            滑块移动(1);
            sleep(500);
        }, function(result){
            clickPoint(result.x + random(-50, 50), result.y);
            sleep(2*1000);
            com.自动匹配(60);
            com.确定();
            com.开启挑战();
            sleep(2000)
            com.开启挑战();
            com.战斗界面(20, function(){
                sleep(360*1000);
                com.背包(500, function(){
                    logd("回到主界面了");
                });
            });
        });
    })
}



function 帖拉所伊朵(){
    logd("帖拉所伊朵");
//    clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
    sleep(random(2000, 5000));
    fucn.findImageEx("前往挑战2.png", 1050,897,1505,1074, 10, function(){
        滑块移动(1);
    }, function(result){
        clickPoint(result.x + random(-50, 50), result.y);
        func.findImageEx("接受.png", 962,535,1229,670, 10, function(){
        }, function(result2){
            sleep(1000);
            clickPoint(result2.x + random(-30, 30), result.y);
            for(var i = 0; i < 5; i++){
                sleep(20*1000);
                com.战斗界面(30, function(){
                    com.自动战斗();
                    com.背包(1000, function(){
                        logd("回到主界面了");
                    });
                });
            }
        })

        com.开启挑战();
        sleep(3*1000);
        func.findImageEx("便捷组队.png", 1045,835,1387,1042, 20, function(){
            滑块移动(1);
            sleep(500);
        }, function(result3){
            clickPoint(result3.x + random(-50, 50), result3.y);
            sleep(2*1000);
//            com.自动匹配(60);
//            com.确定();
//clickPoint(1690+ random(-100, 100),277 + random(-20, 20));
             fucn.findImageEx("前往挑战2.png", 1050,897,1505,1074, 10, function(){
                    滑块移动(1);
                }, function(result5){
                    clickPoint(result5.x + random(-50, 50), result5.y);
                    });
            com.开启挑战();
            sleep(2000)
            com.开启挑战();
            com.战斗界面(20, function(){
                sleep(360*1000);
                com.背包(1000, function(){
                    logd("回到主界面了");
                });
            });
        });
    })
}

function 前往转生(){
    logd("前往转生");
    //脱离队伍


    com.角色强化();
    fucn.findImageEx("前往挑战2.png", 1050,897,1505,1074, 10, function(){
        滑块移动(1);
    }, function(result){
        clickPoint(result.x + random(-50, 50), result.y);
        sleep(5*1000);
        com.对话(2, 60);
        fucn.findImageEx("开始转生.png", 1195,510,1867,1057, 10, function(){
            滑块移动(1);
        }, function(result){
            clickPoint(result.x + random(-50, 50), result.y);
            sleep(30*1000);
            func.findImageEx("关闭.png", 872,660,1457,1065, 30, function(){
                sleep(500);
            }, function(result){
                clickPoint(result.x + random(-50, 50), result.y)
                sleep(3*1000);
            });





        })


    })

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
                logd("777777777777777777777777777")
                滑块移动(1);
                toContinue = func.findImageEx("整装待发.png", 285,280,742,457, 2, function(){
                }, function(result){
                    task22();
                })
            }
            if(!toContinue){
                logd("22222222222222")
                滑块移动(1);
                toContinue = func.findImageEx("熟悉敌情上.png", 285,280,742,457, 2, function(){
                }, function(result){
                    task23();
                })
            }
            if(!toContinue){
                logd("11111111111")
                滑块移动(1);
                toContinue = func.findImageEx("熟悉敌情下.png", 285,280,742,457, 2, function(){
                }, function(result){
                    task24();
                })
            }
            if(!toContinue){
                logd("333333333333")
                滑块移动(1);
                toContinue = func.findImageEx("学习技能.png", 285,280,742,457, 2, function(){
                }, function(result){
                    task25();
                })
            }
            if(!toContinue){
                logd("444444444444444")
                滑块移动(1);
                toContinue = func.findImageEx("决战.png", 285,280,742,457, 2, function(){
                }, function(result){
                    task26();
                })
            }
            if(!toContinue){
                logd("5555555555555555555")
                滑块移动(1);
                toContinue = func.findImageEx("提升实力.png", 285,280,742,457, 2, function(){
                }, function(result){
                    task27();
                })
            }
            if(!toContinue){
                logd("666666666666666666666")
                滑块移动(1);
                toContinue = func.findImageEx("强恩一族.png", 285,280,742,457, 2, function(){
                }, function(result){
                    task33()
                })
            }
            if(!toContinue){
                logd("8888888888888888888888888888")
                滑块移动(1);
                toContinue = func.findImageEx("考验.png", 285,280,742,457, 2, function(){
                }, function(result){
                    task35()
                })
            }
            if(!toContinue){
                logd("8888888888888888888888888888")
                滑块移动(1);
                toContinue = func.findImageEx("挑战百人道场.png", 285,280,742,457, 2, function(){
                }, function(result){
                    task38()
                })
            }
            if(!toContinue){
                logd("8888888888888888888888888888")
                滑块移动(1);
                toContinue = func.findImageEx("加美航空急需木材.png", 285,280,742,457, 2, function(){
                }, function(result){
                    task39()
                })
            }
            if(!toContinue){
                logd("8888888888888888888888888888")
                滑块移动(1);
                toContinue = func.findImageEx("航空之困.png", 285,280,742,457, 2, function(){
                }, function(result){
                    task40()
                })
            }
        }else if(label.indexOf("远古的召唤") > -1){
            task1();
        }else if(label.indexOf("亲密的帮手") > -1){
            task2();
        }else if(label.indexOf("更多的技巧") > -1){
            task3();
        }else if(label.indexOf("准备万全") > -1){
            task4();
        }else if(label.indexOf("学以致用") > -1){
            task5();
        }else if(label.indexOf("挑战") > -1){
            task6();
        }else if(label.indexOf("出发前的准备") > -1){
            task7();
        }else if(label.indexOf("最初的考验") > -1){
            task8();
        }else if(label.indexOf("最后的准备") > -1 ){
            task9();
        }else if(label.indexOf("告别故乡") > -1 ){
            task10();
        }else if(label.indexOf("出发") > -1 ){
            task11();
        }else if(label.indexOf("获得坐骑") > -1 ){
            task12();
        }else if(label.indexOf("返回卡坦村") > -1 ){
             task21();
        }else if(label.indexOf("卡坦村") > -1 ){
            task13();
        }else if(label.indexOf("干旱的威胁") > -1 ){
            task14();
        }else if(label.indexOf("热心助人") > -1 ){
            task20();
        }else if(label.indexOf("卡坦的敬意") > -1){
            task28();
        }else if(label.indexOf("前往海底通道") > -1){
            task29();
        }else if(label.indexOf("清理怪物") > -1){
            task30();
        }else if(label.indexOf("离开海底通道") > -1){
            task31();
        }else if(label.indexOf("前往加加村") > -1){
             task32();
        }else if(label.indexOf("问题已解决") > -1){
            task36();
        }else if(label.indexOf("加美航空") > -1){
            task37();
        }else if(label.indexOf("前往吉鲁岛") > -1){
            task42();
        }else if(label.indexOf("找到封印之石") > -1){
            task48();
        }else if(label.indexOf("封印之石") > -1){
            task43();
        }else if(label.indexOf("驱逐长毛象") > -1){
            task44();
        }else if(label.indexOf("线索") > -1){
            task45();
        }else if(label.indexOf("开启精灵王试炼") > -1){
            task46();
        }else if(label.indexOf("找到管理员") > -1){
            task47();
        }else if(label.indexOf("返回库伊老爷爷家") > -1){
            task49();
        }else if(label.indexOf("库伊老爷爷家里") > -1){
            task50();
        }else if(label.indexOf("返回渔村") > -1){
            task51();
        }else if(label.indexOf("达到55级") > -1){
            task52();
        }
    }
}

//滑块移动
function 滑块移动(times){
//    logd("滑块")
    var points = func.findImageEx("2.png", 482,175,1434,900, times);
    if(!points){
        return ;
    }
    sleep(1000)
    let x = points.x;
    let y = points.y;
    multiTouch([{
        "action": 0,
        "x": x,
        "y": y,
        "pointer": 1,
        "delay": 300
    },
    {
        "action": 2,
        "x": x + 200,
        "y": y,
        "pointer": 1,
        "delay": 800
    }, {
        "action": 1,
        "x": x + 400,
        "y": y,
        "pointer": 1,
        "delay": 300
    }], null, null, 5000);
//    logd("滑块移动完了")
    sleep(2000)
}

//对话
function 对话(image1, x0, y0, x1, y1,times){
    for(var i = 0; i < times; i++){
        func.findImageEx(image1, x0, y0, x1, y1, 1, function(){
            滑块移动(1);
            sleep(500 + random(-100, 100));
        }, function(res){
            clickPoint(parseInt(device.getScreenWidth()/2 )+ random(-300, 300), parseInt(device.getScreenHeight()/2) + random(-300, 300));
            sleep(1000);
        });
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