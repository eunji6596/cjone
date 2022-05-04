// main2.js 

var devWidth;
var limitsize = 768;

window.addEventListener('load',function(){
    devWidth = document.querySelector("body").offsetWidth;
    console.log(devWidth);

    window.addEventListener('resize',function(){
        devWidth = document.querySelector("body").offsetWidth;
        console.log(devWidth);
    });

    /* 햄버거 버튼 클릭*/
   var mobBtn = document.querySelector("div.mobBtn");
   var mob = document.querySelector(".mob");
   var mobClose = document.querySelector("div.mobBtn_close");
   var body = document.querySelector("body");
   var bg = mobBtnClose = document.querySelector(".bg");
   
   mobBtn.addEventListener('click', function(){
      mob.classList.add("on");
      mobClose.classList.add("on");
      body.classList.add("on");
      bg.classList.add("on");
      mobBtn.style.display = "none";
   });

   // 모바일 닫기 클릭
   mobClose.addEventListener('click', function(){
      mob.classList.remove("on");
      mobClose.classList.remove("on");
      body.classList.remove("on");
      bg.classList.remove("on");
      mobBtn.style.display = "block";
   });

    /* --------------------------------------------------------------------- */

    // 주메뉴

   var gnbMenu = document.querySelectorAll(".gnb>ul>li");
   var headerWrap = document.querySelector(".header_wrap");
   var formSrch = document.querySelector("form.srch");
   var srchOpen = document.querySelector(".srch_open");
   var topMenuDD = document.querySelectorAll("dl.topMenu > dd");
   var subMenu = document.querySelectorAll(".gnb>ul>li>ul");
   
   for (var i = 0; i < gnbMenu.length; i++) {
      gnbMenu[i].addEventListener("mouseover", function () {
         if (devWidth < limitsize) {
            return false;
         }
         if (formSrch.offsetWidth > 0 && srch.offsetHeight > 0) {
            formSrch.classList.remove("on");
            srchOpen.classList.remove("on");
         }
         if (topMenuDD[4].classList.contains("on")) {
            topMenuDD[4].classList.remove("on");
         }
         headerWrap.classList.add("on");
         // gnb.style.display = "block";
         subMenu.forEach(item => {
            item.classList.add("on");
         });
      });
      gnbMenu[i].addEventListener("mouseout", function () {
         if (devWidth < limitsize) {
            return false;
         }
         headerWrap.classList.remove("on");
         // gnb.style.display = "block";
         subMenu.forEach(item => {
            item.classList.remove("on");
         });
      }); //mouseout
      //mouseout
   } //for

    /* --------------------------------------------------------------------- */

    /* 로그인 이미지 */
    var appear = "";
    for(var i=0; i<57; i++){
        if(i < 10){
            appear += "<img src='images/appear/appear_0000" + i + ".png' alt='appear" + i + "' />";
        }else{
            appear += "<img src='images/appear/appear_000" + i + ".png' alt='appear" + i + "' />";
        }
    }
    document.querySelector("a.appear").innerHTML = appear;

    var loop = "";
    for(var i=0; i<82; i++){
        if(i<10){
            loop += "<img src='images/loop/loop_0000" + i + ".png' alt='loop" + i + "' />";
        }else{
            loop += "<img src='images/loop/loop_000" + i + ".png' alt='loop" + i + "' />";
        }
    }
    document.querySelector("a.loop").innerHTML = loop;

    /* 로그인 애니메이션 */
    var appearImg = document.querySelectorAll(".appear >img");
    for(var k=0; k<57; k++){
        appearImg[k].style.animation = "ani 2.75s linear " + (k*0.05) + "s 1 normal"; 
    }

    var loopImg = document.querySelectorAll(".loop > img");
    for(var j=0; j<82; j++){
        loopImg[j].style.animation = "ani 4.1s linear " + (2.85 + j*0.05) + "s infinite normal"; 
    }

    /* 퀵메뉴 이미지 */
    var quick1 = "";
    for(var i=0; i<20; i++){
        if(i<10){
            quick1 += "<img src='images/quick01/quick01_0000" + i + ".png' alt='quick1 메뉴" + i + "' />";
        }else{
            quick1 += "<img src='images/quick01/quick01_000" + i + ".png' alt='quick1" + i + "' />";
        }
    }
    document.querySelector(".quick1").innerHTML = quick1;

    var quick2 = "";
    for(var i=0;i<20;i++){
        if(i<10){
            quick2 += "<img src='images/quick02/quick02_0000" + i + ".png' alt='quick2" + i + "' />";
        }else{
            quick2 += "<img src='images/quick02/quick02_000" + i + ".png' alt='quick2" + i + "' />";
        }
    }
    document.querySelector(".quick2").innerHTML = quick2;

    var quick3 = "";
    for(var i=0;i<20;i++){
        if(i<10){
            quick3 += "<img src='images/quick03/quick03_0000" + i + ".png' alt='quick3" + i + "' />";
        }else{
            quick3 += "<img src='images/quick03/quick03_000" + i + ".png' alt='quick3" + i + "' />";
        }
    }
    document.querySelector(".quick3").innerHTML = quick3;

    var quick4 = "";
    for(var i=0;i<20;i++){
        if(i<10){
            quick4 += "<img src='images/quick04/quick04_0000" + i + ".png' alt='quick4" + i + "' />";
        }else{
            quick4 += "<img src='images/quick04/quick04_000" + i + ".png' alt='quick4" + i + "' />";
        }
    }
    document.querySelector(".quick4").innerHTML = quick4;

    //마우스를 올렸을 때
    var quick = document.querySelectorAll(".content1 ul li");
    quick.forEach(function(item){
        item.addEventListener("mouseover",function(){
            for(var k = 0; k < 20; k++){
                var imgLi = this.children[0].children[0].children;
                imgLi[k].style.animation = "ani 1s linear " + 0.05 * k + "s 1 normal";
            }
        });
    });

    // 마우스 뗐을 때
    quick.forEach(function(item){
        item.addEventListener("mouseout",function(){
            for(var k = 0; k < 20; k++){
                var imgLi = this.children[0].children[0].children;
                imgLi[k].style.animation = "none";
            }
        });
    });

    /* --------------------------------------------------------------------- */

    /* 검색열기 */
    srchOpen.addEventListener("click", function(){
        this.classList.toggle("on");
        formSrch.classList.toggle("on");

        if (this.classList.contains("on")) {
            this.children[0].setAttribute("title", "검색입력서식 닫기");
        } else {
            this.children[0].setAttribute("title", "검색입력서식 열기");
        }
    });

    /* 고객센터 */
    topMenuDD[4].addEventListener("click", function(){
        this.classList.toggle("on");
        if (this.classList.contains("on")) {
            this.children[0].setAttribute("title", "고객센터 닫기");
        } else {
            this.children[0].setAttribute("title", "고객센터 열기");
        }
    });

    /* --------------------------------------------------------------------- */

    /* 모바일 고객센터 */
    var mobTopMenu = document.querySelectorAll(".mob_topMenu > dd");
    mobTopMenu[4].addEventListener("click", function(){
        this.classList.toggle("on");
        if (this.classList.contains("on")) {
            this.children[0].setAttribute("title", "고객센터 닫기");
        }else{
            this.children[0].setAttribute("title", "고객센터 열기");
        }
    });

    /* 모바일 주메뉴 */
    var mobGnbLi = document.querySelectorAll(".mob_gnb > ul > li");
    for (i = 0; i < mobGnbLi.length; i++) {
        mobGnbLi[i].addEventListener("click", function(){
            mobGnbLi.forEach(function(item){
                item.classList.remove("on");
            });
            this.classList.toggle("on");
        });
    }

    /* --------------------------------------------------------------------- */

    /* 배너 */
    var bnnNum = 0;
    var lastNum = document.querySelectorAll('.banner_frame > section').length - 1;
    var bannerLi = document.querySelectorAll('.banner_frame > section');
    var bannerWid = document.querySelector('body>section').offsetWidth;
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var bannFrame = document.querySelector(".banner_frame");
    var bannFrameOn = document.querySelector(".banner_frame.on");
    var arrowBtn = document.querySelectorAll('.arrow a');
    var rollingBtn = document.querySelectorAll('.rolling a');
    var banner_rollA = document.querySelectorAll('.banner_roll a');

    // 리사이즈
    window.addEventListener('resize',function(){
        bannerWid = document.querySelector('body > section').offsetWidth;
    });

    // next
    next.addEventListener('click',function(){
        bnnNum++;
        if(bnnNum > lastNum) {
            bnnNum = 0;
        }
        bannFrame.classList.add('on');
        bannFrame.style.left = bnnNum * (-bannerWid) + "px";
        
        if(bannerLi[bnnNum].classList.contains('white')){
            arrowBtn.forEach(function(item){
                item.classList.add('white');
            })
            rollingBtn.forEach(function(item){
                item.classList.add('white');
            })
        }else{
            arrowBtn.forEach(function(item){
                item.classList.remove('white');
            })
            rollingBtn.forEach(function(item){
                item.classList.remove('white');
            })
        }
        rollingBtn.forEach(function(item){
            item.classList.remove('on');
        })
        banner_rollA[bnnNum].classList.add('on');
    });

    // prev
    prev.addEventListener('click',function(){
        bnnNum--;
        if(bnnNum < 0) {
            bnnNum = lastNum;
        }
        bannFrame.style.left = bnnNum * (-bannerWid) + "px";

        if(bannerLi[bnnNum].classList.contains('white')){
            arrowBtn.forEach(function(item){
                item.classList.add('white');
            });
            rollingBtn.forEach(function(item){
                item.classList.add('white');
            });
        } else{
            arrowBtn.forEach(function(item){
                item.classList.remove('white');
            });
            rollingBtn.forEach(function(item){
                item.classList.remove('white');
            });
        }
        rollingBtn.forEach(function(item){
            item.classList.remove('on');
        });
        banner_rollA[bnnNum].classList.add('on');
    });

    // 오토배너
    function autoBanner(){
        bnnNum++;
        if(bnnNum > lastNum) {
            bnnNum = 0;
        }
        // bannFrame.classList.add('on');
        bannFrame.style.left = bnnNum * (-bannerWid) + "px";

        if(bannerLi[bnnNum].classList.contains('white')){
            arrowBtn.forEach(function(item){
                item.classList.add('white');
            });
            rollingBtn.forEach(function(item){
                item.classList.add('white');
            });
        } else{
            arrowBtn.forEach(function(item){
                item.classList.remove('white');
            });
            rollingBtn.forEach(function(item){
                item.classList.remove('white');
            });
        }
        rollingBtn.forEach(function(item){
            item.classList.remove('on');
        });
        banner_rollA[bnnNum].classList.add('on');
    }

    // 일정한 시간만큼 계속 반복
    var autoBann = setInterval(autoBanner,5000);

    // 재생멈춤
    var flag = true;
    var play = document.querySelector('a.play');

    play.addEventListener('click',function(){
        if(flag){
            clearInterval(autoBann);
            this.classList.add('pause');
            flag = false;
        }else{
            autoBann = setInterval(autoBanner,5000);
            this.classList.remove('pause');
            flag = true;
        }
    });

    // 클릭한 롤링의 해당배너로 이동
    var banner_rollLi = document.querySelectorAll(".banner_roll li");

        banner_rollLi.forEach(function(item){
            item.addEventListener('click',rollAction);
        });

        function rollAction(item){
            curRoll = item.currentTarget; // 클릭이벤트가 전달된 엘리먼트
            parentRoll = curRoll.parentElement;
            childRoll = parentRoll.children;
            bnnNum = Array.from(childRoll).indexOf(curRoll);
            bannFrame.style.left = bnnNum * (-bannerWid) + "px";

            if(bannerLi[bnnNum].classList.contains('white')){
                arrowBtn.forEach(function(item){
                    item.classList.add('white');
                });
                rollingBtn.forEach(function(item){
                    item.classList.add('white');
                });
            } else{
                arrowBtn.forEach(function(item){
                    item.classList.remove('white');
                });
                rollingBtn.forEach(function(item){
                    item.classList.remove('white');
                });
            }
            
            rollingBtn.forEach(function(item){
                item.classList.remove('on');
            });
            banner_rollA[bnnNum].classList.add('on');
        }

    /* --------------------------------------------------------------------- */

    /* 대분류 */
    
    var group = document.querySelectorAll(".content3_inner > ul > li > a");
    var groupView = document.querySelectorAll(".content3_inner > div > ul > li");
    var ent = document.querySelectorAll(".content3_inner > div > ul > li.ent");
    var shop = document.querySelectorAll(".content3_inner > div > ul > li.shop");
    var dinner = document.querySelectorAll(".content3_inner > div > ul > li.dinner");
    var box = document.querySelectorAll(".content3_inner > div > ul > li.box");
    console.log(ent,"ent");

    group.forEach(function(item){
        item.addEventListener('click',function(e){
            e.preventDefault();
            
            group.forEach(function(item){
                item.classList.remove('on');
            });
            this.classList.add('on');

            var className = this.parentElement.className; //.getAttribute("class")로도 가져올 수있음.

            //클릭한 메뉴의 li만 보여주기
            groupView.forEach(function(item){
                item.style.display = "none";
                });

            switch(className) {
                case 'all':
                    groupView.forEach(function(item){
                        item.style.display = "block"
                    });
                    break;
                case 'ent':
                    ent.forEach(function(item){
                        item.style.display = "block"
                    });
                    break;
                case 'shop':
                    shop.forEach(function(item){
                        item.style.display = "block"
                    });
                    break;
                case 'dinner':
                    dinner.forEach(function(item){
                        item.style.display = "block"
                    });
                    break;
                case 'box':
                    box.forEach(function(item){
                        item.style.display = "block"
                    });
                    break;
            };

        });
    });

    /* --------------------------------------------------------------------- */

    /* 패밀리 사이트 */
    var familySite = document.querySelector(".family_site");
    familySite.addEventListener("click", function (e) {
       e.preventDefault();
       this.classList.toggle("on");
 
       if (this.classList.contains("on")) {
          this.children[0].setAttribute("title", "닫기");
       } else {
          this.children[0].setAttribute("title", "열기");
       }
    });
    
    /* 스크롤 이벤트 */
    //top버튼
    var btnTop = document.querySelector("div.top");

    window.addEventListener('scroll', function(){
        var scroll = document.querySelector('html').scrollTop;
        // top 버튼
        if(scroll <= 0){
            btnTop.classList.remove('on', 'ab');
        }else if(scroll > 0 && scroll < 2700){
            btnTop.classList.remove('ab');
            btnTop.classList.add('on');
        }else{
            btnTop.classList.add('ab');
        }

    // 도넛
    var leftL = document.querySelector(".doughnut_Left_L");
    var lefts = document.querySelector(".doughnut_Left_s");
    var left = document.querySelector(".doughnut_Left");
    var centerM = document.querySelector(".doughnut_Center_M");
    var centerS = document.querySelector(".doughnut_Center_s");
    var rightM = document.querySelector(".doughnut_right_M");
    var rightS = document.querySelector(".doughnut_right_s");
    var right = document.querySelector(".doughnut_right");

    leftL.style.top = 71 + scroll * 0.5 + "px";
    lefts.style.top = 796 + scroll * 1.1 + "px";    
    left.style.top = 1726 + scroll * 0.1 + "px";

    centerM.style.top = 722 + scroll * 0.1 + "px";
    centerS.style.top = 991 + scroll * 1.1 + "px";

    rightM.style.top = 365 + scroll * 0.5 + "px";
    rightS.style.top = 947 + scroll * 0.1 + "px";
    right.style.top = 300 + scroll * 0.7 + "px";

    });

    btnTop.addEventListener('click',function(event) {
        event.preventDefault();
        window.scroll({
            top: 0,
            left: 0,
            behavior : 'smooth' 
        });
    });

    /* "background-color" : "red";
        box.style.backgroundColor = "red"; - 백그라운드컬러 변경
        box.style.cssText = "color: #000, background-color : red" - css에서 여러개의 속성을 변경할때
        element.textContent = "Text"; - 텍스트 속성을 변경할때 */

});

