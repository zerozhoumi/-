function second(second) {
    var dayTime = {
        day:second[0],
        hour:second[1],
        min:second[2],
        second:second[3]
    };

    return dayTime;
}

var friendlyTime = function (num) {
    return ( "00" + num ).substr( -2 );
};
//还差一好的
function render(data) {
    var myTime=second(data);
    //console.log(myTime);
    var childs=document.getElementsByTagName("span");


if (myTime.day==0){
    childs[0].className+='hide'
}
    childs[0].innerText=friendlyTime(myTime.day);
    childs[1].innerText=friendlyTime(myTime.hour);
    childs[2].innerText=friendlyTime(myTime.min);
    childs[3].innerText=friendlyTime(myTime.second);
   // console.log(childs[1].innerText);
}
render([2,2,3,4])