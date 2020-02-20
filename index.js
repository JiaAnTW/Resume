$(".record").hide()
$(".project").hide()

const content={
    chinese:{
        name:"張家銨",
        project:[
            {name:"自製口罩地圖",skill:['html','css','javascript','jQuery','Boostrap','Leaflet'],img:"./mask.png",link:"https://jiaantw.github.io/mask/",describe:"",code:"https://github.com/JiaAnTW/mask"},
            {name:"無人餐廳點餐系統",skill:['html','css','javascript','vue.js','node.js','MySQL','LinePay API'],img:"./swr.png",link:"https://swruidd2019.herokuapp.com/#/",describe:"為「使用者介面設計」課程作品，和工設所、電機系學生以團隊方式分工製作一個點餐網頁(需串接金流)。此專案中，由設計師製圖後，交由工程師實現網站。工程部份，後端(含串接LinePay金流)由我個人負責、前端由我和其他同學共同製作。<br/><br/>本網頁以iphone6規格設計，以電腦觀看時，請使用chrome開啟後，按下F12，點擊上方的Responsive並改選為iphone6/7/8後，重新整理頁面。",code:"https://github.com/JiaAnTW/no_man_restaurant"},
            {name:"成大轉系生心得分享平台",skill:['html','css','javascript','react.js','php','laravel','MySQL',"Google API"],link:"https://merry.ee.ncku.edu.tw/~nckutrans/index.php#/",img:"./trans.png",describe:"大二下使用React.js + PHP Laravel + MySQL個人獨立製作。採前後端分離、前端渲染，包含RWD設計、會員系統。因為我是轉系生，在轉系的過程中遇到了一些資訊不透明所造成的困難，我希望能用這個平台幫助未來想申請轉系的成大生。",code:"https://github.com/JiaAnTW/NCKU_Trans"},
            {name:"2019成大交管營",skill:['html','css','javascript','react.js'],img:"./tcmsmall.png",link:"http://wintercamp.tcm.ncku.edu.tw/#/",describe:"大二上使用create_react_app製作，包含手機版和電腦版。程式、美術設計、UI/UX設計、伺服器架設......跟網站有關一切皆為我自己製作。由於剛開始製作時自己的RWD技術不成熟，改以將電腦版網頁和手機版網頁架在不同伺服器，偵測使用者載具後導向對應網站。",code:"https://github.com/JiaAnTW/NCKU_TCM2019"},
            {name:"你看起來很想學C++",skill:['c++'],img:"./c++small.png",link:null,describe:"大一下專案作業，課程要求在Qt環境下加入多型、製作類似「雷霆戰機」的GUI遊戲。我將一般人學習C++的過程結合在遊戲中，並額外加入了成就紀錄系統，玩家在關掉遊戲後仍可保有其獲得成就，並能在下次遊玩時檢視。",code:"https://github.com/JiaAnTW/NCKU_1stGrade_3_CSProgramDesign2_Project3"}
        ],
        intro:"<p>為了實現突然想到的點子，結果就不小心跳入Web的坑。前端寫一寫，發現認識的人都沒辦法支援寫後端，所以乾脆全端都自己來。目前大概是70%前端30%後端的工程師。</p><p>喜歡web/app相關技術，也喜歡花時間學習如何用這些技術結合domain knowledge做出更好的產品，偶爾會研究做簡報和UI/UX。</p><p>近期在學習React Native和python。</p>",
        infoTopic:"聯絡我",
        essay:{
            topic:"著作",
            contest:"第11屆iT邦幫忙鐵人賽",
            name:"給初入JS框架新手的React.js入門 系列"
        },
        projectTopic:"作品",
        projectBtn:["了解更多","前往網站","看原始碼"],
        coding:["程式能力","常用語言/框架","使用過"],
        edu:{
            topic:"學經歷",
            school:["國立成功大學交通管理學士班","國立成功大學資訊工程學士班","在學中(大三)"]
        }
    },
    english:{
        name:"Jia An Chang",
        project:[
            {name:"Mask Map",skill:['html','css','javascript','jQuery','Boostrap','Leaflet'],img:"./mask.png",link:"https://jiaantw.github.io/mask/",describe:"",code:""},
            {name:"no man restaurant order system",skill:['html','css','javascript','vue.js','node.js','MySQL','LinePay API'],img:"./swr.png",link:"https://swruidd2019.herokuapp.com/#/",describe:"A website made for a order system of a no man restaurant. Produced by one UI designer and 4 web developer (including me). I accounted for some of the frontend works(vue.js), and all of the backend works (node.js, LinePay Api, mySQL) in this project. This website was designed for iphone6/7/8. Please open dev-mode and change to appropriate size before entering it.",code:"https://github.com/JiaAnTW/no_man_restaurant"},
            {name:"NCKU Trans",skill:['html','css','javascript','react.js','php','laravel','MySQL',"Google API"],link:"https://merry.ee.ncku.edu.tw/~nckutrans/index.php#/",img:"./trans.png",describe:"All of this website was made by myself with react.js, php Laravel, and mySQL. It's a plattform for students who successfully changed their major to share their experience. The website includes RWD feature and authentication system. Most data was proccessed on frontend side. Some data was stored in google sheet and passed by Google api because it would be more easliy to move the data collected by school to here.",code:"https://github.com/JiaAnTW/NCKU_Trans"},
            {name:"Website of NCKU TCM camp 2019",skill:['html','css','javascript','react.js'],img:"./tcmsmall.png",link:"http://wintercamp.tcm.ncku.edu.tw/#/",describe:"A side project I made in 2rd grade with create_react_app, including PC and Mobile version. All of this website, namely coding, UI/UX design, art design, server setting, are made by myself. Since I was not familiar with RWD at that time, the way to fulfill RWD is set PC and Mobile version websites in different severs. When users visit the website, the javascript in header will decide which website they should see based on their device. ",code:"https://github.com/JiaAnTW/NCKU_TCM2019"},
            {name:"Do you want to learn C++ ?",skill:['c++'],img:"./c++small.png",link:null,describe:"A project of C++ course assignment in 1st grade. The basic requirement is that we have to make a playable GUI Shoot`em up game in Qt. Also, we must include polymorphism in our code. I tried combining the process of learning C++ into this game, and added an acheivement system in the project, which alows players to see their award whenever they open this game.",code:"https://github.com/JiaAnTW/NCKU_1stGrade_3_CSProgramDesign2_Project3"}
        ],
        intro:"<p>Starting to learn web development was an accident for me.I just foucussed on fulfilling my idea at first, and didn't realize that it was the path of becoming a full-stack developer for me. Work on about 70% of frontend and 30% of backend today.</p><p>Interested in web/app programming, learning domain knowledge, UI/UX design and making slides.</p><p> Concern on react native and python recently.</p>",
        infoTopic:"Contact",
        essay:{
            topic:"Essay",
            contest:"11th ithelp ironman",
            name:"React.js tutorial for frontend framework beginner"
        },
        projectTopic:"Project",
        projectBtn:["more","demo","source code"],
        coding:["Programming skill","Famliar with","Has experience with"],
        edu:{
            topic:"Education",
            school:["NCKU TCM","NCKU CSIE<br>(computer science and information engineering)","now(junior)"]
        }
    }
} 

