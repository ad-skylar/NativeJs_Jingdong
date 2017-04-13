function headHandle() {
    var oA1 = getName("#top-nav").getElementsByTagName('a');
    var oDiv = getName("#top-nav").getElementsByTagName('div');
    oA1[0].className = "";
    var oU1 = getName("#top-nav").getElementsByTagName('ul');
    var oLi = oU1[0].getElementsByTagName('li');
    public1(oA1, "top-a1");
    public3(oLi, "fClick");
    //函数封装none、block
    function public2(obj1, obj2) {
        obj1.onmouseover = function () {
            obj2.style.display = "block";
            obj1.style.background = "#fff";
        }
        obj1.onmouseout = function () {
            obj2.style.display = "none";
            obj1.style.background = "";
        }
    }

    public2(oDiv[0], oU1[0]);
    public2(oDiv[1], oU1[1]);
    public2(oDiv[2], oU1[2]);
    public2(oDiv[3], oU1[3]);
    //第二部分
    getName("#close").onclick = function () {
        getName("#look").style.display = "none";
        getName("#ad_none").style.display = "none";
    }
    public2(getName("#car"), getName("#goods"))
}
headHandle();
//leftTab
function leftTab() {
    function dashed(obj1, obj2) {
        obj1.onmouseover = function () {
            obj2.style.display = "block";
        }
        obj1.onmouseout = function () {
            obj2.style.display = "none";
        }
    }

    dashed(getName("#bannerImg"), getName("#tab2"));
    //dashed(getName("#trans"), getName("#tab3"));
}
leftTab()


