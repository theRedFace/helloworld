window.onload=function(){
    var btns = document.getElementsByTagName('input');    //两个控制按钮
    var timer = null;   //定时器的返回值

    btns[0].onclick = function (){//点击'开始闪',启动定时器,改变两个按钮的样式
        timer = setInterval(changeColor,1000);
        btns[0].style.background='orange';
        btns[1].style.background='white';
        changeColor();
    }

    btns[1].onclick = function(){//点击'结束闪',关闭定时器,改变两个按钮的样式
        clearInterval(timer);
        btns[1].style.background='orange';
        btns[0].style.background='white';
    };

    btns[1].onmouseout = function(){
        btns[1].style.background = 'white';
    };
}
function changeColor (){//控制颜色的改变
    var aDivSet = document.getElementsByClassName('swag'); //显示颜色的div
    var mRandom = getRandom();//map的key为div的下标,value为颜色
    mRandom.forEach(function (value, key, map){
        aDivSet[key].style.background = value;
        setTimeout(function (){//500毫秒之后把变色的div还原
            for(var i=0; i<aDivSet.length;i++){
                aDivSet[i].style.background='orange';
            }
        },500);
    });
};
function getRandom(){//随机
    var numArray = [];
    var stack = [0,1,2,3,4,5,6,7,8];
    for(var i =0; i<3; i++) {//随机数组,存放div的下标,取三个
        numArray.push(stack.splice(parseInt(Math.random() * stack.length), 1)[0]);
    }
    var numMap = new Map();
    for (var j=0; j<numArray.length;  j++) {//map 存放下标和颜色
        var getRandomColor = '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).substr(-6);
        numMap.set(numArray[j],getRandomColor);
    }
    return numMap;
}