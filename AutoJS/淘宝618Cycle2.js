//京东618叠蛋糕js脚本0521
/**
 * 作者:ZainCheung
 * 吾爱首发,地址:https://www.52pojie.cn/home.php?mod=space&uid=1304399&do=thread&view=me&from=space
 */

 var i = 0;
 var j = 0;
// 暂时去掉,'去收菜','去兑换',
var taskList = ['去搜索', '去围观', '去浏览',"去完成","去逛逛","去兑换","去参与"];

var height = device.height;
var width = device.width;
setScreenMetrics(width, height);

//速度
var speed = 1;

dialogs.alert("请确认无障碍和悬浮窗权限已开启,感谢使用,618列车即将发车\n作者:ZainCheung\n仅供学习参考, 吾爱首发");

function main () {
    // menu: while (true) {
    //     var choose = dialogs.select("请根据你的手机性能(卡不卡)以及网速选择速度", "都挺好的,整个快速的", "一般吧,正常执行就好", "网速有点差,稍微慢点吧", "我手机很砖,整个最慢的吧");
    //     switch (choose) {
    //         case -1:
    //         toast("请选择");
    //         continue menu;
    //         case 0:
    //         toast("即将快速执行脚本");
    //         speed = 0.85;
    //         break menu;
    //         case 1:
    //         toast("即将一般速度执行脚本");
    //         speed = 1.15;
    //         break menu;
    //         case 2:
    //         toast("即将低速执行脚本");
    //         speed = 1.25;
    //         break menu;
    //         case 3:
    //         toast("即将缓慢执行脚本");
    //         speed = 1.5;
    //         break menu;
    //         default:
    //         break;
    //     }
    // }
    speed = 1.15;
    // console.show();
    // auto.waitFor();

    sleep(random(1200, 1800) * speed);
//打开活动页面
log("正在打开淘宝");
launch("com.taobao.taobao");
sleep(random(1200, 1800) * speed);
log("正在等待进入列车活动页面");
log("请手动点进列车活动页面")
// sleep(5000);
className("android.widget.Button").text("做任务，领喵币").waitFor()

sleep(random(1200, 1800) * speed);
if (!textContains("淘宝成就点").exists()) {
    className("android.widget.Button").text("做任务，领喵币").findOne().click()
    log("点击成功");
}
// 根据手机和网络速度来决定在打开页面的时候睡眠多久 
sleep(random(1600, 1800) * speed);
if (className("android.widget.Button").text("签到").exists()) {
    className("android.widget.Button").text("签到").click()
    sleep(random(200, 210));
    log("签到成功");
} else { log("已签到"); }
sleep(random(1501, 1521) * speed);

taskList.forEach(task => {
    while (textContains(task).exists()) {
        log("开始做第" + (i+1) + "次任务！");
        var a = text(task).findOnce(j);
        switch (task) {
            case '去搜索':
            case '去围观':
            case '去浏览':
            case "去完成":
            case "去参与":
            case "去逛逛":
            case "去兑换": 

            sleep(random(501, 515) * speed);
            a.click();
            sleep(random(1501, 1515) * speed);
            swipe(width / 2, height - 500, width / 2, 0, random(801, 818)* speed);
            sleep(random(2501, 2601) * speed);
            swipe(width / 2, height - 500, width / 2, 0, random(801, 818) * speed);
            sleep(random(8001, 8042) * speed);
            swipe(width / 2, height - 500, width / 2, 0, random(801, 818) * speed);
            textContains("完成").findOne(random(10001, 10018) * speed);
            i++;
            log("已完成第" + i + "次任务！")
            back();
            break;
            default:
            log("default")
            break;
        }
        sleep(random(2001, 2101) * speed);
    }
});

log("重新开始跑一遍任务 20s重新开始");
sleep(20000);
main()
}
main()


// exit();