//轮播图
function slider() {
    var oTab1 = getName("#tab1").getElementsByTagName('span');
    var oImg = getName("#imaList").getElementsByTagName('img');
    var timerss = 0;
    getName("#tab_left");
    getName("#tab_right");
    var num = 0;
    timerss = setInterval(changeAuto, 2000);
    function changeAuto() {
        for (var i = 0; i < oTab1.length; i++) {
            for (var i = 0; i < oTab1.length; i++) {
                oTab1[i].className = "";
                oImg[i].className = "";
            }
            oTab1[num].className = "tab_span";
            oImg[num].className = "img1";
        }
        num++;
        if (num > oTab1.length - 1) {
            num = 0;
        }
        opacity();
    };
    getName("#tab_right").onclick = function () {
        opacity();
        clearInterval(timerss);
        num++;
        if (num > oTab1.length - 1) {
            num = 0;
        }
        for (var i = 0; i < oTab1.length; i++) {
            oTab1[i].className = "";
            oImg[i].className = "";
        }
        oTab1[num].className = "tab_span";
        oImg[num].className = "img1";

    };
    getName("#tab_left").onclick = function () {
        opacity();
        clearInterval(timerss);
        num--;
        if (num < 0) {
            num = oTab1.length - 1;
        }
        for (var i = 0; i < oTab1.length; i++) {
            oTab1[i].className = "";
            oImg[i].className = "";
        }
        oTab1[num].className = "tab_span";
        oImg[num].className = "img1";
    }
    function tab(obj1, para, obj2, para2) {
        for (var i = 0; i < obj1.length; i++) {
            obj1[i].index = i;
            obj1[i].onmouseover = function () {
                opacity()
                clearInterval(timerss);
                for (var i = 0; i < obj1.length; i++) {
                    obj1[i].className = "";
                    obj2[i].className = "";
                }
                this.className = para;
                obj2[this.index].className = para2;
                obj1[this.index] = num;
            }
        }

    }

    var _opacity = 0.1;

    function opacity() {
        clearInterval(timer);
        var timer = setInterval(function () {
            _opacity += 0.05;
            getName("#imaList").style.opacity = _opacity;
            if (_opacity >= 1) {
                clearInterval(timer);
                _opacity = 0;
            }
        }, 10)
    }

    tab(oTab1, "tab_span", oImg, "img1");
}
slider()
//user new tab
function userTab() {
    var news_tab = getName("#user2").getElementsByTagName("p");
    var news_list = getName("#user2").getElementsByTagName("ul");
    var news_line = getName("#news_tab_active");

    function eventHandel() {
        function tab() {
            for (var i = 0; i < news_tab.length; i++) {
                news_tab[i].index = i;
                news_tab[i].onmouseover = function () {
                    for (var i = 0; i < news_tab.length; i++) {
                        news_list[i].className = "";
                    }
                    news_list[this.index].className = "news_list";
                }
            }
        }

        news_tab[1].children[0].onmouseover = function () {
            news_line.style.cssText = "left:58px;transition-duration:0.4s ;";
        }

        news_tab[0].children[0].onmouseover = function () {
            news_line.style.cssText = "left: 10px;transition-duration:0.4s ;";
        }
        tab()
    }

    eventHandel()
}
userTab()
//iconfont
function serviceHandel() {
    var service_tab = getName('#service_block').getElementsByTagName("li");
    var service_list = getName('#service_block').getElementsByTagName("div");
    var service_close = getName('#service_block').getElementsByTagName("span")[0];
    var flag = 0;
    getName('#icon_font').onmouseover = function () {
        function topMove() {
            if (getName('#iconList').offsetTop > -210 && getName('#iconList').offsetTop <= 0) {
                getName('#iconList').style.top = getName('#iconList').offsetTop - 5 + "px";
                window.setInterval(topMove, 60);
            }
            else if (flag == 0) {
                getName('#service_block').style.display = "block";
            }

        }

        topMove()
    }
    tab(service_tab, "tab_line", service_list, "service_item");
    service_close.onclick = function () {
        getName('#iconList').style.top = '1px';
        getName('#service_block').style.display = "none";
        flag = 1;
    }
}
serviceHandel()
// 倒计时
function countDown() {
    var oTime = getName('#timeCaul');
    var oSpan1 = oTime.getElementsByTagName('span')[0];
    var oSpan2 = oTime.getElementsByTagName('span')[1];
    var oSpan3 = oTime.getElementsByTagName('span')[2];
    oDate();
    setInterval(oDate, 1000);
    function oDate() {
        var endTime = new Date("3 19,2017 19:39:30");
        var starTime = new Date();
        var time = endTime.getTime() - starTime.getTime()
        var hours = parseInt(time / 1000 / 60 / 60);
        var min = parseInt(time / 1000 / 60 % 60);
        var sec = parseInt(time / 1000 % 60);

        function toTwo(num) {
            num < 10 ? num = "0" + num : num;
            return num;
        }

        if (time <= 0) {
            return 0;
        }
        oSpan1.innerHTML = toTwo(hours);
        oSpan2.innerHTML = toTwo(min);
        oSpan3.innerHTML = toTwo(sec);
    }
}//
countDown()
//秒杀item
function seckill() {
    var timer3 = 0;
    getName("#tab_left1").onclick = function () {
        clearInterval(timer3);
        timer3 = setInterval(function () {
            getName("#transForm").style.left = getName("#transForm").offsetLeft - 20 + "px";
            if (getName("#transForm").offsetLeft % 1000 == 0) {
                window.clearInterval(timer3);
            }
            if (getName("#transForm").offsetLeft <= -4000) {
                getName("#transForm").style.left = "-1000px";
            }
        }, 0.3)
    }
    getName("#tab_right2").onclick = function () {
        clearInterval(timer3);
        timer3 = setInterval(function () {
            getName("#transForm").style.left = getName("#transForm").offsetLeft + 20 + "px";
            if (Math.abs(getName("#transForm").offsetLeft) % 1000 == 0) {
                window.clearInterval(timer3);
            }
            if (getName("#transForm").offsetLeft == 0) {
                getName("#transForm").style.left = "-4000px";
            }
        }, 0.3)
    }
    function translate() {
        var _img = getName("#transForm").getElementsByTagName("img");
        var fontColor = getName("#transForm").getElementsByTagName("p");
        transLate(_img, fontColor);
    }//
    translate()
}
seckill();
//发现好货
function goods() {
    var _good = getName("#goodsTrans").getElementsByTagName("img");
    var _goodTxt = getName("#goodsTrans").getElementsByTagName("p");
    transLate2(_good, _goodTxt, -0.6, 0);
    var _rankImg = getName("#rankEvent").getElementsByTagName("img");
    var _rankTxt = getName("#rankEvent").getElementsByTagName("p");
    transLate(_rankImg, _rankTxt);
    var _ranktab = getName("#last_tab").getElementsByTagName("li");
    var _rankList = getName("#rankEvent").getElementsByTagName("div");
    tab(_ranktab, "tab_actiion", _rankList, "rank_disblock");
    var _ranka = getName("#last_tab").getElementsByTagName("a");
    for (var i = 0; i < _ranka.length; i++) {
        _ranka[i].onmouseover = function () {
            getName("#list_active").style.left = "55px"
        }
    }

}
goods();
//搜索框悬浮
function _scrollTop() {
    getName("#search");
    var oSearch = getName("#search").getElementsByTagName("div")[0];
    var oLogo = getName("#small_logo").getElementsByTagName("img")[0];
    document.onscroll = function () {
        if (document.body.scrollTop || document.documentElement.scrollTop >= 1028) {
            oLogo.style.display = "block"
            oSearch.className = "search_fix"

        } else {
            oSearch.className = "";
            oLogo.style.display = "none"
        }
    }//onsroll结束
}//搜索框悬浮 函数结束代码
_scrollTop()

