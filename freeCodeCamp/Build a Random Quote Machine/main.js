var $config = {
    title               :"test",
    sites               : ['qq', 'weibo','wechat', 'douban','twitter']// 启用的站点
};
/**
 *
 * @returns {{quote, author}|*}
 */
var getRandomquote=function(){
    //获得名言，先用数组代替
    //没有找到。。。，无法那
    var quotes=[
        {quote:"过去属于死神，未来属于你自己。",author:"雪莱"},
        {quote:"志道者少友，逐利者多俦。",author:"汉·王符"},
        {quote:"伟大的目标形成伟大的人物。",author:"埃蒙斯"},
        {quote:"并非地球引力使人坠入爱河。",author:"爱因斯坦"},
        {quote:"决心即力量，信心即成功。",author:"托尔斯泰"},
        {quote:"信奉真理的人，必受天佑。",author:"富兰克林"},
        {quote:"生命短暂，切不可猬琐偏狭。",author:"狄斯累利"},
        {quote:"意志的力量大于手的力量。",author:"索福克勒斯"},
        {quote:"耐心和持久胜于激烈的狂热。",author:"拉封丹"}
    ];
    return quotes[Math.floor(Math.random()*quotes.length)];
};
/**
 *
 * @returns {string}
 */
//定义一个随机的颜色生成函数
var getRandomColor = function() {
    //颜色，
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    var ranNum=Math.floor(Math.random()*colors.length);
    return colors[ranNum];
};

//改变行为
var changeView=function (quoteArr,color) {
    $(".text").text(quoteArr.quote).css("color",color);
    $(".author").text(quoteArr.author).css("color",color);
    $("body").css("background-color",color);
    $("i").css("color",color);
    $(".button").css("background-color",color);
    //更改分享的内容
    $config.title=quoteArr.quote+quoteArr.author;
};

var quoteArr=getRandomquote();
var color=getRandomColor();
changeView(quoteArr,color);

$(".button").click(function(){
    var quoteArr=getRandomquote();
    var color=getRandomColor();
    changeView(quoteArr,color);
});
$('.social-share').share($config);
