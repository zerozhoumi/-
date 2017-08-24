//显示当前时间格式2017-08-24 11:40
var getNowTime = function () {
    var now = new Date();
    
    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日

    var hh = now.getHours();            //时
    var mm = now.getMinutes();          //分

    var clock = year + "-";

    if(month < 10)
        clock += "0";

    clock += month + "-";

    if(day < 10)
        clock += "0";

    clock += day + " ";

    if(hh < 10)
        clock += "0";

    clock += hh + ":";
    if (mm < 10) clock += '0';
    clock += mm;
    return(clock);
};
$("#todaytime").append(getNowTime());

//用心知天气的api
var UID = "U690A3A470"; // 测试用 用户ID，请更换成您自己的用户ID
var KEY = "uqzufieehupeh0pu"; // 测试用key，请更换成您自己的 Key
var API = "http://api.seniverse.com/v3/weather/now.json"; // 获取天气实况
var LOCATION = "qingdao"; // 除拼音外，还可以使用 v3 id、汉语等形式
var LOCATION1="kunming";
var ts=Math.floor((new Date()).getTime()/1000);
// 构造验证参数字符串
var str = "ts=" + ts + "&uid=" + UID;
// 使用 HMAC-SHA1 方式，以 API 密钥（key）对上一步生成的参数字符串（raw）进行加密
// 并将加密结果用 base64 编码，并做一个 urlencode，得到签名 sig
var sig = CryptoJS.HmacSHA1(str, KEY).toString(CryptoJS.enc.Base64);
sig = encodeURIComponent(sig);
str = str + "&sig=" + sig;
// 构造最终请求的 url
var url = API + "?location=" + LOCATION + "&" + str + "&callback=foo";

// 直接发送请求进行调用，手动处理回调函数
$.getJSON(url, function(data) {
    var obj = document.getElementById('content');
    var weather = data.results[0];
    var text = [];
    text.push("Location: " + weather.location.path);
    text.push("Weather: " + weather.now.text);
    text.push("Temperature: " + weather.now.temperature);
    obj.innerText = text.join("\n")
});