function _menu() {
    var itemChoose = getName("#nav_list").getElementsByTagName("li");
    var itemShow = getName("#menu_show").getElementsByTagName("div");
    var itemFirst = getName("#menu_show").getElementsByTagName("div")[0];

    itemFirst.className = "";
    tab(itemChoose, "menu-choose", itemShow, "show-item");
    getName("#menu_dashed").onmouseout = function () {

        for (var i = 0; i < itemChoose.length; i++) {
            itemShow[i].className = "";
        }
    }

}//menu函数代码结束
_menu()
function opacityHandel() {
    var _imgs = getName("#rec_opacity").getElementsByTagName("img");
    var _opacity = 1;
    var _timer = 0;

    function opacityChage() {
        for (var i = 0; i < _imgs.length; i++) {
            _imgs[i].onmousemove = function () {
                window.clearTimeout(timer);
                _opacity -= 0.02;
                this.style.opacity = _opacity;
                if (_opacity >= 0.5) {
                    _timer = setTimeout(opacityChage, 30)
                }

            }
            _imgs[i].onmousemout = function () {
                this.style.opacity = 1;
                window.clearTimeout(timer);
            }
        }
    }

    opacityChage()


}
//opacityHandel()
//enjoyQualit 享品质
function enjoyQuality() {
    var lillsts = getName("#enjoy_trans").getElementsByTagName("li");
    var imgLists = getName("#enjoy_trans").getElementsByTagName("img");
    transLate2(imgLists, lillsts);
}
enjoyQuality()
//loveLife 爱生活
function loveLife() {
    var life_txt = getName("#goodIntro1").getElementsByTagName("p");
    var love_img = getName("#goodIntro1").getElementsByTagName("img");
    transLate2(love_img, life_txt);
    var life_txt2 = getName("#goodIntro2").getElementsByTagName("p");
    var love_img2 = getName("#goodIntro2").getElementsByTagName("img");
    transLate2(love_img2, life_txt2);
    var life_txt3 = getName("#goodIntro3").getElementsByTagName("p");
    var love_img3 = getName("#goodIntro3").getElementsByTagName("img");
    transLate2(love_img3, life_txt3);
    var life_txt4 = getName("#goodIntro4").getElementsByTagName("p");
    var love_img4 = getName("#goodIntro4").getElementsByTagName("img");
    transLate2(love_img4, life_txt4);
}
loveLife();
//ajax
function autoLoading() {
    var flowBox = document.getElementById("flow-box");
    var container = document.getElementById("autoLoad");
    var _start = 0;
    var _over = _start + 28 + 1//先获取1/3 28张 加一是为了凑整数
    function creatElement(_num1, _num2) {
        var _ajax = new Ajax();//
        _ajax.request("post", "jingdong.json", null, function (data) {
            var _data = JSON.parse(data);
            var oLi = null, oImg = null, op = null;
            for (var i = _num1; i < _num2; i++) {
                oli = document.createElement("li");
                oImg = document.createElement("img");
                oP = document.createElement("p");
                oli.appendChild(oImg);
                oli.appendChild(oP);
                flowBox.appendChild(oli);
                container.appendChild(flowBox);
                oImg.src = "../JINGDONG/images/" + _data["images"][i];
                oImg.title = _data["title"][i];
                oP.innerHTML = _data["intro"][i];
            }
            console.log(_data["title"].length)

        });
    }

    function creatBottom() {
        var _foot = getName("#footer");
        var _footDiv = document.createElement("div");
        var _footImg = document.createElement("img");
        _footDiv.className = "footerCreat";
        _foot.appendChild(_footDiv);
        _footDiv.appendChild(_footImg);
        _footImg.src = "images/footer.jpg";

    }

    //获取滚动条当前的位置
    function getScrollTop() {
        var scrollTop = 0;
        if (document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        }
        else if (document.body) {
            scrollTop = document.body.scrollTop;
        }
        return scrollTop;

    }

    //获取当前窗口可视范围的高度
    function getClientHeight() {
        var clientHeight = 0;
        if (document.body.clientHeight && document.documentElement.clientHeight) {
            clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
        }
        else {
            clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
        }
        return clientHeight;

    }

    //获取文档完整的高度
    function getScrollHeight() {
        var scorllHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        if (scorllHeight == 9459) {
            creatBottom();
        }
        return scorllHeight;

    }

    window.onscroll = function () {
        console.log(getScrollTop());
        console.log(getClientHeight()+"可视区");
        console.log(getScrollTop() + getClientHeight());
        console.log(getScrollHeight());
        console.log(getScrollTop() + getClientHeight() == getScrollHeight())
        if (getScrollTop() + getClientHeight() == getScrollHeight()) {
            var i = 0;
            var sum = 2;
            var timer = null;
            function ajaxServise() {
                if (i == sum) {
                    clearTimeout(timer);
                }
                i = i + 1;
                if (_over <= 86) {
                    timer = setTimeout(creatElement(_start, _over), 10);
                    _start = _over;//28
                    _over = _start + 28;//56 84
                }
            }

            ajaxServise()
        }
    }

}

autoLoading();
//造成这种情况的原因在于ajax的异步请求机制，
//for循环的运行速度远大于ajax异步请求的速度，
//这就造成了ajax运行时，需要的在for循环里的参数已经运行到最后一个了，所以取到的都是最后一个参数数据
function iconSearch() {
    var oDivs = getName("#location").getElementsByTagName('div');
    var oA = getName("#location").getElementsByTagName('a');
    var oLi = getName("#location").getElementsByTagName('li');
    for (var i = 0; i < oDivs.length; i++) {
        oLi[i].index = i;
        oLi[i].onmouseover = function () {
            oDivs[this.index].className = "locat_color";
            oA[this.index].style.cssText = "transition: .3s;right:59px ;"
        }
        oLi[i].onmouseout = function () {
            oDivs[this.index].className = "";
            oA[this.index].style.cssText = "";
        }

    }
}
//}

iconSearch();
//回到顶部
function goTop() {
    getName("#goTop").onclick = function () {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
    getName("#goTop2").onclick = function () {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
}
goTop();