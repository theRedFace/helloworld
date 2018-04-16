window.onload=function(){
    var btns = document.getElementsByTagName('input');    //两个控制按钮
    var timer = null;   //定时器的返回值
    var aDivSet = document.getElementsByClassName('swag'); //显示颜色的div

    btns[0].onclick = function (){//点击'开始闪',启动定时器,改变两个按钮的样式
       if(timer==null) {
            timer = setInterval(function(){
                changeColor(aDivSet);
            },1000);
            btns[0].style.background='orange';
            btns[1].style.background='white';
            changeColor(aDivSet);
        }      
    }

    btns[1].onclick = function(){//点击'结束闪',关闭定时器,改变两个按钮的样式
        clearInterval(timer);
        btns[1].style.background='orange';
        btns[0].style.background='white';
        initDiv(aDivSet);
        timer = null;
    };

    btns[1].onmouseout = function(){
        btns[1].style.background = 'white';
    };
}
function changeColor (aDivSet){//控制颜色的改变  
    initDiv(aDivSet);
    var mRandom = getRandom();
    for(var i=0; i<mRandom.length; i+=2){
        aDivSet[mRandom[i]].style.background=mRandom[i+1]; 
    }
}
function initDiv(divs){
    for(var i=0; i<divs.length;i++){//初始化div
        divs[i].style.background='orange';
    }
}

function getRandom(){//随机
    var numArray = [];
    var stack = [0,1,2,3,4,5,6,7,8];
    for(var i =0; i<3; i++) {//随机数组,存放div的下标,取三个
        numArray.push(stack.splice(parseInt(Math.random() * stack.length), 1)[0]);
        var getRandomColor = '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).substr(-6);
        numArray.push(getRandomColor);
    }
    return numArray;
}