var nowLanguage="chinese";

const changeLanguage=()=>{
    nowLanguage=(nowLanguage=="chinese")?"english":"chinese";
    document.getElementById('circle').style.top=(nowLanguage=="chinese")?"5px":"35px";
    document.getElementsByClassName('name')[0].innerHTML=content[nowLanguage].name;
    document.getElementById('intro-content').innerHTML=content[nowLanguage].intro;
    document.getElementsByClassName('info-topic')[0].innerHTML=content[nowLanguage].infoTopic;
    document.getElementsByClassName('coding-level')[0].innerHTML=content[nowLanguage].coding[1];
    document.getElementsByClassName('coding-level')[1].innerHTML=content[nowLanguage].coding[2];
    document.getElementsByClassName('edu-topic')[0].innerHTML=content[nowLanguage].edu.topic;
    document.getElementsByClassName('school')[0].innerHTML=content[nowLanguage].edu.school[0];
    document.getElementsByClassName('school')[1].innerHTML=content[nowLanguage].edu.school[1];
    document.getElementsByClassName('now')[0].innerHTML=content[nowLanguage].edu.school[2];
    document.getElementsByClassName('others-topic')[0].innerHTML=content[nowLanguage].essay.topic;
    document.getElementsByClassName('contest')[0].innerHTML=content[nowLanguage].essay.contest;
    document.getElementsByClassName('link-btn')[0].innerHTML=content[nowLanguage].essay.name;
    document.getElementsByClassName('project-btn')[0].textContent=(nowLanguage=="chinese")?"個人資訊":"info";
    document.getElementsByClassName('project-btn')[1].textContent=(nowLanguage=="chinese")?"作品．其他":"project";
    document.getElementsByClassName('project-topic')[0].textContent=content[nowLanguage].projectTopic;
    content[nowLanguage].project.forEach((Element,Index)=>{
        document.getElementsByClassName('card-title')[Index].innerHTML=Element.name;
        if(nowLanguage!="chinese")
            document.getElementsByClassName('card-text')[Index].innerHTML=Element.describe.substr(0,100)+"(...)";
        else
            document.getElementsByClassName('card-text')[Index].innerHTML=Element.describe.substr(0,50)+"(...)";
        document.getElementsByClassName('open')[Index].innerHTML=content[nowLanguage].projectBtn[0];
    })
    document.getElementById('link').innerHTML=content[nowLanguage].projectBtn[1];
    document.getElementById('code').innerHTML=content[nowLanguage].projectBtn[2];
}



var nowHandle=0;

content[nowLanguage].project.forEach((Element,Index)=>{
    var tag='';
    Element.skill.forEach(element=>{
        tag+='<span class="badge badge-dark">'+element+'</span>'
    })
    const oldCode=$('.project-box').html();
    $('.project-box').html(oldCode+'<div class="card" style="width: 18rem;"><img src="'+Element.img+'"class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+Element.name+'</h5><p class="card-text">'+Element.describe.substr(0,50)+'(...)</p><button class="btn btn-dark open" onclick="openModal('+Index+')" id="open" data-toggle="modal" data-target="#exampleModal">了解更多</button></div></div>')
})

/*$('#open').click(function(){
    document.getElementById("modal-img").setAttribute("src", content["chinese"].project[1].img);
    document.getElementsByClassName("modal-title")[0].innerHTML=content["chinese"].project[1].name;
    document.getElementsByClassName("modal-body")[0].innerHTML=content["chinese"].project[1].describe;
})*/


const openModal=(Index)=>{
    nowHandle=Index;
    var tag='';
    content[nowLanguage].project[Index].skill.forEach(element=>{
        tag+='<span class="badge badge-dark">'+element+'</span>'
    })
    document.getElementById("modal-img").setAttribute("src", content[nowLanguage].project[Index].img);
    document.getElementById("skill").innerHTML=tag;
    document.getElementsByClassName("modal-title")[0].innerHTML=content[nowLanguage].project[Index].name;
    document.getElementsByClassName("modal-body")[0].innerHTML=content[nowLanguage].project[Index].describe;
    if(content[nowLanguage].project[Index].link===null)
        $("#link").hide();
    else
        $("#link").show();
}

const openLink=()=>{
    window.open(content[nowLanguage].project[nowHandle].link, '_blank');
}

const openGithub=()=>{
    window.open(content[nowLanguage].project[nowHandle].code, '_blank');
}

const openIT=()=>{
    window.open('https://ithelp.ithome.com.tw/users/20116826/ironman/2278', '_blank');
}

const changeShow=(id)=>{
    document.getElementsByClassName("project-btn")[id].style.backgroundColor="rgba(225,157,41,1)";
    document.getElementsByClassName("project-btn")[id].style.border="rgba(225,157,41,1)";
    document.getElementsByClassName("project-btn")[id].style.color="rgb(61, 61, 59)";
    document.getElementsByClassName("project-btn")[1-id].style.backgroundColor="transparent";
    document.getElementsByClassName("project-btn")[1-id].style.border="1px solid white";
    document.getElementsByClassName("project-btn")[1-id].style.color="white";
    if(id==0){
        $(".record").fadeOut("slow")
        $(".project").fadeOut("slow",()=>{
            $(".coding-edu").fadeIn("slow")
        })
    }
    else{
        $(".coding-edu").fadeOut("slow",()=>{
            $(".project").fadeIn("slow")
            $(".record").fadeIn("slow")
        })
    }
}

var getUrlString = location.href;
var url = new URL(getUrlString);
if(url.searchParams.get('ln')=="en"){
    changeLanguage();
}

const fixedMenu=()=>{
    const menu=document.getElementsByClassName("menu")[0];
    const header=document.getElementsByClassName("header")[0];
    if(window.pageYOffset<header.offsetHeight){
        menu.style.position="absolute";
        let height=header.offsetHeight
        menu.style.top=height.toString()+"px";
    }
    else{
        menu.style.position="fixed";
        menu.style.top="0px";
    }
}

fixedMenu();
window.addEventListener("scroll",fixedMenu);
window.addEventListener("resize",fixedMenu)